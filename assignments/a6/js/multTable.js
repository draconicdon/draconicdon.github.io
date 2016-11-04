var xStart = 0;
var yStart = 0;
var xEnd = 0;
var yEnd = 0;
var xString = "If you're reading this then you have found an error.";
var yString = "If you're reading this than you have found an error.";

var table = document.getElementById("table");

var submitButton = document.getElementById("creatorButton");
submitButton.onclick = fetchNumbers;

//Pull the numbers from the forms and assign them to the appropriate variable.
function fetchNumbers(){
	table.innerHTML = " ";
	xStart = Number(document.getElementById("xStart").value);
	yStart = Number(document.getElementById("yStart").value);
	xEnd = Number(document.getElementById("xEnd").value);
	yEnd = Number(document.getElementById("yEnd").value);
	
	
	pushNumbers();
	generateTable();
	/*
	if(inputIsValid()){
		generateTable();
	}
	Else{
		table.innerHTML = "Please enter integers only.";
	}
	*/
}

//Print numbers to console.
function pushNumbers(){
	xString = "x value starts at " + xStart + " and ends at " + xEnd + '.';
	yString = "y value starts at " + yStart + " and ends at " + yEnd + '.';
	console.log(xString);
	console.log(yString);
	
}


//handling improper input.
function inputIsValid(){
	return Boolean(isInt(xStart) && isInt(xEnd) && isInt(yStart) && isInt(yEnd));
}

function isInt(n){
 return Boolean(Number(n) === n && n % 1 === 0 && n > 0);
}

//http://www.w3schools.com/jsref/met_table_createthead.asp
//Generate and push the table to the page.
function generateTable(){
	var header = table.createTHead();

	
	var row = header.insertRow(0);
	for(var ii = 0; ii <= xEnd - xStart + 1; ii++){ //Fills row
		var cell=row.insertCell(ii);
		if(ii ===0){
			$(cell).addClass("multiplier");
			cell.innerHTML = " x ";
		}else{
			$(cell).addClass("baseXValue");
			cell.innerHTML = (xStart + ii - 1);
		}
	}
	

	for(var i = 1; i <= yEnd - yStart + 1; i++){ //determines row
		var row = header.insertRow(i);
		
		
			for(var ii = 0; ii <= xEnd - xStart + 1; ii++){ //Fills row
				var cell=row.insertCell(ii);	
				if(ii === 0){
					$(cell).addClass("baseYValue");
					cell.innerHTML = (yStart+ i - 1);
				}else{
					cell.innerHTML = (xStart + ii - 1) * (yStart+ i - 1);
				}
			}
	}
	
}

function createCell(num1, num2){
	
}