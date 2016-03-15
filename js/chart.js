window.addEventListener('DOMContentLoaded', function() {

    /**
     * Global Variables
     */
    var body = document.getElementsByTagName('body')[0];

    var chart;
    var colorPalette = {
        data1: '#73adbf',
        data2: '#dbbf56',
        data3: '#6caebe',
        data4: '#de905f',
        data5: '#645b4d',
        data6: '#40a194',
        data7: '#d56164',
        data8: '#95bf9b',
        data9: '#cc78ac',
        data10: '#ab853d',
        data11: '#c24447',
        data12: '#458153',
        data13: '#3a80b9',
        data14: '#009985',
        data15: '#40372a',
        data16: '#c56c32',
        data17: '#b05598'
    };

    var colorPalette2 = {
        data1: '#556270',
        data2: '#4ECDC4',
        data3: '#C7F464',
        data4: '#FF6B6B',
        data5: '#C44D58',
        data6: '#00A0B0',
        data7: '#6A4A3C',
        data8: '#CC333F',
        data9: '#EB6841',
        data10: '#EDC951',
        data11: '#E5FCC2',
        data12: '#9DE0AD',
        data13: '#E6AC27',
        data14: '#BF4D28',
        data15: '#E9E9E9',
        data16: '#BCBCBC',
        data17: '#3299BB'
    };

    var colorPalette3 = {
        data1: '#000000',
        data2: '#333333',
        data3: '#444444',
        data4: '#555555',
        data5: '#666666',
        data6: '#777777',
        data7: '#888888',
        data8: '#999999',
        data9: '#AAAAAA',
        data10: '#BBBBBB',
        data11: '#CCCCCC',
        data12: '#DDDDDD',
        data13: '#EEEEEE',
        data14: '#ECECEC',
        data15: '#BCBCBC',
        data16: '#DEDEDE',
        data17: '#BFBFBF'
    };

    /**
     * Initialize
     */
    (function() {
        // Generate Chart
        loadData2Chart('pie');

        // AddEventListener Functions
        addTransformationButtonsEventListeners();
        addColorSchemeSelectEventListeners();
        addPickASchemeEventListeners();
        addLabelChangeEventListeners();
        exportAsLink();
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
                var switcher = this.dataset.transform;

                if(switcher === 'pie' || switcher === 'donut') {
                    loadData2Chart(switcher);
                    return;
                }
                else {
                    loadData1Chart(switcher);
                }
            });
        });
    }

    /**
     * Loads data for bar-charts
     */
    function loadData1Chart(type) {
        var barChartOptions = {
            bindto: "#chart",
            data: {
                url: 'js/chart.json',
                mimeType: 'json',
                type: type,
                names: {
                    data1: 'Gramm/Tag'
                },
                colors: colorPalette
            },
            axis: {
                x: {
                    type: 'category',
                    categories: [
                        'BW',
                        'BY',
                        'SL',
                        'RP',
                        'HE',
                        'TH',
                        'SN',
                        'NW',
                        'NI',
                        'HB',
                        'ST',
                        'BB',
                        'BE',
                        'HH',
                        'MV',
                        'SH'
                    ],
                    label: {
                        text: 'Bundesland',
                        position: 'outer-middle'
                    }
                },
                y: {
                    label: {
                        text: 'Gramm/Tag',
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
                show: false,
                position: 'right'
            }
        };

        chart = c3.generate(barChartOptions);
    }

    /**
     * Loads data for pie-charts
     */
    function loadData2Chart(type) {
        var pieChartOptions = {
            bindto: "#chart",
            data: {
                url: 'js/pie.json',
                mimeType: 'json',
                type: type,
                names: {
                    data1: "Baden-Württemberg",
                    data2: "Bayern",
                    data3: "Saarland",
                    data4: "Rheinland-Pfalz",
                    data5: "Hessen",
                    data6: "Thüringen",
                    data7: "Sachsen",
                    data8: "Nordrhein-Westfalen",
                    data9: "Niedersachsen",
                    data10: "Bremen",
                    data11: "Sachsen-Anhalt",
                    data12: "Brandenburg",
                    data13: "Berlin",
                    data14: "Hamburg",
                    data15: "Mecklenburg-Vorpommern",
                    data16: "Schleswig-Holstein",
                },
                colors: colorPalette
            },
            axis: {
                x: {
                    label: {
                        text: 'Bundesland',
                        position: 'outer-middle'
                    }
                },
                y: {
                    label: {
                        text: 'Gramm/Tag',
                        position: 'outer-middle'
                    }
                }
            },
            legend: {
                show: true,
                position: 'right'
            }
        };

        chart = c3.generate(pieChartOptions);
    }

    /**
     * Adds event listeners for chart color scheme changes
     */
    function addColorSchemeSelectEventListeners() {
        // Define Color-Schemes
        colorschemes = {
            scheme1: {
                data1: d3.rgb(colorPalette.data1),
                data2: d3.rgb(colorPalette.data2),
                data3: d3.rgb(colorPalette.data3),
                data4: d3.rgb(colorPalette.data4),
                data5: d3.rgb(colorPalette.data5),
                data6: d3.rgb(colorPalette.data6),
                data7: d3.rgb(colorPalette.data7),
                data8: d3.rgb(colorPalette.data8),
                data9: d3.rgb(colorPalette.data9),
                data10: d3.rgb(colorPalette.data10),
                data11: d3.rgb(colorPalette.data11),
                data12: d3.rgb(colorPalette.data12),
                data13: d3.rgb(colorPalette.data13),
                data14: d3.rgb(colorPalette.data14),
                data15: d3.rgb(colorPalette.data15),
                data16: d3.rgb(colorPalette.data16)
            },
            scheme2: {
                data1: d3.rgb(colorPalette2.data1),
                data2: d3.rgb(colorPalette2.data2),
                data3: d3.rgb(colorPalette2.data3),
                data4: d3.rgb(colorPalette2.data4),
                data5: d3.rgb(colorPalette2.data5),
                data6: d3.rgb(colorPalette2.data6),
                data7: d3.rgb(colorPalette2.data7),
                data8: d3.rgb(colorPalette2.data8),
                data9: d3.rgb(colorPalette2.data9),
                data10: d3.rgb(colorPalette2.data10),
                data11: d3.rgb(colorPalette2.data11),
                data12: d3.rgb(colorPalette2.data12),
                data13: d3.rgb(colorPalette2.data13),
                data14: d3.rgb(colorPalette2.data14),
                data15: d3.rgb(colorPalette2.data15),
                data16: d3.rgb(colorPalette2.data16)
            },
            scheme3: {
                data1: d3.rgb(colorPalette3.data1),
                data2: d3.rgb(colorPalette3.data2),
                data3: d3.rgb(colorPalette3.data3),
                data4: d3.rgb(colorPalette3.data4),
                data5: d3.rgb(colorPalette3.data5),
                data6: d3.rgb(colorPalette3.data6),
                data7: d3.rgb(colorPalette3.data7),
                data8: d3.rgb(colorPalette3.data8),
                data9: d3.rgb(colorPalette3.data9),
                data10: d3.rgb(colorPalette3.data10),
                data11: d3.rgb(colorPalette3.data11),
                data12: d3.rgb(colorPalette3.data12),
                data13: d3.rgb(colorPalette3.data13),
                data14: d3.rgb(colorPalette3.data14),
                data15: d3.rgb(colorPalette3.data15),
                data16: d3.rgb(colorPalette3.data16)
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
        var color4 = document.getElementById('color4');
        var color5 = document.getElementById('color5');
        var color6 = document.getElementById('color6');
        var color7 = document.getElementById('color7');
        var color8 = document.getElementById('color8');
        var color9 = document.getElementById('color9');
        var color10 = document.getElementById('color10');
        var color11 = document.getElementById('color11');
        var color12 = document.getElementById('color12');
        var color13 = document.getElementById('color13');
        var color14 = document.getElementById('color14');
        var color15 = document.getElementById('color15');
        var color16 = document.getElementById('color16');

        var schemeSaveBtn = document.getElementById('set-scheme-save');

        //Save Scheme
        schemeSaveBtn.addEventListener('click', function() {

            var newScheme = {
                data1: d3.rgb(color1.value),
                data2: d3.rgb(color2.value),
                data3: d3.rgb(color3.value),
                data4: d3.rgb(color4.value),
                data5: d3.rgb(color5.value),
                data6: d3.rgb(color6.value),
                data7: d3.rgb(color7.value),
                data8: d3.rgb(color8.value),
                data9: d3.rgb(color9.value),
                data10: d3.rgb(color10.value),
                data11: d3.rgb(color11.value),
                data12: d3.rgb(color12.value),
                data13: d3.rgb(color13.value),
                data14: d3.rgb(color14.value),
                data15: d3.rgb(color15.value),
                data16: d3.rgb(color16.value),
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
     * Open Export As Link modal
     */
     function exportAsLink() {
        var trigger = document.getElementById('export-as-link-trigger');

        trigger.addEventListener('click', function() {
            $('#export-as-link').modal('show');
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
