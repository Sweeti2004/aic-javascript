// Expression Function
// Say hii
let variable =function(){
    console.log("Hii")
}
// Calculate Reminder
let modulo=function(a,b){
    return a%b;
}
// Swap the Value
let swap=function(num1,num2){
    num1=num1+num2;
    num2=num1-num2;
    num1=num1-num2;
    console.log("Number1=",num1)
    console.log("Number2=",num2)
}
variable();
console.log(modulo(10,3))
swap(8,55);