// Why do we need objects?
// objects are far more superior to variables. Variables limit us
// to handling only one value at a time whereas objects enable us to have multiple values of multiple data types to be stored under one name. This allows us to escape many variables for our applications and organize the code for better data handling.

// creation of object
const mySym=Symbol("key1");
const user={
    name:"Sweeti",
    class:"B.Tech",
    [mySym]:"myKey1",
    Age:18,
    location:"Bihar",
    email:"Sweeti123@gmail.com",
    bool:[true,false]
}
//Printing the value of object
console.log(user.name);//1st method
console.log(user["name"]);//2nd method
//changing value of object
user.location="haryana";
console.log(user["location"]);
//Object.freeze(user);
user.email="sweeti5677@gmail.com";
console.log(user)

user.greeting=function(){
    console.log("Hello js user");
}
console.log(user.greeting());
//Refer object by using function
user.greetingTwo=function(){
    console.log(`hello js user ${this.name}`)
}
