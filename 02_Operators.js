//Day 2 : Operators

//A1 : Arithmetic Operators
let numberOne = 12;
let numberTwo = 4;
//t1 addition
console.log(numberOne + numberTwo);
//t2 subtraction
console.log(numberOne - numberTwo);
//t3 multiplication
console.log(numberOne * numberTwo);
//t4 division
console.log(numberOne/numberTwo);
//t5 modulus(remainder)
numberTwo = 5;
console.log(numberOne%numberTwo);

//A2 : Assignment Operators
//t6  += operator
numberOne += numberTwo;
console.log(numberOne);
//t7  -= operator
numberOne -= numberTwo;
console.log(numberOne);

//A3 : Comparison Operators
//t8 compare two numbers using > and <
let num1 = 20;
let num2 = 17;
console.log(num1>num2);
console.log(num1<num2);
//t9 compare two numbers using >= and <=
console.log(num1>=num2);
console.log(num1<=num2);
//t10 compare two numbers using == and ===
num1 =17;
console.log(num1==num2);
console.log(num1===num2);

//A4 : Logical Operators
//t11 && operator
let isLoggedIn = true;
let isAdult = false;
console.log(isLoggedIn && isAdult);
//t12 || operator
console.log(isLoggedIn || isAdult);
//t13 ! operator
console.log(!isAdult);

//A5 : Ternary operators
//t14 ? operator
let number = 14;
console.log(number>0 ? "positive" : number<0 ? "negative" : "zero");


//Feature Request:

//Arithmetic Operations Script
//Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results
let n1 = 30;
let n2 = 4;
console.log("Addition:", n1 + n2);
console.log("Subtraction:", n1 - n2);
console.log("Multiplication:", n1 * n2);
console.log("division:", n1 / n2);
console.log("Remainder:", n1 % n2);

//Comparison and Logical Operators Script
//Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results
console.log("30 > 4:", n1 > n2);
console.log("30 < 4:", n1 < n2);
console.log("30 >= 4:", n1 >= n2);
console.log("30 <= 4:", n1 <= n2);
console.log("30 == 4:", n1 == n2);
console.log("30 === 4:", n1 === n2);
console.log("30 != 4:", n1 != n2);
console.log("30 !== 4:", n1 !== n2);
console.log("30 !== 4 && 30<4:", n1 !== n2 && n1 < n2);
console.log("30 !== 4 || 30<4:", n1 !== n2 || n1 < n2);
console.log("!(30 !== 4):", !(n1 !== n2));

//Ternary Operator Scipt
//Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result
number = 14;
let ans = number>0 ? "positive" : number<0 ? "negative" : "zero";
console.log("14 is:", ans);


// Achievement:
// By the end of these activities, students will:

// Understand and use arithmetic operators to perform basic calculations.
// Use assignment operators to modify variable values.
// Compare values using comparison operators.
// Combine conditions using logical operators.
// Use the ternary operator for concise conditional expressions.