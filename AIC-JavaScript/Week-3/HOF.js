// const powerTwo=(n)=>{
//     return n**2;
// }
// function powerCube(powerTwo,n){
//     return powerTwo(n)*n;
// }
// console.log(powerCube(powerTwo,3));
// function sayHello(){
//     return()=>{
//         console.log("Hello,Guys")

//     }
// }
// let guessValue=sayHello();
// console.log(guessValue);
// guessValue();
// const higherOrderFunction=n =>{
//     const oneFun=m =>{
//         const twoFun=o=>{
//             return m+n+o
//         }
//         return twoFun
//     }
//     return oneFun
//   }
//   console.log(higherOrderFunction(2)(5)(7))
// //   set interval  and set timeout
function oneMoreHello(){
    console.log("Hello Sweeti!");
}
setInterval(oneMoreHello,1000);
setTimeout(oneMoreHello,2000);