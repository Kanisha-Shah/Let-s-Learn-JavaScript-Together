// 🚀 Welcome to Day 3 - JavaScript Functions & Scope

console.log("=== 🔹 1. Function Declarations vs Function Expressions ===");

// ✅ Function Declaration (Hoisted - Can be called before definition)
console.log(declaredFunction("Alice"));

function declaredFunction(name) {
    return `Hello, ${name}!`;
}

// ✅ Function Expression (Not Hoisted - Uncomment below line to see error)
// console.log(expressionFunction("Bob")); ❌ ReferenceError

const expressionFunction = function(name) {
    return `Hello, ${name}!`;
};

console.log(expressionFunction("Bob")); // ✅ Works when called after definition

console.log("\n=== 🔹 2. Arrow Functions ===");

// ✅ Shorter function syntax (Implicit return)
const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(4, 5)); // Output: 9

// ✅ Arrow function without implicit return
const sayHello = (name) => {
    return `Hello, ${name}!`;
};
console.log(sayHello("Charlie"));

console.log("\n=== 🔹 3. Function Hoisting ===");

// ✅ Function Declaration is hoisted
console.log(hoistedFunction());

function hoistedFunction() {
    return "I am hoisted!";
}

// ❌ Function Expression is NOT hoisted
// console.log(notHoistedFunction()); ❌ ReferenceError

const notHoistedFunction = function() {
    return "I am NOT hoisted!";
};

console.log("\n=== 🔹 4. Function Parameters vs Arguments ===");

// ✅ Function with Default Parameters
function greet(name = "Stranger") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Stranger!
console.log(greet("David")); // Output: Hello, David!

console.log("\n=== 🔹 5. Callback Functions ===");

// ✅ Function that accepts a callback
function processData(callback) {
    let data = "Hello, World!";
    callback(data);
}

function printData(data) {
    console.log("Processed Data:", data);
}

processData(printData); // Output: Processed Data: Hello, World!

console.log("\n=== 🔹 6. Function Scope ===");

// ✅ Global Scope
let globalVar = "I am global!";

function displayGlobal() {
    console.log(globalVar); // ✅ Accessible inside function
}
displayGlobal();
console.log(globalVar); // ✅ Accessible globally

// ✅ Function Scope
function testScope() {
    let localVar = "I exist only inside this function";
    console.log(localVar);
}
testScope();
// console.log(localVar); ❌ ReferenceError: localVar is not defined

// ✅ Block Scope (let & const)
if (true) {
    var blockVar = "I am accessible outside!";
    let blockLet = "I am block-scoped!";
    const blockConst = "I am also block-scoped!";
    console.log(blockLet); // ✅ Accessible here
    console.log(blockConst); // ✅ Accessible here
}
console.log(blockVar); // ✅ Accessible outside (because var is function-scoped)
// console.log(blockLet); ❌ ReferenceError
// console.log(blockConst); ❌ ReferenceError

console.log("\n=== 🔹 7. Closures (Function inside Function) ===");

// ✅ Function remembering outer scope
function outerFunction(outerValue) {
    return function innerFunction(innerValue) {
        console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
    };
}

const closureExample = outerFunction("Outer Scope");
closureExample("Inner Scope"); // Output: "Outer: Outer Scope, Inner: Inner Scope"

console.log("\n=== 🔹 8. Recursion (Function Calling Itself) ===");

// ✅ Factorial Function using Recursion
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

console.log("\n=== 🔹 9. Function Currying ===");

// ✅ Function Currying Example
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Output: 10

console.log("\n=== 🔹 10. Function Chaining ===");

// ✅ Chaining Methods Example
let str = "hello";
let result = str.toUpperCase().split("").reverse().join("");
console.log(result); // Output: "OLLEH"

console.log("\n=== 🔹 11. Higher-Order Functions ===");

// ✅ Function that accepts another function
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

console.log("\n=== 🔹 12. Debugging Functions ===");

// ✅ Using console.log()
function debugFunction(a, b) {
    console.log("Debugging: a =", a, "b =", b);
    return a + b;
}
console.log(debugFunction(3, 7));

// ✅ Using debugger
function debugExample(x, y) {
    debugger; // Execution will pause here
    return x * y;
}
console.log(debugExample(4, 5));

console.log("\n=== 🔹 13. Performance Optimization: Memoization ===");

// ✅ Memoized Factorial Function
function memoizedFactorial() {
    let cache = {};

    return function factorial(n) {
        if (n in cache) return cache[n]; // Check cache
        if (n === 1) return 1;
        cache[n] = n * factorial(n - 1);
        return cache[n];
    };
}

const fact = memoizedFactorial();
console.log(fact(5)); // Output: 120
console.log(fact(5)); // Output: 120 (Cached result)

console.log("\n=== 🔹 14. Asynchronous Callbacks ===");

// ✅ setTimeout as a callback
setTimeout(() => {
    console.log("Executed after 2 seconds!");
}, 2000);

// ✅ Event Listener Callback
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");
});

// ✅ Button click event (Make sure to add a button in your HTML)
document.querySelector("button")?.addEventListener("click", () => {
    console.log("Button clicked!");
});

console.log("\n🎯 JavaScript Functions & Scope - Hands-on Practice Completed!");