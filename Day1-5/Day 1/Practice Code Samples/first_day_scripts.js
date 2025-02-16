// 🚀 Welcome to Day 1 - Hands-on JavaScript Practice in Chrome DevTools Console!
console.log("Hello, JavaScript Learner! 🎉");

// ✅ 1. Exploring JavaScript Basics
console.log("JavaScript is fun!");  // Prints a message in the console
console.log(42);                     // Numbers
console.log(true);                   // Boolean values
console.log([1, 2, 3]);              // Arrays
console.log({ name: "Alice", age: 25 }); // Objects

// ✅ 2. Checking Data Types
console.log(typeof "Hello");  // Output: string
console.log(typeof 99);       // Output: number
console.log(typeof false);    // Output: boolean
console.log(typeof {});       // Output: object
console.log(typeof []);       // Output: object (Arrays are objects in JS!)

// ✅ 3. User Interaction (Try these in the browser!)
alert("Welcome to JavaScript! 🚀"); // Show an alert popup
let name = prompt("What is your name?"); // Ask user input
console.log("Nice to meet you, " + name + "!");

// ✅ 4. Confirm Dialog
let isReady = confirm("Are you ready to learn JavaScript?");
console.log(isReady ? "Great! Let's start. 🚀" : "No worries, take your time!");

// ✅ 5. Basic DOM Manipulation (Try pasting this in the browser console on any webpage!)
document.body.style.backgroundColor = "lightblue"; // Changes background color
document.title = "JavaScript Fun!"; // Modifies page title

// ✅ 6. Adding an Element to the Page
let newElement = document.createElement("h2");
newElement.innerText = "Welcome to JavaScript!";
document.body.appendChild(newElement);

// ✅ 7. Creating a Simple Function
function greetUser(username) {
    console.log(`Hello, ${username}! Welcome to JavaScript.`);
}
greetUser(name); // Calls the function with the user input from earlier

// ✅ 8. Simple Button Click Event (Try adding a button in HTML and click it!)
document.body.innerHTML += '<button id="clickMe">Click Me</button>';

document.getElementById("clickMe").addEventListener("click", function() {
    alert("You clicked the button! 🎉");
    document.body.style.backgroundColor = "lightgreen";
});