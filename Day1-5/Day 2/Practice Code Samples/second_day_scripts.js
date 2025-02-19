// 🚀 Welcome to Day 2 - JavaScript Variables & Data Types

// ✅ 1. Declaring Variables
let name = "Alice";
const birthYear = 1998;
var isLearning = true;

console.log(`My name is ${name} and I was born in ${birthYear}.`);
console.log("Am I learning JavaScript?", isLearning);

// ✅ 2. Understanding Data Types
console.log(typeof name); // string
console.log(typeof birthYear); // number
console.log(typeof isLearning); // boolean

// ✅ 3. Primitive vs Reference Types
let x = 10;
let y = x; // Copy value
y = 20;
console.log(x); // 10 (unchanged)
console.log(y); // 20

let arr1 = [1, 2, 3];
let arr2 = arr1; // Copy reference
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (modified)
console.log(arr2); // [1, 2, 3, 4]

// ✅ 4. Type Coercion Examples
console.log("5" + 2);  // "52" (Number converts to string)
console.log("5" - 2);  // 3 (String converts to number)
console.log(true + 1); // 2 (true → 1)
console.log(false + 1); // 1 (false → 0)

// ✅ 5. Mini Challenge
console.log("Challenge: What will these print?");
console.log("10" + 5);  // ?
console.log("10" - 5);  // ?
console.log(true + false); // ?

// ✅ 6. Lets Learn Arrays
let numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
numbers.pop();    // [1, 2, 3]
numbers.unshift(0);  // [0, 1, 2, 3]
numbers.shift();  // [1, 2, 3]
console.log(numbers);

// ✅ 7. What do think are they similar??
console.log("5" == 5);  // true (loose equality - converts type)
console.log("5" === 5); // false (strict equality - different types)
console.log(0 == false); // true (because `false` is treated as `0`)
console.log(0 === false); // false (strict check fails)

// Important Details [ Highly Recommended ]
// ✅ 8. 🚀 JavaScript Scope Demonstration: var vs let vs const

console.log("🔹 Global Scope Example:");
var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";

console.log(globalVar);  // ✅ Accessible
console.log(globalLet);  // ✅ Accessible
console.log(globalConst); // ✅ Accessible

// Function Scope (var is function-scoped)
console.log("\n🔹 Function Scope Example:");
function functionScopeTest() {
    var functionVar = "I exist only inside this function";
    let functionLet = "I also exist only inside this function";
    const functionConst = "I am also function-scoped";
    console.log(functionVar);
    console.log(functionLet);
    console.log(functionConst);
}
functionScopeTest();
// console.log(functionVar); // ❌ Uncaught ReferenceError: functionVar is not defined
// console.log(functionLet); // ❌ Uncaught ReferenceError: functionLet is not defined
// console.log(functionConst); // ❌ Uncaught ReferenceError: functionConst is not defined

// Block Scope (let & const are block-scoped, var is NOT)
console.log("\n🔹 Block Scope Example:");
if (true) {
    var blockVar = "I am a var inside a block";
    let blockLet = "I am a let inside a block";
    const blockConst = "I am a const inside a block";
    console.log(blockVar); // ✅ Accessible inside block
    console.log(blockLet); // ✅ Accessible inside block
    console.log(blockConst); // ✅ Accessible inside block
}

console.log(blockVar); // ✅ Accessible outside block (var is NOT block-scoped)
// console.log(blockLet); // ❌ Uncaught ReferenceError: blockLet is not defined
// console.log(blockConst); // ❌ Uncaught ReferenceError: blockConst is not defined

// Hoisting Demonstration
console.log("\n🔹 Hoisting Example:");
console.log(hoistedVar); // ✅ Undefined (var is hoisted but uninitialized)
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access 'hoistedLet' before initialization
// console.log(hoistedConst); // ❌ ReferenceError: Cannot access 'hoistedConst' before initialization

var hoistedVar = "I am hoisted!";
let hoistedLet = "I am NOT hoisted properly!";
const hoistedConst = "I am NOT hoisted properly!";

console.log(hoistedVar); // ✅ Works fine now
console.log(hoistedLet); // ✅ Works fine now
console.log(hoistedConst); // ✅ Works fine now
