var greeting = "welcome!";



var date = new Date();
var time = date.getTime();
var hours = date.getHours();

if(hours < 4){
	greeting = "Why are you still awake?";
}else if(hours < 12){
	greeting = "Good morning!";
}else if(hours < 15){
	greeting = "Good afternoon!";
}else if(hours < 18){
	greeting = "Good day!";
}else if(hours < 23){
	greeting = "Good evening!";
}else{
	// greeting = "Error: Unable to detect time."
}

document.write('<h3>' + greeting + '</h3>');