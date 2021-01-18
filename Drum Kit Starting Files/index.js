// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

var numOfDrumButtons = document.querySelectorAll(".drum").length





for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("mouseover", function(){
        
        var innerHTML = this.innerHTML;

            switch(innerHTML){    
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
                    console.log(innerHTML);

            }


        });
    }


