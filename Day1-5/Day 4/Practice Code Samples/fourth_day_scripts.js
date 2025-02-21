// 🚀 Welcome to Day 4 - JavaScript Arrays & Objects
// 🚀 Welcome to Day 4 - JavaScript Arrays & Objects
console.log("=== 🔹 1. Understanding Arrays ===");

// ✅ Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// ✅ Accessing array elements
console.log(fruits[0]); // Output: "Apple"

// ✅ Adding elements using push() & unshift()
fruits.push("Mango"); // Adds at the end
fruits.unshift("Strawberry"); // Adds at the beginning
console.log(fruits); // Output: ["Strawberry", "Apple", "Banana", "Cherry", "Mango"]

// ✅ Removing elements using pop() & shift()
fruits.pop(); // Removes last element
fruits.shift(); // Removes first element
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

console.log("\n=== 🔹 2. Common Array Methods ===");

// ✅ Using map() to create a new array
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// ✅ Using filter() to get even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// ✅ Using reduce() to sum an array
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 15

// ✅ Using forEach() to iterate through an array
numbers.forEach(num => console.log(`Number: ${num}`));

console.log("\n=== 🔹 3. Understanding Objects ===");

// ✅ Creating an object
let car = {
    brand: "Tesla",
    model: "Model S",
    year: 2023,
    start: function() {
        console.log("Car started!");
    }
};
console.log(car.brand); // Output: "Tesla"
car.start(); // Output: "Car started!"

// ✅ Adding a new property
car.color = "Red";
console.log(car.color); // Output: "Red"

// ✅ Deleting a property
delete car.year;
console.log(car); // { brand: "Tesla", model: "Model S", color: "Red", start: [Function] }

console.log("\n=== 🔹 4. Object Methods & `this` Keyword ===");

const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, I am ${this.name}`);
    }
};
person.greet(); // Output: "Hello, I am Alice"

// ✅ `this` inside an Arrow Function
const person2 = {
    name: "Charlie",
    greet: () => {
        console.log(`Hello, I am ${this.name}`); // ❌ Arrow functions don't bind `this`
    }
};
person2.greet(); // Output: "Hello, I am undefined"

console.log("\n=== 🔹 5. Array Destructuring & Spread Operator ===");

// ✅ Destructuring an array
let colors = ["Red", "Green", "Blue"];
let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // Output: "Red Green"

// ✅ Using the Spread Operator
let moreColors = [...colors, "Yellow", "Pink"];
console.log(moreColors); // Output: ["Red", "Green", "Blue", "Yellow", "Pink"]

console.log("\n=== 🔹 6. Object Destructuring ===");

// ✅ Destructuring an object
let user = { name: "John", age: 30, country: "USA" };
let { name, age } = user;
console.log(name, age); // Output: "John 30"

console.log("\n=== 🔹 7. Mini Challenges ===");

// 1️⃣ **Filter out numbers greater than 50 from an array**
let numArray = [10, 20, 55, 70, 15];
let filteredNums = numArray.filter(num => num <= 50);
console.log(filteredNums); // Output: [10, 20, 15]

// 2️⃣ **Find the most expensive product from an array of objects**
let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 600 }
];
let mostExpensive = products.reduce((prev, curr) => prev.price > curr.price ? prev : curr);
console.log(mostExpensive); // Output: { name: "Laptop", price: 1000 }

// 3️⃣ **Sort an array of names alphabetically**
let names = ["Alice", "Charlie", "Bob"];
names.sort();
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

// 4️⃣ **Convert an object into an array of key-value pairs**
let personObj = { name: "David", age: 27, profession: "Engineer" };
let keyValuePairs = Object.entries(personObj);
console.log(keyValuePairs); // Output: [["name", "David"], ["age", 27], ["profession", "Engineer"]]

// 5️⃣ **Flatten a nested array using reduce()**
let nestedArray = [[1, 2], [3, 4], [5, 6]];
let flatArray = nestedArray.reduce((acc, val) => acc.concat(val), []);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

console.log("\n🎯 JavaScript Arrays & Objects - Hands-on Practice Completed!");

console.log("=== 🔹 1. Array Methods ===");

let arr_numbers = [10, 20, 30, 40, 50];

// ✅ push() - Adds an element at the end
arr_numbers.push(60);
console.log("push:", arr_numbers); // Output: [10, 20, 30, 40, 50, 60]

// ✅ pop() - Removes the last element
arr_numbers.pop();
console.log("pop:", arr_numbers); // Output: [10, 20, 30, 40, 50]

// ✅ shift() - Removes the first element
arr_numbers.shift();
console.log("shift:", arr_numbers); // Output: [20, 30, 40, 50]

// ✅ unshift() - Adds an element at the beginning
arr_numbers.unshift(10);
console.log("unshift:", arr_numbers); // Output: [10, 20, 30, 40, 50]

// ✅ map() - Creates a new array by applying a function to each element
let doubled = arr_numbers.map(x => x * 2);
console.log("map:", doubled); // Output: [20, 40, 60, 80, 100]

// ✅ filter() - Creates a new array with elements that pass a condition
let greaterThan30 = arr_numbers.filter(x => x > 30);
console.log("filter:", greaterThan30); // Output: [40, 50]

// ✅ reduce() - Reduces an array to a single value (sum)
let sum_total = arr_numbers.reduce((a, b) => a + b, 0);
console.log("reduce:", sum_total); // Output: 150

// ✅ forEach() - Iterates over each element (logs values)
console.log("forEach:");
arr_numbers.forEach(x => console.log(x)); // Logs each number

console.log("\n=== 🔹 2. Understanding `this` in Different Contexts ===");

// ✅ Inside an Object Method - `this` refers to the object
const new_person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person.greet(); // Output: "Hello, my name is Alice"

// ✅ In a Regular Function - `this` refers to the global object
function regularFunction() {
    console.log(this); // In browsers: Window object, In Node.js: Global object
}
regularFunction();

// ✅ In an Arrow Function - `this` refers to lexical scope
const arrowFunction = () => {
    console.log(this); // Inherits `this` from where it was defined
};
arrowFunction();

// ✅ `this` inside setTimeout (Regular function vs Arrow function)
const object = {
    name: "Object Example",
    regularFunc: function() {
        setTimeout(function() {
            console.log("Regular function `this`:", this); // Refers to Window/global
        }, 1000);
    },
    arrowFunc: function() {
        setTimeout(() => {
            console.log("Arrow function `this`:", this); // Refers to `object`
        }, 1000);
    }
};

object.regularFunc();
object.arrowFunc();

console.log("\n🎯 JavaScript Arrays & Objects - Hands-on Practice Completed!");