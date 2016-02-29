window.addEventListener('DOMContentLoaded', function() {

    /**
     * Global Variables
     */
    var body = document.getElementsByClassName('detail-main')[0];

    var chart;
    var chartOptions = {
        bindto: "#chart",
        data: {
            url: 'js/chart.json',
            mimeType: 'json',
            type: 'bar',
            colors: {
                data1: '#73adbf',
                data2: '#9abf97',
                data3: '#d99157'
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['M', 'T', 'M', 'T', 'F', 'S', 'S'],
                label: {
                    text: 'Wochentage',
                    position: 'outer-center'
                }
            },
            y: {
                label: {
                    text: 'Frequenz',
                    position: 'outer-middle'
                }
            }
        },
        bar: {
            width: {
                ratio: 0.8
            }
        },
        zoom: {
            enabled: true
        },
        legend: {
            show: true,
            position: 'right'
        }
    };

    /**
     * Initialize
     */
    (function() {
        // Generate Chart
        chart = c3.generate(chartOptions);

        // AddEventListener Functions
        addTransformationButtonsEventListeners();
        addColorSchemeSelectEventListeners();
        addPickASchemeEventListeners();
        addLabelChangeEventListeners();
    })();

    /**
     * Adds event listeners for the chart transformation buttons
     */
    function addTransformationButtonsEventListeners() {
        // Get All Transformation Buttons
        var transformationBtns = document.querySelectorAll('[data-cmd="transform"]');

        // Add Event-Listener
        foreach(transformationBtns, function(elem) {
            elem.addEventListener('click', function() {
                chart.transform(this.dataset.transform);
            });
        });
    }

    /**
     * Adds event listeners for chart color scheme changes
     */
    function addColorSchemeSelectEventListeners() {
        // Define Color-Schemes
        colorschemes = {
            scheme1: {
                data1: d3.rgb('#73ADBF'),
                data2: d3.rgb('#9ABF97'),
                data3: d3.rgb('#D99157'),
            },
            scheme2: {
                data1: d3.rgb('#cf6363'),
                data2: d3.rgb('#dbbe56'),
                data3: d3.rgb('#9abf97'),
            },
            scheme3: {
                data1: d3.rgb('#252525'),
                data2: d3.rgb('#565656'),
                data3: d3.rgb('#888888'),
            }
        };

        // Get Color-Scheme Selectors
        var colorSchemeSelectors = document.querySelectorAll('[data-cmd="changeColor"]');

        // Add Event-Listeners
        foreach(colorSchemeSelectors, function(elem) {
            elem.addEventListener('click', function() {
                chart.data.colors(colorschemes[this.dataset.colorScheme]);
            });
        });
    }

    /**
     * Adds event listeners for pick a scheme
     */
    function addPickASchemeEventListeners() {
        //Handle Pick-A-Scheme
        var color1 = document.getElementById('color1');
        var color2 = document.getElementById('color2');
        var color3 = document.getElementById('color3');
        var schemeSaveBtn = document.getElementById('set-scheme-save');

        //Save Scheme
        schemeSaveBtn.addEventListener('click', function() {

            var newScheme = {
                data1: d3.rgb(color1.value),
                data2: d3.rgb(color2.value),
                data3: d3.rgb(color3.value)
            };

            chart.data.colors(newScheme);

            $('#pick-a-scheme-modal').modal('toggle');
        });

        // Show modals on click
        var pickASchemeBtn = document.querySelectorAll('[data-cmd="pickScheme"]')[0];
        pickASchemeBtn.addEventListener('click', function(event) {
            $('#pick-a-scheme-modal').modal('show');
        });
    }

    /**
     * Adds event listeners for label name changes
     */
    function addLabelChangeEventListeners() {
        //Handle X-Label
        var xLabelInput = document.getElementById('set-x-label');
        var xSaveBtn = document.getElementById('set-x-label-save');

        //Save X-Label
        xSaveBtn.addEventListener('click', function() {
            var xLabel = document.getElementsByClassName('c3-axis-x-label')[0];

            xLabel.innerHTML = xLabelInput.value;

            $('#x-label-change').modal('toggle');
        });

        //Handle Y-Label
        var yLabelInput = document.getElementById('set-y-label');
        var ySaveBtn = document.getElementById('set-y-label-save');

        //Save Y-Label
        ySaveBtn.addEventListener('click', function() {
            var yLabel = document.getElementsByClassName('c3-axis-y-label')[0];

            yLabel.innerHTML = yLabelInput.value;

            $('#y-label-change').modal('toggle');
        });

        // Show modals on click
        window.addEventListener('click', function(event) {
            switch(event.target.getAttribute('class')) {
                case 'c3-axis-x-label':
                    $('#x-label-change').modal('show');
                    break;
                case 'c3-axis-y-label':
                    $('#y-label-change').modal('show');
                    break;
            }
        });
    }

    /**
     * For-Each Function
     *
     * @param Array collection
     * @param Function callback
     */
    function foreach(collection, callback) {
        for(var i = 0; i < collection.length; i++) {
            callback(collection[i]);
        }
    }
});
