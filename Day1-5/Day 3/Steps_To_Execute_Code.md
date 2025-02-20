# 🛠️ Steps to Execute JavaScript Functions & Scope  

Welcome to **Day 3**! Now that we have covered **functions & scope** in **README.md**, let's **dive deeper into practical implementation**, explore **real-world use cases**, and work with **advanced techniques** to master functions in JavaScript.  

---

## **🔹 Understanding Execution Context & Call Stack**
Before executing a function, **JavaScript creates an execution context**.  

✅ The **Global Execution Context (GEC)** is created first.  
✅ Every time a function is called, a **Function Execution Context (FEC)** is created and pushed onto the **Call Stack**.  
✅ When a function finishes executing, its execution context is removed from the stack.  

#### **Example: Call Stack in Action**
```js
function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();
```

📂 Try this in third_day_scripts.js

🛠 Check the call stack in DevTools → Sources → Call Stack.


## **🔹 Function Currying (Advanced)**

Currying is a technique in JavaScript where a function takes **one argument at a time** and returns a new function expecting the next argument.

#### **Example: Basic Currying**

```js
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Output: 10
```

📂 Try this in third_day_scripts.js

## **🔹 Function Chaining**

Function chaining allows **calling multiple functions** in sequence.

#### **Example: Chaining Methods**

```js
let str = "hello";
let result = str.toUpperCase().split("").reverse().join("");
console.log(result); // "OLLEH"
```

📂 Try this in third_day_scripts.js

## **🔹 Recursion (Functions Calling Themselves)**

Recursion is when a function **calls itself** until a base condition is met.

#### **Example: Factorial using Recursion**

```js
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

📂 Try this in third_day_scripts.js

## **🔹 Higher-Order Functions (HOF)**

A **higher-order function** is a function that **takes another function as an argument** or **returns a function**.

#### **Example: HOF with Array Methods**

```js
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]
```

📂 Try this in third_day_scripts.js

## **🔹 Debugging Functions in JavaScript**

Sometimes, functions **don’t behave as expected**. Here’s how you can debug:

### **✅ 1. Using console.log()**

```js
function sum(a, b) {
    console.log("a:", a, "b:", b);
    return a + b;
}

console.log(sum(2, 3)); // Debugging output
```

### **✅ 2. Using debugger**
```js
function multiply(x, y) {
    debugger; // Execution will pause here in DevTools
    return x * y;
}

multiply(4, 5);
```

📂 Try this in third_day_scripts.js


## **🔹 Performance Optimization for Functions**

Long-running functions can slow down performance. Here are **two optimization techniques**:

### **✅ 1. Memoization (Caching Results)**

```js
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
console.log(fact(5)); // Output: 120 (Fetched from cache)
```

📂 Try this in third_day_scripts.js

## **🔹 Real-World Examples of Callback Functions**

Callback functions are widely used in **event handling, API requests, and asynchronous programming**.

### **✅ 1. Callback in Event Listener**

```js
document.querySelector("button").addEventListener("click", function() {
    console.log("Button clicked!");
});
```

### **✅ 2. Callback in setTimeout()**

```js
setTimeout(() => {
    console.log("Executed after 2 seconds!");
}, 2000);
```

📂 Try this in third_day_scripts.js

## **🔹 Mini Challenges**

Want to test your understanding? Try these challenges:

### **1️⃣ Reverse a String using a Function**
```js
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
```

### **2️⃣ Implement a Function to Check Palindrome**

```js
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false
```

📂 Try solving them in third_day_scripts.js

## 🔥 Summary  
- ✅ **Call Stack & Execution Context**: Functions are executed in the **call stack**.  
- ✅ **Function Currying**: Breaking function calls into multiple steps.  
- ✅ **Function Chaining**: Calling multiple functions in sequence.  
- ✅ **Recursion**: Functions calling themselves.  
- ✅ **Higher-Order Functions**: Functions that accept or return other functions.  
- ✅ **Debugging & Performance Optimization**: Using `console.log()`, `debugger`, and memoization.  
- ✅ **Callbacks in Event Handling & Asynchronous Programming**.  

---

## 📂 Check out:  
✅ **Hands-on Code (`third_day_scripts.js`)**   