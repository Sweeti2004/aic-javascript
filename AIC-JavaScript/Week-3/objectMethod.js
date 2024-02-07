const user=new Object();
user.id="101";
user.name="Sweeti";
user.loggedIn=false;
console.log(user);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        fullusername:{
            firstname:"Puja",
            lastname:"Kumari"
        }
    },
    greetMe:function(){
        console.log("Hello, Sweeti this side")
    }
}
console.log(regularUser.fullname.fullusername.lastname);
console.log(regularUser.greetMe())