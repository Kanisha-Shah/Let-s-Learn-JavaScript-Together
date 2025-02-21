# 🛠️ Steps to Execute JavaScript Arrays & Objects  

Welcome to **Day 4**! In this file, we'll explore **interactive execution** of Arrays & Objects, including **real-world use cases, advanced techniques, and debugging strategies**.  

---

## **🔹 How Arrays & Objects Work in JavaScript (Execution Flow & Memory)**  

Before diving into code, let's understand **how JavaScript stores arrays & objects in memory**.  

✅ **Arrays are stored as references**, meaning modifying an array in one place affects all references to it.  
✅ **Objects store properties dynamically**, making them flexible for **key-value** storage.  

### **Example: Memory Reference Behavior**  
```js
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references arr1
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4] (Because arr1 & arr2 reference the same array)
```

📂 Try this in fourth_day_scripts.js

## **🔹 Hands-On: Array Methods Deep Dive**

### **1️⃣ Using map() to Transform an Array**
```js
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

📂 Try this in fourth_day_scripts.js

### **2️⃣ Using filter() to Extract Specific Elements**

```js
let ages = [15, 22, 18, 30, 14];
let adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [22, 18, 30]
```

📂 Try this in fourth_day_scripts.js

### **3️⃣ Using reduce() to Compute a Single Value**

```js
let prices = [10, 20, 30, 40];
let total = prices.reduce((sum, price) => sum + price, 0);
console.log(total); // Output: 100
```

📂 Try this in fourth_day_scripts.js

## **🔹 Objects in JavaScript: Deep Dive**

### **1️⃣ Adding & Accessing Properties Dynamically**

```js
let user = {};
user.name = "Alice";
user.age = 25;
console.log(user["name"]); // Output: Alice
```

📂 Try this in fourth_day_scripts.js

### **2️⃣ Iterating Over Object Keys**
```js
let car = { brand: "Tesla", model: "Model S", year: 2023 };
for (let key in car) {
    console.log(`${key}: ${car[key]}`);
}
```

📂 Try this in fourth_day_scripts.js

## **🔹 Deep Dive: Understanding this in JavaScript**

### **1️⃣ this Inside an Object Method**

```js
const person = {
    name: "Bob",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};
person.greet(); // Output: Hello, I am Bob
```

📂 Try this in fourth_day_scripts.js

### **2️⃣ this in an Arrow Function**

```js
const person2 = {
    name: "Charlie",
    greet: () => {
        console.log(`Hello, I am ${this.name}`); // ❌ Undefined (Arrow functions don't bind `this`)
    }
};
person2.greet(); // Output: Hello, I am undefined
```

📂 Try this in fourth_day_scripts.js

### **3️⃣ this in Event Listeners**

```js
document.querySelector("button")?.addEventListener("click", function() {
    console.log(this); // Refers to the button element
});
```

📂 Try this in fourth_day_scripts.js

## **🔹 Real-World Applications of Arrays & Objects**

### **✅ 1️⃣ Working with API Data (JSON)**
```js
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => console.log(users));
```

📂 Try this in fourth_day_scripts.js

### **✅ 2️⃣ Using Objects for Configurations**

```js
const config = {
    apiKey: "123456",
    theme: "dark",
    language: "en"
};
console.log(config.theme); // Output: dark
```

📂 Try this in fourth_day_scripts.js

### **✅ 3️⃣ Creating a Shopping Cart System**

```js
let cart = [
    { item: "Laptop", price: 1000 },
    { item: "Phone", price: 500 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
console.log(`Total Price: $${total}`); // Output: Total Price: $1500
```

📂 Try this in fourth_day_scripts.js

## **🔹 Mini Challenges** 

1️⃣ **Filter out numbers greater than 50 from an array.**  
2️⃣ **Find the most expensive product from an array of objects.**  
3️⃣ **Sort an array of names alphabetically.**  
4️⃣ **Convert an object into an array of key-value pairs.**  
5️⃣ **Flatten a nested array using `reduce()`.**  

📂 **Try solving them in `fourth_day_scripts.js`**  

---

## **🔥 Summary**  
- ✅ **Arrays & Objects are reference types**, meaning modifications affect all references.  
- ✅ **Common array methods** (`map()`, `filter()`, `reduce()`) help with **data manipulation**.  
- ✅ **Objects store key-value pairs**, allowing **dynamic property assignments**.  
- ✅ **`this` behavior depends on where it’s used** (`object methods`, `regular functions`, `arrow functions`).  
- ✅ **Real-world applications** include working with **API data, configurations, and shopping cart systems**.  

---

## **📂 Check out**:  
✅ **Hands-on Code (`fourth_day_scripts.js`)**  
