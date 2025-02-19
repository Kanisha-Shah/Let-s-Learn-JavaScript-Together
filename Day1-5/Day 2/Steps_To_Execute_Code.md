# 🚀 Day 2: Variables & Data Types 

Welcome to **Day 2** of our **30-Day JavaScript Learning Series!** 🎉 

Now that we have JavaScript set up, let’s explore variables, data types, and their behavior with hands-on examples. These concepts are fundamental for building a solid JavaScript foundation!

---

## **📌 Topics Covered**
✅ Understanding **Variables in JavaScript** (`var`, `let`, `const`)  
✅ **Primitive vs Reference Data Types** (Numbers, Strings, Arrays, Objects, etc.)  
✅ **Type Coercion & `typeof` Operator**  
✅ **Array Operations: Adding & Removing Elements**  
✅ **Difference between `==` and `===`**  
✅ **Objects (How dictionaries work in JavaScript)**  
✅ **Hands-on Coding Examples**  

---

### **📌 Hands-On Practice Topics (Must-Know JavaScript Concepts!)**  

### **Lets see whats the difference between `var`, `let` & `const` is?**
#### 🔹 Global Scope
	•	var, let, and const declared outside functions are available globally.

#### 🔹 Function Scope
	•	var is function-scoped (not accessible outside the function).
	•	let and const are also function-scoped.

#### 🔹 Block Scope
	•	var leaks out of the block and remains accessible globally.
	•	let and const are confined to the block they are declared in.

#### 🔹 Hoisting
	•	var is hoisted but initialized as undefined.
	•	let and const are hoisted but not initialized, causing a ReferenceError if accessed before declaration.

#### **🎯 Summary of Learning**

| Feature       | `var` | `let` | `const` |
|--------------|------|------|------|
| **Scope**    | Function-scoped | Block-scoped | Block-scoped |
| **Hoisting** | ✅ Hoisted (initialized as `undefined`) | ❌ Hoisted but not initialized | ❌ Hoisted but not initialized |
| **Reassignment** | ✅ Yes | ✅ Yes | ❌ No |
| **Redeclaration** | ✅ Yes | ❌ No | ❌ No |

### **🔹 String Manipulation & Length of a String**  
Strings are **sequences of characters**, and we can **manipulate them** using built-in methods.  

```js
let str = "Hello, JavaScript!";
console.log(str.length); // Output: 18
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"
console.log(str.toLowerCase()); // Output: "hello, javascript!"
console.log(str.includes("Java")); // Output: true
console.log(str.substring(0, 5)); // Output: "Hello"
```

📂 Full Code for this is available in second_day_scripts.js

### **🔹 Array Operations: Adding & Removing Elements**

Arrays are used to store multiple values in JavaScript.

| Method    | Description                   | Example          |
|-----------|-------------------------------|------------------|
| `push()`  | Adds an element at the end    | `arr.push(4)`    |
| `pop()`   | Removes last element          | `arr.pop()`      |
| `shift()` | Removes first element         | `arr.shift()`    |
| `unshift()` | Adds element at the beginning | `arr.unshift(0)` |


```js
let numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
numbers.pop();    // [1, 2, 3]
numbers.unshift(0);  // [0, 1, 2, 3]
numbers.shift();  // [1, 2, 3]
console.log(numbers);
```

📂 Full Code for this is available in second_day_scripts.js

### **🔹 == vs ===: What’s the Difference?**

One of the most confusing parts of JavaScript is loose vs strict equality.

| Operator | Meaning                                   | Example     | Output |
|----------|-------------------------------------------|------------|--------|
| `==`     | Loose equality (checks value only)       | `"5" == 5` | `true`  |
| `===`    | Strict equality (checks value + type)    | `"5" === 5` | `false` |


```js
console.log("5" == 5);  // true (loose equality - converts type)
console.log("5" === 5); // false (strict equality - different types)
console.log(0 == false); // true (because `false` is treated as `0`)
console.log(0 === false); // false (strict check fails)
```

### **🔹 Objects in JavaScript (Like Python Dictionaries!)**

In JavaScript, Objects store key-value pairs similar to Python dictionaries.

#### Example in JavaScript (Object)

```js
let person = {
    name: "Alice",
    age: 25,
    isStudent: true
};
console.log(person.name); // Alice
console.log(person["age"]); // 25
```

#### Equivalent in Python (Dictionary)

```py
person = {
    "name": "Alice",
    "age": 25,
    "isStudent": True
}
print(person["name"]) # Alice
```

### **🚀 Key Takeaways**

✅ Use let when the variable value changes.

✅ Use const when the value should never change.

✅ Avoid var unless you have a specific reason to use it.


### **🔥 What’s Next?**

Now that we’ve explored Variables & Data Types, let’s move on to Day 3: Functions & Scope! 🚀

📂 Check out:

✅ Hands-on Code (second_day_scripts.js)

✅ Screenshots of Output

✅ More Learning in Extra_Resources.md

#### 💬 What was your biggest takeaway from today? Drop a comment! 🚀

**🚀 Let’s keep learning! Push your progress to GitHub and share your knowledge! 🔥**