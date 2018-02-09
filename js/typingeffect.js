/*
Created by Ryan Stewart 2017-10-24.
Inspired by HackerTyper.net.
Licensed under Mozilla Public License 2.0
View the license in the LICENSE file.
*/

var cursor = "|";
var cursorIndex = 0;
var cursorBlinkSpeed = 500;
var typeSpeed = 2;
var file = "res/dialogue.txt";
var text = "";
var blinkInterval;
var typeInterval;

//get current element
function doc() {
    var element = $("#console");

    if (!element.length) //if less than 0 auto reads as false
        forceStop();

    return element;
}

//get the last character of the console element
function getLastChar() {
    return doc().html().slice(-1);
}

//if the last character is the cursor, remove it. Else, append it.
function toggleCursor() {
    if (getLastChar() == cursor) {
        doc().html(doc().html().slice(0, -1));
    } else {
        doc().append(cursor);
    }
}

//append a new letter each call
function addText() {

    cursorIndex++;
    doc().html(text.slice(0, cursorIndex));

    window.scrollBy(0, 50); //courtesy of hackertyper.net 

    if (cursorIndex == text.length) {
        clearInterval(typeInterval);
    }

}

//stops the script in case of document removal
function forceStop() {
    clearInterval(blinkInterval);
    clearInterval(typeInterval);
}

//get info from text file and interpret line breaks correctly
$.get(file, function(data) {
    text = data.replace(new RegExp("\n", "g"), "<br/>");
});

//skip animation if enter or space pressed
document.addEventListener('keydown', function(event) {
    if (event.keyCode != 13 && event.keyCode != 32)
        return;

    clearInterval(typeInterval);
    doc().html(text);
    
});

$(document).ready(function() {
    //repeating calls
    blinkInterval = setInterval("toggleCursor();", cursorBlinkSpeed);
    typeInterval = setInterval("addText();", typeSpeed);
});