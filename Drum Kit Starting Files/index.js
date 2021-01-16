// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

var numOfDrumButtons = document.querySelectorAll(".drum").length





for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        if (this.innerHTML == "w"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-1.mp3');
            audio.play();
            this.style.color = "white";
        } else if (this.innerHTML == "a"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-2.mp3');
            audio.play();
            this.style.color = "white"; 
        } else if (this.innerHTML == "s"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-3.mp3');
            audio.play();
            this.style.color = "white"; 
        } else if (this.innerHTML == "j"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/crash.mp3');
            audio.play();
            this.style.color = "white";
        } else if (this.innerHTML == "k"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/snare.mp3');
            audio.play();
            this.style.color = "white";
        } else if (this.innerHTML == "l"){
            var audio = new Audio ('/Drum Kit Starting Files/sounds/kick-bass.mp3');
            audio.play();
            this.style.color = "white";
        }
    });

}





// var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-1.mp3');
// audio.play(); ;