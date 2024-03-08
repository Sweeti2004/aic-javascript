//Primitive
//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt

const score=700
const scoreValue=233.6

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('478')
const anotherid=Symbol('478')
console.log(id==anotherid)

const bigNumber=23356778189037364n


//Refrence(Non primitive)
//Array,Objects,Functions
const heros=["abc","def","ghi"]
let obj={
    name:"sweeti",
    age:22
}
const myFunction=function(){
    console.log("Hello World")
}

//+++++++++++++++++++++++++++++++++++++++
//Stack(Primitive),Heap(Non-Primitive)
let myname="SweetiKumari"
let anotherName=myname
anotherName="Sweetuuu"

console.log(myname)
console.log(anotherName)

let userOne={
    email: "user@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="sweeti@gmail.com"

console.log(userOne.email)
console.log(userTwo.email);


