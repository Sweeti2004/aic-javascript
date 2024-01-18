// Assignment Operator
var students = 100; 
students+=5;
console.log(students);
students-=5;
console.log(students);
students*=5;
console.log(students);
students/=5;
console.log(students);
students**=2;
console.log(students);

// Arithmetic Operators
var num1 = 100;
var num2 = 2;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**num2);
console.log(++num1);
console.log(--num1);
console.log(num1++);
console.log(num1--);
// Comparison Operator
var num1 = 10;
var num2 = 20;
var num3 = 10;
var str1 = "10";
var str2 = "20"

var result = num1 == num2; // false
var result = num1 == num3; // true
var result = num1 === num3; // true
var result = num1 === str1; // false
var result = num1 != num2; // true
var result = num1 != num3; // false
var result = num1 !== num3; // false
var result = num1 !== str1; // true
var result = num1 > num3; // false
var result = num2 > num3; // true
var result = num1 >= num3; // true
var result = num2 >= num3; // true
var result = num1 < num3; // false
var result = num2 < num3; // false
var result = num1 <= num3; // true
var result = num2 <= num3; // false
var num1 = 10;
var num2 = 20;
var num3 = 10;
// 1. Logical AND
var result = num1 >= num3 && num1 == num3; // true
var result = num1 >= num2 && num1 == num3; // false
// 2. Logical OR
var result = num1 >= num3 || num1 == num3; // true
var result = num1 >= num2 || num1 == num3; // true
var result = num1 >= num2 || num1 > num3; // false
// 3. Logical NOT
var result = num1 == num3; // true
var result = !(num1 == num3); // fals

