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
	$('#button-chart-process').click(function() {
		$('.chart-process').addClass('display-block').removeClass('display-none');
		$('.content-export').addClass('display-none').removeClass('display-block');
		$('#button-chart-process').addClass('display-none').removeClass('display-block');
		$('#button-fav').addClass('display-none').removeClass('display-block');
		$('#button-share').addClass('display-none').removeClass('display-block');
		$('#worksheet-preview').addClass('display-none').removeClass('display-block');
	});
	$('#content-save').click(function() {
		$('.chart-process').addClass('display-none').removeClass('display-block');
		$('.content-export').addClass('display-block').removeClass('display-none');
		$('#button-chart-process').addClass('display-block').removeClass('display-none');
		$('#button-fav').addClass('display-block').removeClass('display-none');
		$('#button-share-alt').addClass('display-block').removeClass('display-none');
		$('#button-share').addClass('display-block').removeClass('display-none');
		$('#worksheet-preview').addClass('display-block').removeClass('display-none');
	});
	$('[data-js="add-question"]').click(function() {
		var $question = $(this).parent().find('.question-1').clone().removeClass('question-1');

		$(this).parent().find('.question').append($question);
	});

});
