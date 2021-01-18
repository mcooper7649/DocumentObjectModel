// This Section of Code is Dedicated to Detecting mouseover the buttons"
var numOfDrumButtons = document.querySelectorAll(".drum").length





for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", function(){
        
        var innerHTML = this.innerHTML;

        makeSound(innerHTML)    


        });
    }


// This section of Code is Dedicated to Detecting Keydowns.

document.addEventListener("keydown", function(event){
    makeSound(event.key)
})


// Using a function for the Switch Statement Audio lets you recycle code
// Don't forget to pass the "key" ; In our example we used innerHTML and Event.key

function makeSound(key){
    switch(key){    
        case "w":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-1.mp3');
             audio.play(); ;

        break;  
        case "a":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-2.mp3');
             audio.play(); ;

        break;  
        case "s":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-3.mp3');
             audio.play(); ;

        break;  
        case "d":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/tom-4.mp3');
             audio.play(); ;

        break;  
        case "j":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/crash.mp3');
             audio.play(); ;

        break;  
        case "k":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/snare.mp3');
             audio.play(); ;

        break;  
        case "l":
             var audio = new Audio ('/Drum Kit Starting Files/sounds/kick-bass.mp3');
             audio.play(); ;

        break;  
        default:
            console.log(key);

    }
}