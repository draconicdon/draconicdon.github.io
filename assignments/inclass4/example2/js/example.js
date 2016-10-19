// Create variables for the welcome message
var greeting = 'Greetings ';
var name = 'Subject 72';
var message = ', please check your order:';
// Concatenate the three variables above to create the welcome message
var welcome = greeting + name + message;

//I created some if-else statements to catch and prettify floats.

// Create variables to hold details about the sign
var sign = "Cell 43";
var tiles = sign.length;
var subTotal = 10 + (tiles * 4.5); //flat labor cost + cost per tile
var shipping = .5;
var grandTotal = subTotal + shipping;

// Get the element that has an id of greeting
var el = document.getElementById('greeting');
// Replace the content of that element with the personalized welcome message
el.textContent = welcome;

// Get the element that has an id of userSign then update its contents
var elSign = document.getElementById('userSign');
elSign.textContent = sign;

// Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

// Get the element that has an id of subTotal then update its contents
var elSubTotal = document.getElementById('subTotal');
if ((subTotal % 1) > 0){
	elSubTotal.textContent = '$' + subTotal + '0';
}else{
	elSubTotal.textContent = '$' + subTotal + ".00";
}


// Get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
if((shipping % 1) > 0){
	elShipping.textContent = '$' + shipping + '0';
}else{
	elShipping.textContent = '$' + shipping+ ".00";
}


// Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById('grandTotal');
if((grandTotal %1) > 0){
	elGrandTotal.textContent = '$' + grandTotal+ '0';
}else{
	elGrandTotal.textContent = '$' + grandTotal +".00";
}

