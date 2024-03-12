//dates
let myDates=new Date()
console.log(myDates);
console.log(typeof(myDates));
console.log(myDates.toString());
console.log(myDates.toISOString());
console.log(myDates.toJSON());
console.log(myDates.toDateString());
console.log(myDates.toLocaleDateString());

let myCreatedDate=new Date(2004,7,21,5,2,3)
console.log(myCreatedDate.toString());

let anotherDate=new Date("2023-02-14")//yy/mm/dd
console.log(anotherDate.toString());
let myAnotherDate=new Date("10-04-2005")//mm/dd/yy
console.log(myAnotherDate.toString());

let newDate=new Date();
console.log(newDate.getMonth);
console.log(newDate.getDay);

console.log(newDate.toLocaleString('default',{
     weekday:  "long"
}));


//++++++++++++++++++TIME+++++++++++++++++++
let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myDates.getTime());

console.log(Math.floor(Date.now()/1000));//current date in miliseconds but converted into seconds