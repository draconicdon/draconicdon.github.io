$(function() {
	var backColor = $('li:first').css("backgroundColor");
	
	$('li').css({
		'font-family': 'Georgia',
		'color' : 'black',
		'font-size': '+=2',
		'backgroundColor': '#c5a996',
		'border': 'solid white 1px',
		'text-shadow': 'none'
		
	});
	
	
	$('ul:first').after("<p> Previous backgroundColor was: " + backColor + "</p>");
});