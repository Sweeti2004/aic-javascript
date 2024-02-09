let arr=[2,3,4,5];
//for each loop by simple function
arr.forEach(function(element,index,arr){
    console.log(index,element,arr);
})
//for each loop by arrow function
arr.forEach((element,index,arr)=>{
    console.log(index,element,arr);
})
const fName=["SweetiRani","PujaRani","DinkarRaj","AyushRaj"];
fName.forEach((el)=>{
    console.log(el.toUpperCase());
})

//map by simple function
arr.map(function(element,index,arr){
    console.log(index,element,arr);
})
//map by arrow function
arr.map((element,index,arr)=>{
    console.log(index,element,arr);
})

//Filter
const raj=fName.filter((f)=>{
   return f.endsWith("Raj");
})
console.log(raj);

//reduce
const bill=[3,6,9];
const totalBill=bill.reduce((curr,prev)=>
    curr+prev,0
)
console.log(totalBill)

//every
const gameScore=[200,310,250,150,600]
//check all values are number
const checkGameScore=gameScore.every((v)=>typeof v==='number')
console.log(checkGameScore)
//find
//find values above 200
const above200=gameScore.find((score)=>score>200)
console.log(above200)

//sort
console.log(gameScore.sort())