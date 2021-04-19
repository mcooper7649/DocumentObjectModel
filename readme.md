 ## DOM - Document Object Model
 --

 # Introductions to the Document Object Model
 ---
 1. JavaScript lets DOM interact with the HTML and CSS.
 2. This adds behavior to your site.
 
 
 ### Adding JavaScript to Websites
 ---

 1. Inline JavaScript like CSS is bad practice and should be avoided at all costs. | onload="codeGoeshere".
 2. Script Tag JS is | <script>alert("HELLO")</script>
 3. External JS like CSS can be connected using the example|    <script src="index.js" charset="utf-8"></script>   with a seperate file name injex.jx
 4. JS you want to add to the bottom of your html documment, vs the top like CSS.# DocumentObjectModel


# DocumentObjectModel
---

Getters Setters and Methods

1. Getter - car.color; //red; this gets the object color property
2. Setter - car.numberOfDoors = 0;  // This sets our car objects property numberOfDoors to 0
3. Method - car.drive(); // Calling the method will do something, drive in this instance, similiar to a function. A method is something an object can do so it has to be associated with an object!


## DOM Challenge 1
---

1. Select the third LI tag
2. Change the text from "Third" to "Mike"
3. Can't Touch the HTML file - You have to do it from the command line.
4. Use HTML Tree Generator to see how the tree of code is stacked

* See solution.js for solution.


## DOM Common Tags and Uses
---

getElementsByTagName

1. document.getElementsByTagName("li")  = returns an array if you compared to our dom challenge index.html 
2. Arrays cannot have properties set broadly, you need to set it for the specific element.   document.getElementsByTagName("li)[3].style.color = "purple"; // would set the item to purple.
3. Array Returned

getElementsbyClassName

1. document.getElementsByClassName("btn") would also return an Array even though their is only 1 element that will be returned.
2. So you would either need to set the document.getElementsByClassName("btn")[0].style.color = "red"; Or Drop the s and use the singular.
3. Array Returned


getElementByID

1. ID's will only return 1 item, instead of an Array. Proper web design doesn't allow for ID's to be used multiple times in the HTML.
2. document.getElementById("title").innerHTML = "Good Bye"; 
3. Single Element Returned

querySelector

1. document.querySelector("li a")  //These are the same selectors that CSS uses. In this example the CSS heirarchal is used, selecting the anchor withing the li selector.
2. Single Element Returned
3. Accepts "Elements Classes or IDs"
4. Most powerful but remember it uses the dot notation and combination methods that CSS uses.
5. Combining selectors can help you target your elements with little code | document.querySelector("li.a")  //no spaces because its the same element
6. If your query selects multiple items, you will only get the first element that satifies the selector. 

querySelectorAll
1. document.querySelector("#list .item") // Targets our list ID, then ALL our child item class elements
2. This returns a Array | document.querySelector("#list .item")[2].style.color = "blue"; // This is how you would modify an element using this selector.


Helpful Notes
---

1. You will see querySelector in the wild more than you will see getElements due to it being more targeted.


## Dom Challenge #2

1. Change Text color of Google Link (list item 1) to red.
2. Use HTML tree generator for help

* See solution2.js for solution


## Using JavaScript to Manipulate the DOM
---

[W3 Styles](https://www.w3schools.com/jsref/dom_obj_style.asp)

1. camelCasing is standard in JavaScript and DOM. 
2. Due to camelCasing some styles may differ from css; For example font-size: 16px;    |  fontSize = "16px";
3. NO Dashes
4. Value are represented as strings. CSS vs DOM | visibility: hidden; translates to visibility = "hidden";  //making it a string value


## Dom Challenge #3
---
1. Using Javascript Dom Make the Button background "yellow"
2. Use HTML tree Generator

* See solution3.js for solution


## Seperation of Concerns
---
1. HTML is for Structure.
2. CSS is Style.
3. JS is for Behavior.

## Manipulating Styles with classLists  - Adding, Removing and Toggling
---

1. document.querySelector("button").classList; //returns the list of classes
2. Now we can use methods to add classes to our elements classlist | Add, Remove and Toggle
    - document.querySelector("button").classList.add("invisible") // This would add a class named invisible
    - document.querySelector("button").classList.remove("invisible") // This would remove a class named invisible
    - document.querySelector("button").classList.toggle("invisible") // Toggles class opposite of what it currently is.

## classLists Challenge
---

1. In Stylesheet create a class called "huge"
2. Change font-size in "Huge" to 10 REM.
3. In the JS, Apply Huge to the H1.
    * classLists.js for solution


## Manipulating Text with innerHTML and textContent
---

1. innerHtml // The text inside the html; can be additional html
2. textContent // Similiar to innerHTML but specific to text
    * Remember the differences as using a Setter you can be flexible.
    * Example | document.querySelector("h1").innerHTML = "<em>Good Bye</em>"



## Attributes
---

1. Attributes examples include | href, type, class, src,  | ``<a href="www.google.com">Google </a>`` // href="www.google.com" is our attribute
2. Want to get our attributes associated with a tag? | ``document.querySelector("a").attributes;`` // retreives an array of our attributes
3. Want to get a specific attribute? | ``document.querySelector("a").getAtribute("href");` // retreives an "https://www.google.com"
4. Want to set a specific attribute? | ``document.querySelector("a").setAtribute("href", "https://www.bing.com");` // sets our attribute to bing


### DOM Challenge | Dice Game
---

[Challenge-Files](https://drive.google.com/uc?export=download&id=1jVeyfctlACds5zBKiSquVBrCxfg4y68v)

1. Two Dice on Screen with Randomly Display a number (1 - 6 )
2. One Dice will be Assigned to Each Player; 2 Players Total
3. On Page Refresh it will roll the dice and whoever has a higher number  it will announce "Player x Wins!"


### Dom Challenge | Drum Kit 1
---

1. Link index.js to index.html then test using an alert
2. Lets create a function that does something when the button is click
3. Use Dom to Select what buton our handleClick will use.
4. addEventListener to our target | Remember not to add () so it doesn't get called on load.
```document.querySelector("button").addEventListener("click", handleClick)```
```target.addEventListener(type, listener [, options]);```  //Example Structure
5. Now Add an EventListener to ALL the buttons so it says "I got clicked" if you click any button.


[Drum Kit Files](https://drive.google.com/uc?export=download&id=15mCNTdl76jPIG-T239u1XBEY81wrYy7Y)

[MDN School | addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
 

 ##EventListener Noteables 
 ---

 1. You can use Anonymous or Named Functions when using addEventListener.
 
 Anonymous function using addEventListener
 
```
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("i got clicked");
    });
```

 Named function using addEventListener

 ```
 document.querySelectorAll(".drum")[i].addEventListener("click", respondToClick)
 
 
 function respondToClick(){
        alert("i got clicked");
    }
```


### Higher Order Function
---

1. This allows you to pass functions into functions.
```
function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2
}

function divide (num1, num2){
    return num1 / num2
}

function subtract (num1, num2){
    return num1 - num2
}




function calculate(num1, num1, operator){
    return operator (num1, num2)  // This HOF uses operator to pass our number and operator across.
}
```


### Dom Challenge | Drum Kit 2
---

* Play Audio Using JS Example 
``var audio = new Audio ('audio_file.mp3');
audio.play();``

1. Inside the sounds folder play tom-1 drum audio file when all the drums are clicked. Replace the Alert. 

## this
---

for (var i = 0; i < numOfDrumButtons; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        console.log("this")
    });

}


### Deeper Understanding of JavaScript Objects
--- 

1. Instead of creating a ton of variables, for each object needed, ie bellboy1; bellboy2, Objects let you create properties and adds more defined structure.

```
// Example Object

var bellboy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: True,
    languages: ["French", "English"]
}


alert("Hello, My name is " + bellBoy1.name )   //Returns Timmy

```

2. Different Objects have different properties, whatever is relevant to that object.

```

var houseKeeper1 = {
    name: "Sophia",
    age: "19",
    primaryLanguage: "Spanish",
    workSkills: ["Laundry", "Kitchen-Work", "BabySitting"]
}

```

3. Use dot notation to access information from the properties. houseKeeper1.name // Returns "Sophia".


##  Constructor Functions 
---

1. Great for mass producing our objects
2. The first letter of the functions name is Capitalized, expressing its a constructor. 
3. We pass in properties needed to construct, we use THIS (lowercase) to set the properties passsed. 


```

// Create our Constructor

function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

// Initialize Object

var bellBoy1 = new BellBoy("Timmy, 19, true, ["Frech", "English"]),


```

## Constructor Challenge
---

1. Create a new constructor function for housekeeper.
2. Create a new housekeeper

```

//Constructor Function

function HouseKeeper ( name, age, primaryLanguage, workSkills) {
    this.name = name;
    this.age = age;
    this.primaryLanguage = primaryLanguage;
    this.workSkills = workSkills;
}

// Call New Housekeeper Object

var housekeeper1 = new HouseKeeper ( "Sophia", "19", "Spanish", ["Laundry", "Kitchen-Work", "BabySitting"]);

```


## Switch Statements
---

1. Switch lets you switch between different events. In our examples we are using when a keys are pressed.

2. A Switch behaves likes a function 

```

var buttonInnerHTML = this.innerHTML;  //Sets our variable to the event

switch(buttonInnerHTML ){      // expression will be the variable
    case "w": // if "w" key is the innerHTML execute code after:
        console.log("w pressed")/
    break; // Ends the  switch
    default:   // Like an Else after an if statemnet; It covers all the other possible scenarios.
}

```

## Object Methods
---

1. A method is a function that associated with an object.



```
// Example Object Function with Method moveSuitcase added.

var bellboy1 = {
    name: "Timmy",
    age: 19,
    hasWorkPermit: True,
    languages: ["French", "English"],
    moveSuitcase: function () {
        alert ("May I take your suitcase?");
        pickUpSuitcase();
        move();
    }
}


bellBoy1.moveSuitcase(); // How to call the method;


//Constructor Function with Method moveSuitcase added. 

function BellBoy (name, age, hasWorkPermit, languages){
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.moveSuitcase: function () {     // Methods are added the same was as properties
        alert ("May I take your suitcase?"); 
        pickUpSuitcase();
        move();
    }    
}
// All new objects created will have these methods.

```


## HouseKeeper Constructor Method Challenge
---

. Add Clean method to housekeeper constructor, that alerts "Cleaning in Progress"



```

function HouseKeeper ( name, age, primaryLanguage, workSkills) {
    this.name = name;
    this.age = age;
    this.primaryLanguage = primaryLanguage;
    this.workSkills = workSkills;
    this.clean: function(){
        alert("Cleaning in Progress...")
    }
}

var housekeeper1 = new HouseKeeper ( "Sophia", "19", "Spanish", ["Laundry", "Kitchen-Work", "BabySitting"]);

houseKeeper1.clean();  // Should return "Cleaning in progress..."

```



### Event Listeners Information
---

1. You can add event listeners to ENTIRE document, so it's listening for all keystrokes.
2. This brings back event data, including the key pressed.

Example
```
document.addEventListener("keydown", function(event){
    makeSound(event.key)
})
```



## Drum Kit Challenge 3
---

1. Create a function that takes a character and checks it against a switch statement in order to play the correct sound.
2. Then call it inside the event listener for our keypress or drum buttons.



## Callback Functions

* What is a CallBack Function?
    - Higher Order Function - A function that takes functions as inputs.
    - Callback Function is a function thats waiting for something to happen.

```
// Example Callback Function
document.addEventListener("keydown", respondToKey(event){
    function respondToKey(event){   
        console.log("hey pressed.") 
    }
})

```

* In our example, we can see the function respondToKey, is our callback function, as its awaiting the event listener to trigger the callback function.


* Event, Evt, or E are common representations of event you will see.


$0.addEventListener("click", function(event){
    console.log(event)
})



* In our example above, we are using an anonymous callback to log the event information.  


* In our example below we have a
1.  Higher Order Function "anotherAddEventListener"
2.  a variable  "eventThatHappened" that will be our trigger information in the event.
3.  if statement | if (object.property === typeOfEvent){
    console.log(eventThatHappened);
}
4. Add anotherAddEventlistener as an event listener


```
function anotherAddEventListener(typeOfEvent, callback){

// Create an object that stores the event information
    var eventThatHappened = {   
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2,
    }
// If eventinformation eventType matches typeOfEvent we trigger our console.log(EventThatHappened)
    if (eventThatHappened.eventType === typeOfEvent){
        console.log(eventThatHappened);
    }

}

// when anotherAddEventLister is called with a keypress, that event matches our higher order function and console logs the event information

document.anotherAddEventListener("keypress", function (event){
    console.log(event)
)};

```

## Drumkit Challenge #4 | Adding Animation Challenge
---

1. Add animation to both when the but is clicked or key is pressed.
    - Want to create a function

2. Add pressed class which has different box-shadow and opacity already configured.