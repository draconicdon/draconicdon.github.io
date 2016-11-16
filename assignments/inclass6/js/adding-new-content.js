$(function() {
	$('ul').before('<p class="notice"> Just Updated! </p>');
	
	$('li.hot').prepend("+");
	
	$('li:last').after("<li> New element </li>");
});