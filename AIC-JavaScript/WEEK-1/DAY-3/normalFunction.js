// function without parameter
function welcome(){
    console.log("Welcome to alpha Tech as a Alpha Intern")
}
// function with parameter
function displayMessage(messageToBeDisplayed){
    console.log(messageToBeDisplayed);
}
// function with parameter and return Statement
function sumOfTwoNumber(num1,num2){
    return num1+num2;
}
function sumOf2Number([num1,num2]){
    return num1+num2;
}

welcome();
displayMessage("I am happy to learn Web Development from Alpha Tech");
displayMessage("I am enjoying the journey of JavaScript");
console.log(sumOfTwoNumber(45,67));
// calling as a function array as an argument
let numbers=[10,54];
let result =sumOf2Number(numbers);
console.log(result);



