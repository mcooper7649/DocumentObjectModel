// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

var numOfDrumButtons = document.querySelectorAll(".drum").length





for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-1.mp3');
        audio.play(); ;
    });

}
