var xStart = 0;
var yStart = 0;
var xEnd = 0;
var yEnd = 0;
var xString = "If you're reading this then you have found an error.";
var yString = "If you're reading this than you have found an error.";

var table = document.getElementById("table");

var submitButton = document.getElementById("creatorButton");
submitButton.onclick = fetchNumbers;

var isValid;

$("head").append('<script type="text/javascript" src="' + 'js/jquery-validation/dist/jquery.validate.js' + '"></script>');

//jquery Validator stuff here
/*
var highlighter = {
	light : function(strId){
		$('#' + strId).css({"border" : "3px double dashed red"});
		
	},
	
	unlight : function(strId){
		$('#' + strId).css({"border" : "  "});
	},
}

// $('#frm').validate( {
$('.form-group').validate({
	
	rules: {
		xStart:{
			required: true,
			digits: true
		},
		xEnd:{
			required: true,
			digits: true
		},
		yStart:{
			required: true,
			digits: true
		},
		yEnd:{
			required: true,
			digits: true
		}
	},
	messages:{
		xStart:{
			required: function(){
				highlighter.light("xStart");
				return "The start of the x-axis is required.";
			},
			digits: function(){
				highlighter.light("xStart");
				return "The start of the x-axis field must be a number.";
			}
		},
		xEnd:{
			required: function(){
				highlighter.light("xEnd");
				return "The end of the x-axis is required.";
			},
			digits: function(){
				highlighter.light("xEnd");
				return "The end of the x-axis field must be a number.";
			}
		},
		yStart:{
			required: function(){
				highlighter.light("yStart");
				return "The start of the y-axis is required.";
			},
			digits: function(){
				highlighter.light("yStart");
				return "The start of the y-axis field must be a number.";
			}
		},
		yEnd:{
			required: function(){
				highlighter.light("yEnd");
				return "The end of the y-axis is required.";
			},
			digits: function(){
				highlighter.light("yEnd");
				return "The end of the y-axis field must be a number.";
			}
		}
	},
	
	
	errorLocation : function( error, element ) {
          //// N.B. the $(error) object must be appended somewhere so that it can be automatically
          //// deleted by the Validation plugin.  Otherwise, the error message cannot be deleted
          //// and errors accumulate.
          //
          // console.log( error.html() + "\n" + element[0].attributes.length ) ;
          // http://stackoverflow.com/questions/5583641/jquery-get-properties-of-element
          // for ( var k = 0 ; k < element[0].attributes.length ; k++ ) {
          //   console.log( element[0].attributes[k].name + " = " + element[0].attributes[k].value ) ;
          // }
          // the above returns property names: type, name, id, and class
          // 
          // var elemID = element[0].attributes["id"].value ;
          // var strMsg = $(error).html().substring( 0, $(error).html().length - 1 ) ;
          // $(error).appendTo( element.parent().parent().parent().parent().parent() ) ;
          // console.log( $(element.parent().parent().parent().parent().parent()).attr("id") ) ;
          $('#creatorButton').before($(error));
        }
});
*/

//End validator plugin related javascript







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

/*
//handling improper input.
function inputIsValid(){
	return Boolean(isInt(xStart) && isInt(xEnd) && isInt(yStart) && isInt(yEnd));
}

function isInt(n){
 return Boolean(Number(n) === n && n % 1 === 0 && n > 0);
}

*/

//http://www.w3schools.com/jsref/met_table_createthead.asp
//Generate and push the table to the page.
function generateTable(){
	var header = table.createTHead();

	
	var row = header.insertRow(0);
	for(var ii = 0; ii <= Math.abs(xEnd - xStart) + 1; ii++){ //Fills row
		var cell=row.insertCell(ii);
		if(ii ===0){
			$(cell).addClass("multiplier");
			cell.innerHTML = " x ";
		}else{
			$(cell).addClass("baseXValue");
			cell.innerHTML = (xStart + ii - 1);
		}
	}
	

	for(var i = 1; i <= Math.abs(yEnd - yStart) + 1; i++){ //determines row
		var row = header.insertRow(i);
		
		
			for(var ii = 0; ii <= Math.abs(xEnd - xStart) + 1; ii++){ //Fills row
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

/*
function createCell(num1, num2){
	
}
*/