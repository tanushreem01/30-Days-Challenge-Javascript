//Day 5: Functions

//A1- Function Declaration
//t1- function to check num is even or odd and log result to console
function isEven(num){
    console.log(num%2==0 ? "Even" : "Odd");
}

//t2- function to calculate square of num and return ans
function square(num){
    return num*num;
}

//A2- Function Expression
//t3- find maximum of two nums and log result to console
const max = function(numberOne, numberTwo){
    console.log(numberOne>numberTwo ? "numberOne" : numberOne!=numberTwo ? "numberTwo" : "Both are equal");
}

//t4- concatenate two strings and return result
const concatenate = function(stringOne, stringTwo) {
    return stringOne+stringTwo;
}

//A3- Arrow functions
//t5- arrow function to calculate sum of two nums and return result
const sum = (numberOne, numberTwo) => numberOne+numberTwo;

//t6- check if a string contains a specific character and return a boolean value 
const find = (string, character) => string.indexOf(character) != -1;

//A4- Function parameter and default values
//t7- Write a function that takes two parameters and returns their product. Provide a default value for the second parameter
const myFunction = (numberOne, numberTwo = 10) => numberOne*numberTwo;

//t8- Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age
const greetings = (name, age = 18) => `Hello ${name}, you are ${age} years old`;

//A5- Higher order Functions
//t9- Write a higher-order function that takes a function and a number, and calls the function that many times
const repeatFunction = (callback, times) => {
    for(let i=0; i<times; i++){
        callback();
    }
};

//t10- Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result
const composition = (functionOne, functionTwo, initialValue) => 
    functionTwo(functionOne(initialValue));


//Example usage and testing
console.log("Testing functions:");

isEven(7)
isEven(4);

console.log("Square of 7:", square(7));

console.log(("max of 20 and 15:", max(20, 15)));

console.log("Concatenated string: ", concatenate("Hello, ", "Sam!"));

console.log("sum of 23 and 2: ", sum(23, 2));

console.log("'a' present in 'cake':", find("cake", 'a'));

console.log("Product with default:", myFunction(16));
console.log("Product without default:", myFunction(16, 5));

console.log(greetings("Sam"));
console.log(greetings("Nyna", 20));

console.log("Repeating a function:");
repeatFunction(() => console.log("Holla!"), 4);

console.log("Function composition:");
const double = x => x*2;
const addTwo = x => x+2;
console.log(composition(double, addTwo, 5));


//Feature Request

//1- Even or odd function script
//2- Square calculation function script
//3- Concatenation function script
//4- Sum calculation arrow function script
//5- Higher-order function script


// Achievement:
// By the end of these activities, students will:

// Understand and define functions using function declarations, expressions, and arrow functions.
// Use function parameters and default values effectively.
// Create and utilize higher-order functions.
// Apply functions to solve common problems and perform calculations.
// Enhance code reusability and organization using functions.