//Day 1: Variables and Data types

//Tasks :-

//A1: Variable Declaration
//T1 - declare a variable using var, assign it a number and log the value to the console
var year = 2024;
console.log(year);
//T2 - declare a variable using let, assign it a string and log the value to the console
let name = "tanu";
console.log(name);

//A2: Constant Declaration
//T3 - declare a variable using const, assign it a boolean and log the value to the console
const isLoggedIn = true;
console.log(isLoggedIn);

//A3: Data Types
//T4 - create variable of different data types and log them using typeof operator
let age = 23;  //number
let city = "Mumbai";  //string
let isAdult = true;  //boolean
let customer = {  //object
    username : "Jay",
    id : 303
};
let days = ["mon", "tue", "fri", "sat"]; //array

console.log(typeof(age));
console.log(typeof(city));
console.log(typeof(isAdult));
console.log(typeof(customer));
console.log(typeof(days));
/*
number
string
boolean
object
object */

//A4: Reassigning Variables
//T5 - declare a variable using let, assign it an initial value, reassign a new value and log both values
let village = "gorakhpur";
console.log(village);
village = "mithila";
console.log(village);

//A5: Understanding const
//T6 - reassign a variable declared with const and observe
const pi = 3.14;
console.log(pi);
//pi = 5;  //uncomment this 
console.log(pi);
/*
pi = 5;
   ^
TypeError: Assignment to constant variable.
*/
//error coz const variables cannot be reassigned

//Feature Request :-

//1- Variable Types Console Log
console.log(age, typeof(age));
console.log(city, typeof(city));
console.log(isAdult, typeof(isAdult));
console.log(customer, typeof(customer));
console.log(days, typeof(days));

//2- Reassignment Demo
let contact = 980776;
const rollno = 21;
contact = 88405;
//rollno = 10;
console.log(contact);
console.log(rollno);
/*rollno = 10;
       ^

TypeError: Assignment to constant variable.*/

// Achievement:
// By the end of these activities, you will:
// - Know how to declare variables using var, let, and const.
// - Understand the different data types in JavaScript.
// - Be able to use the typeof operator to identify the data type of a variable.
// - Understand the concept of variable reassignment and the immutability of const variables.