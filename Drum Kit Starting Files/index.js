// document.querySelectorAll("button")[0].addEventListener("click", handleClick);

var numOfDrumButtons = document.querySelectorAll(".drum").length





for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("i got clicked");
    });

}
