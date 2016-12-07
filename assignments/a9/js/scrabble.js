/*
Full Name: Donovyn Arthur Pickler
Email Address: draconicdon@gmail.com
Student Email Address: donovyn_pickler@student.uml.edu
Student Number: 01402662
Course Number: COMP.4610.201
Description:  Javascript file for assignment 9

Back end functions and the like for assignment 9.
*/

var scrabbleHand = [];
var score = 0;

//The array of tiles below was gotten from Piazza.  Credit for creation goes to Jesse M. Heines.
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12 } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1  } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2  } ;

//The dicionary based code below was gotten from piazza. Credit for creation goes to Jason Downing.
// The dictionary lookup object
var dict = {};
 
// Do a jQuery Ajax request for the text dictionary
$.get( "txt/dictionary.txt", function( txt ) {
    // Get an array of all the words
    var words = txt.split( "\n" );
 
    // And add them as properties to the dictionary lookup
    // This will allow for fast lookups later
    for ( var i = 0; i < words.length; i++ ) {
        dict[ words[i] ] = true;
    }
});


// Modified to only pass in one word, which can then be verified.
function findWord( word ) {
    // See if it's in the dictionary
    if ( dict[ word ] ) {
        // If it is, return that word
        return 1;
    }

    // Otherwise, it isn't in the dictionary.
    return 0;
}

//Original code used to generate the play field.
function generateField(){
var targets = document.getElementsByTagName("target");
	//console.log(targets);
	for (var i = 1; i < targets.length+1; i++) { 
		var selector = Math.floor(Math.random()*10); //generates a number between 0 and 9
		var childSelector = "target:nth-child(" + i + ")";
		switch(selector){
			case 0: //Tripple word score
				$(childSelector).css('background-image', "url(\"image/spaces/tWord.png\")");
				break;
			case 1: //tripple letter score
				$(childSelector).css('background-image', "url(\"image/spaces/tLetter.png\")");
				break;
			case 2: //double word score
				$(childSelector).css('background-image', "url(\"image/spaces/dWord.png\")");
				break;
			case 3: //double letter score
				$(childSelector).css('background-image', "url(\"image/spaces/dLetter.png\")");
				break;
			case 4:
			case 5: //blank space, no modifier
			case 6:
			case 7:
			case 8:
			case 9:
			default:
				$(childSelector).css('background-image', "url(\"image/spaces/blank.png\")");
				break;
		}
		//console.log("Target " + childSelector + "was given value" + selector);
	}  
}

//Fills the hand with tiles.
function fillHand(){
	var hand = document.getElementsByClassName("tile");
	//console.log(hand);
	
	for (var i = 1; i < hand.length+1; i++){
		console.log();
		handIndex = "#tile:nth-child(" + i + ")";
		newTile = pullTile();
		//console.log("Trying to append " + handIndex+ " to " + newTile);
		$(handIndex).css("background-image", newTile);

	}
	
	
}

//draws a tile from the bag
function pullTile(){
	var tileNo = (Math.random() *100) % 26;
	var tileChar = String.fromCharCode(65 + tileNo);
	
	while(ScrabbleTiles[tileChar][2] < 1){
		tileNo = (Math.random() *100) % 26;
		tileChar = String.fromCharCode(65 + tileNo);
	}
	
	updateBag(tileChar);
	updateDistribution();
	var returnable = "url(\"image/tiles/" + tileChar + ".jpg\")";
	return returnable;
}

//removes a pulled tile from the bag array
function updateBag(letter){
	ScrabbleTiles[letter]["number-remaining"] = ScrabbleTiles[letter]["number-remaining"] - 1;
}

//Updates the tile distribution left in the bag.
function updateDistribution(){
	for (var i = 0; i < 26; i++){
		var tileChar = String.fromCharCode(65 + i);
		var charSelector = "."+ tileChar;
		//console.log(tileChar);
		$(charSelector).html(tileChar + " : " + ScrabbleTiles[tileChar]["number-remaining"]);
	}
	return 0;
}


//Start this when the HTML stuff loads.
 $(document).ready( function () {
	
	//console.log("GOING TO TRY AND GENERATE A NEW FIELD NOW");	
	generateField();
	fillHand()
	
	//
	
	} );

