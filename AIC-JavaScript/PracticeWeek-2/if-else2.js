const prompt=require("prompt-sync")();
var cost_Price=prompt("Enter Cost Price = ");
var selling_Price=prompt("Enter Selling Price = ");
if(cost_Price<selling_Price){
    console.log("Seller has made",selling_Price-cost_Price,"Profit");
}else{
    console.log("Seller has made",cost_Price-selling_Price,"loss");
}
//Take positive integer input and tell if it is a three-digit number or no
var pos_input=parseInt(prompt("Enter three digit positive integer = "));
if(pos_input>99&&pos_input<1000){
    console.log("Given input is three digit number");
}else{
    console.log("Given input is not a three digit number");
}

let pos_int=parseInt(prompt("Enter a positive integer = "));
//Take positive integer input and tell if it is divisible by 5 and 3
if(pos_int%5==0&&pos_int%3==0){
    console.log("Given input is divisble by 3 and 5")
}else{
    console.log("Given input is not divisble by 3 and 5")
}
//Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15
if(pos_int%5==0||pos_int%3==0&&pos_int%15!=0){
    console.log("Given input is divisble by 3 or 5 but not divisble by 15")
}else{
    console.log("Given input is not divisble by 3 or 5 and 15")
}
//Take positive integer input and tell if it is divisible by 5 or 3.
if(pos_int%5==0||pos_int%3==0){
    console.log("Given input is divisble by 3 or 5")
}else{
    console.log("Given input is not divisble by 3 or 5")
}
//Take 3 positive integers input and print the greatest of them. 
let num1=parseInt(prompt("Enter 1st number = "));
let num2=parseInt(prompt("Enter 2nd number = "));
let num3=parseInt(prompt("Enter 3rd number = "));
if(num1>num2&&num1>num3){
    console.log(num1,"is greatest of them")
}else if(num2>num1&&num2>num3){
    console.log(num2,"is greatest of them")
}else{
    console.log(num3,"is greatest of them")
}
//Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not. (Considering leap year occurs after every 4 years).
let year= parseInt(prompt("Enter year ="))
if(year%4==0){
    console.log(year,"is a leap year")
}else{
    console.log(year,"is not a leap year")
}