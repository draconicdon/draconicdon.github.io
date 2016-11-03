/*
Name: Donovyn Pickler
Assignment: Inclass 5
Due date: 11/2/2016 at 11:59pm
*/


// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName("ul");
var nodeC = document.createElement("li");
var cText = document.createTextNode("cream");
nodeC.appendChild(cText);
list[0].appendChild(nodeC);

// ADD NEW ITEM START OF LIST
var nodeK = document.createElement("li");
var kText = document.createTextNode("kale");
nodeK.appendChild(kText);
list[0].insertBefore(nodeK, list[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
//Dom query
var listItems = document.getElementsByTagName('li');
for(var i = 0; i < listItems.length; i++)
{
	var tempEl = listItems[i]
	tempEl.classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

var header = document.getElementsByTagName('h2');
header[0].innerHTML = header[0].innerHTML + "  " + "<span>" + listItems.length+ "</span>";
//I can write html in here, that's kinda neat.  Probably not what I am supposed to do, but neat none the less.