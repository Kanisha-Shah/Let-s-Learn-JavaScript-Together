# 🚀 Day 4: Arrays & Objects in JavaScript  

Welcome to **Day 4** of our **30-Day JavaScript Learning Series!** 🎉  
Today, we’ll dive deep into **Arrays & Objects**, the most widely used data structures in JavaScript!  

---

## **🔹 What Are Arrays & Objects?**  
✅ **Arrays** store **ordered lists** of values.  
✅ **Objects** store **key-value pairs** (like Python dictionaries).  

### **Example of an Array**

```js
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: "Apple"
```

### **Example of an Object**

```js
let person = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person.name); // Output: "Alice"
```
📂 Code for this is available in fourth_day_scripts.js

## **🔹 Important Array Methods**

| Method     | Description                                      | Example                          |
|------------|--------------------------------------------------|----------------------------------|
| `push()`   | Adds an element to the **end**                  | `arr.push(4)`                   |
| `pop()`    | Removes **last** element                        | `arr.pop()`                      |
| `shift()`  | Removes **first** element                       | `arr.shift()`                    |
| `unshift()`| Adds element at **beginning**                   | `arr.unshift(0)`                 |
| `map()`    | Creates a **new array** by applying a function  | `arr.map(x => x * 2)`            |
| `filter()` | Creates a **new array** with elements that pass a condition | `arr.filter(x => x > 10)`  |
| `reduce()` | Reduces an array to a **single value**          | `arr.reduce((a, b) => a + b)`    |
| `forEach()`| Iterates over each array element **without returning a new array** | `arr.forEach(x => console.log(x))` |


📂 Code for this is available in fourth_day_scripts.js

## **🔹 Object Properties & Methods**

Objects contain **key-value pairs**, and methods are **functions inside objects**.

#### **Example**

```js
let car = {
    brand: "Tesla",
    model: "Model S",
    start: function() {
        console.log("Car started!");
    }
};

console.log(car.brand); // Tesla
car.start(); // Output: "Car started!"
```

📂 Code for this is available in fourth_day_scripts.js

## **🔹 Understanding this Keyword in JavaScript**

The **this** keyword refers to the object that calls the function.

| Context               | `this` Refers To                                   |
|-----------------------|---------------------------------------------------|
| Inside a method      | The **object that owns the method**                |
| In a regular function | The **global object** (`window` in browsers, `global` in Node.js) |
| In an arrow function | The **lexical scope** (inherits from surrounding scope) |


Example
```js
const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};

person.greet(); // "Hello, I am Alice"
```

📂 Code for this is available in fourth_day_scripts.js

## **🔹 Destructuring & Spread Operator**

### **Array Destructuring**

```js
let colors = ["Red", "Green", "Blue"];
let [first, second] = colors;
console.log(first); // "Red"
```

### **Object Destructuring**
```js
let user = { name: "John", age: 30 };
let { name, age } = user;
console.log(name); // "John"
```

### **Spread Operator (...)**
```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
```

📂 Code for this is available in fourth_day_scripts.js

## **🔹 Mini Challenges**

1️⃣ Filter out even numbers from an array using filter()

2️⃣ Find the sum of an array using reduce()

3️⃣ Create an object with a method that prints a greeting using this

4️⃣ Destructure an object and log its properties

📂 Try solving them in and push your code in comments section - would love to see people following this resources!

## **🔹 More Learning Resources**  

🔗 **JavaScript Arrays (MDN Docs)**: [Read Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  
🔗 **JavaScript Objects (MDN Docs)**: [Read Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)  
📺 **YouTube: JavaScript Array Methods Explained**: [Watch Here](https://www.youtube.com/watch?v=R8rmfD9Y5-c)  
📺 **YouTube: The `this` Keyword in JavaScript**: [Watch Here](https://www.youtube.com/watch?v=gvicrj31JOM)  

---

## **🔥 Summary**  
- ✅ **Arrays** store **ordered lists**, **Objects** store **key-value pairs**.  
- ✅ **Common array methods** include `map()`, `filter()`, `reduce()`, and `forEach()`.  
- ✅ **Objects** contain **properties & methods** (functions inside objects).  
- ✅ **The `this` keyword** depends on the **function execution context**.  
- ✅ **Destructuring & Spread Operator** simplify handling **arrays & objects**.  

---

## 📂 Check out:  
✅ **Hands-on Code (`fourth_day_scripts.js`)**  
✅ **More Learning in `Extra_Resources.md`**  