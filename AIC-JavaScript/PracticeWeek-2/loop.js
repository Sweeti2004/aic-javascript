// Print “Alpha Intern” 5 times using loop?
let i=1;
while(i<=5){
    console.log("Alpha Intern");
    i++;
}
//Print number from 1 to 100 using loop.
for(let i=1;i<=100;i++){
    console.log(i);
}
//Print all even number from between 1 to 100 using loop
for(let i=1;i<=100;i++){
    if(i%2==0){
        console.log(i);
    }
}
//Print the table of 19 using loop.
let number=19;
console.log("Table of 19: ")
for(let i=1;i<=10;i++){
    console.log("19 X",i,"=",19*i);
}
// Print all numbers from 1 to 100 that are divisible by 3
console.log("All number from 1 to 100 divisible by 3:")
for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log(i);
    }
}