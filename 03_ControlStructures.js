//Day 3 : Control Structure

//A1: If-else Statements
//t1 check if number is +ve, -ve or 0
let number = -24;
if(number>0){
    console.log("number is positive");
}
else if(number<0){
    console.log("number is negative");
}
else console.log("number is zero");

//t2 check if person is eligible to vote (age>=18)
let age = 27;
if(age>=18){
    console.log("Eligible to cast vote");
}
else 
    console.log("Ineligible to cast vote");


//A2: Nested if-else statements
//t3 find largest of three nums
let a = 57;
let b = 21;
let c = 80;
if(a>b){
    if(a>c){
        console.log("Largest no.: ", a);
    }
    else console.log("Largest no.: ", c);
}
else{
    if(b>c){
        console.log("Largest no.: ", b);
    }
    else console.log("Largest no.: ", c);
}

//A3: Switch case
//t4 use switch case to determine day of the week by numbers(1-7)
let dayNumber = 3;
switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//t5 assign grade{A,B,C,D,F} based on score
let score = 98;
switch(true){
    case score>=90:
        console.log("grade A");
        break;
    case score>=80:
        console.log("grade B");
        break;
    case score>=70:
        console.log("grade C");
        break;
    case score>=45:
        console.log("grade D");
        break;
    case score<45:
        console.log("grade F");
        break;
    default:
        console.log("Invalid score");
}

//A4: Conditional(ternary) Operator
//t6 check if no. is odd or even
let num = 34;
console.log(num%2==0 ? "num is even" : "num is odd");

//A5: Combining Conditions
//t7 check leap year
let year = 2024;
if((year%4==0 && year%100!=0) || year%400==0)
    console.log(year, " is leap year");
else
    console.log( year, "not a leap year");


    
//Feature Request

//1- Number check script
number = 0;
if(number>0){
    console.log("number is positive");
}
else if(number<0){
    console.log("number is negative");
}
else console.log("number is zero");

//2- Voting eligbility script
age = -6;
if(age>=18){
    console.log("Eligible to cast vote");
}
else
    console.log("Ineligible to cast vote");

//3- Day of the week script
dayNumber = 5;
switch(dayNumber){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//4- Grade assignment script
score = 46;
switch(true){
    case score>=90:
        console.log("grade A");
        break;
    case score>=80:
        console.log("grade B");
        break;
    case score>=70:
        console.log("grade C");
        break;
    case score>=45:
        console.log("grade D");
        break;
    case score<45:
        console.log("grade F");
        break;
    default:
        console.log("Invalid score");
}

//5- Leap year check script
year = 2000;
if((year%4==0 && year%100!=0) || year%400==0)
    console.log(year, " is leap year");
else
    console.log( year, "not a leap year");


// Achievement:
// By the end of these activities, students will:

// Implement and understand basic if-else control flow.
// Use nested if-else statements to handle multiple conditions.
// Utilize switch cases for control flow based on specific values.
// Apply the ternary operator for concise condition checking.
// Combine multiple conditions to solve more complex problems.