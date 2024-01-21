// calculate square of any number
function square(num1){
    return num1*num1;
}
// calculate factorial of any number
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
// calculate sum of n number
function Sum(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
console.log(square(7));
console.log(factorial(5));
console.log(Sum(5));