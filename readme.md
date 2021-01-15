 ## DOM - Document Object Model
 --

 # Introductions to the Document Object Model
 
 
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

## classLists  - Adding, Removing and Toggling
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


## Notable DOM Methods

1. innerHtml // The text inside the html; can be additional html
2. textContent // Similiar to innerHTML but specific to text
    * Remember the differences as using a Setter you can be flexible.
    * Example | document.querySelector("h1").innerHTML = "<em>Good Bye</em>"