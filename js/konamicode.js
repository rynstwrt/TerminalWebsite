var keysPressed = [];

//up up down down left right left right B A
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; 

var url = "https://www.youtube.com/embed/Q5729eGW1sE";

document.addEventListener('keydown', function(event) {
    keysPressed.push(event.keyCode);

    if (!keysPressed.toString().includes(konamiCode.toString()))
    	return;

    keysPressed = [];
    $(document.documentElement).css("background-color", "black");
    var youtubeOptions = ["?rel=0", 
    "&autoplay=1", 
    "&controls=0",
    "&showinfo=0"];
    $(document.documentElement).html('<iframe width="560" height="315" src="' + url + youtubeOptions.join("") + '" frameborder="0" allowfullscreen></iframe>');

});