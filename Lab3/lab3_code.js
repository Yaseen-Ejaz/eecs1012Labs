// ----------------------
// Lab 3 - JavaScript Basics
// ----------------------

console.log("Lab 3 JS file loaded.\n");

// ----------------------
// Comments in JavaScript
// ----------------------

// Single-line comment

/* Multi-line comment
   that spans across
   multiple lines
*/

// ----------------------
// Variables & Constants
// ----------------------

let x = 5, z = 10;   // "let" variables can be reassigned
const y = 10;        // "const" variables cannot be reassigned

x = 15;              // reassigning x
console.log(x, y, z); // Output: 15 10 10

// ----------------------
// Data Types
// ----------------------

let t = true;   // Boolean - true
let f = false;  // Boolean - false
console.log(t, f);

let n = null;   // Null - empty value
console.log(n);

console.log(typeof "hello"); // String
console.log(typeof t);       // Boolean

// ----------------------
// Arithmetic Operators
// ----------------------

let a = 5;
let b = 10;
let c = a * b;  // Multiplication
console.log(c);

let e = 2;
let g = 3;
let h = g ** e; // Exponentiation (3^2)
console.log(h);

let r1 = 4;
let r2 = 2;
let remainder = r1 % r2; // Modulus (remainder)
console.log(remainder);

let inc = 5;
inc++; // Increment
console.log(inc);

let dec = 5;
dec--; // Decrement
console.log(dec);

console.log("---------------------");

// ----------------------
// Comparison Operators
// ----------------------

console.log(2 == 2);     // true (loose equality, only checks value)
console.log(2 === "2");  // false (strict equality, checks value + type)
console.log(2 != 5);     // true

console.log(2 < 5);      // true
console.log(2 > 5);      // false
console.log(2 >= 2);     // true

console.log("---------------------");

// ----------------------
// Logical Operators
// ----------------------

console.log(true && true && !false && true); // AND
console.log(false || false || true || false); // OR
console.log(!true); // NOT

console.log("---------------------");

// ----------------------
// Conditional Statements
// ----------------------

let age = 17;
let hasID = true;

// If-else statement
if (age > 18 && hasID == true) {
    console.log("You are older than 18 and have an ID");
} 
else if (age == 18) {
    console.log("You are exactly 18");
} 
else {
    console.log("You are younger than 18");
}

// Ternary operator (shortcut for if-else)
let canVote = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(canVote);

console.log("---------------------");

// ----------------------
// Switch Statement
// ----------------------

let day = "Friday";

switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's not Monday or Tuesday");
        break;
}

console.log("---------------------");

// ----------------------
// Loops
// ----------------------

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For loop iteration: " + i);
}

// While loop
let j = 0;
while (j < 5) {
    console.log("While loop iteration: " + j);
    j++;

    // Safety check to avoid infinite loop
    if (j > 10) {
        break;
    }
}

// Do-while loop (runs at least once)
let k = 0;
do {
    console.log("Do while loop iteration: " + k);
    k++;
} while (k < 5);

// Continue statement (skip one iteration)
let text = "";
for (let i = 1; i < 10; i++) {
    if (i === 3) { 
        continue; // Skip number 3
    }
    text += "The number is " + i + " ";
}
console.log(text);

console.log("---------------------");

// ----------------------
// Functions
// ----------------------

// Function to add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log("The addition of 5 and 10 is " + addNumbers(5, 10));
console.log(addNumbers(10, 10));

