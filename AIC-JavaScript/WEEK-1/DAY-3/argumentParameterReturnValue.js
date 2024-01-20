// function declearition
function sumOfAllNumbers(){
    let sum=0;
    for(let i=0;i<arguments.length;i++)
        sum+=arguments[i];
        return sum;
    
}
// function call
let result =sumOfAllNumbers(1,2,3,4,5);
console.log(result);//Output 15