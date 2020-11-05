// Get the first list element.
var elList = document.querySelector("ul");
// Create a list item element and the text node with new item.
var elItemFirst = document.createElement("li");
var elTextFirst = document.createTextNode("cream");
// Append the text node to the list item and add the list item into the list.
elItemFirst.appendChild(elTextFirst);
elList.appendChild(elItemFirst);


var elItemLast = document.createElement("li");
var elTextLast = document.createTextNode("kale");
elItemLast.appendChild(elTextLast);
// Insert item before the first child of the list.
elList.insertBefore(elItemLast, elList.firstChild);

// Select all list items from the list.
var listItems = document.querySelectorAll("li");
// Go through every list item in listItems and class cool to each item.
var i = 0;
for(i = 0; i < listItems.length; i++){
    listItems[i].className = "cool"
}


// Select the first header.
var elHeader = document.querySelector("h2");
// Get the text from the header.
var elHeaderText = elHeader.textContent;
var numOfListItems = listItems.length;
// New content to display.
var updatedHeader = elHeaderText + `<span>` + numOfListItems + `</span>`;
elHeader.innerHTML = updatedHeader;

