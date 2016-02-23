$(function(){
	var _showTab = 0;
	$('ul.switch-button li').eq(_showTab).addClass('turnon');
	$('ul.switch-button li').click(function() {
		var $color = $(this)
		$color.addClass('turnon').siblings('.turnon').removeClass('turnon');
	});
	$('#switch-button-1').click(function() {
		$('.content-wrapper dl').addClass('display-1 ').removeClass('display-2');
	});
	$('#switch-button-2').click(function() {
		$('.content-wrapper dl').addClass('display-2 ').removeClass('display-1');
	});



});

// var c1 = document.getElementById("c1");
// var parent = document.getElementById("p1");
// c1.width = parent.offsetWidth - 40;
// c1.height = parent.offsetHeight - 40;
//
// var data1 = {
//   labels: ["M", "T", "W", "T", "F", "S", "S"],
//   datasets: [{
//     fillColor: "rgba(255,255,255,.1)",
//     strokeColor: "rgba(255,255,255,1)",
//     pointColor: "#D99157",
//     pointStrokeColor: "rgba(255,255,255,1)",
//     data: [150, 200, 235, 390, 290, 250, 250]
//   }]
// }
//
// var options1 = {
//   scaleFontColor: "rgba(255,255,255,1)",
//   scaleLineColor: "rgba(255,255,255,1)",
//   pointLabelFontColor: "#ffffff",
//   scaleGridLineColor: "transparent",
//   bezierCurve: false,
//   scaleOverride: true,
//   scaleSteps: 5,
//   scaleStepWidth: 100,
//   scaleStartValue: 0
// }
//
// new Chart(c1.getContext("2d")).Line(data1, options1)
