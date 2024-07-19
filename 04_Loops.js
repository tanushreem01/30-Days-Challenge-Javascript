//Day 4 : Loops

//A1: For loop
//t1 print numbers from 1 to 10
for(let number=1; number<=10; number++)
{
    console.log(number);
}

//t2 print multiplication table of 5
let number = 5;
for(let multiply=1; multiply<=10; multiply++)
{
    console.log(`${number} x ${multiply} = ${number * multiply}`);
}

//A2: While loop
//t3 calculate sum of numbers 1 to 10
let sum =0;
let n =1;
while(n<=10)
{
    sum += n++;
}
console.log(sum);

//t4 print numbers 10 to 1
n=10;
while(n>=1)
{
    console.log(n--);
}

//A3: Do..while loop
//t5 print numbers from 1 to 5
n= 1;
do {
    console.log(n++);
} while (n<=5);

//t6 calculate factorial of a number
number = 6;
let answer=1;
do {
    answer*= number--;
} while (number>=1);
console.log(answer);

//A4: Nested loop
//t7 print a pattern
// *
// * *
// * * *
// * * * *
// * * * * *
for(let i=1; i<=6; i++)
{
    let string ="";
    for(let j=1; j<=i; j++)
    {
        string += "* ";
    }
    console.log(string);
}

//A5: Loop control statements
//t8 print 1 to 10, but skip 5 using continue
for(let i=1; i<=10; i++)
{
    if(i==5) continue;
    console.log(i);
}
//this cannot be solved using while loop

//t9 print 1 to 10, but stop loop when number is 7 using break statement
num = 1;
while(num<=10){
    if(num==7)
        break;
    console.log(num++);
}


//Feature Request

//1- Number printing script
for(let number=1; number<=10; number++)
{
    console.log(number);
}
n=10;
while(n>=1)
{
    console.log(n--);
}

//2- Multiplication table script
number = 5;
for(let multiply=1; multiply<=10; multiply++)
{
    console.log(`${number} x ${multiply} = ${number * multiply}`);
}

//3- Pattern printing script
for(let i=1; i<=6; i++)
{
    let string ="";
    for(let j=1; j<=i; j++)
    {
        string += "* ";
    }
    console.log(string);
}

//4- Sum calculation script
sum =0;
n =1;
while(n<=10)
{
    sum += n++;
}
console.log(sum);

//5- Factorial calculation script
number = 4;
answer=1;
do {
    answer*= number--;
} while (number>=1);
console.log(answer);


// Achievement:
// By the end of these activities, students will:

// Understand and use for loops to iterate over a sequence of numbers.
// Utilize while loops for iteration based on a condition.
// Apply do...while loops to ensure the loop body is executed at least once.
// Implement nested loops to solve more complex problems.
// Use loop control statements (break and continue) to control the flow of loops.