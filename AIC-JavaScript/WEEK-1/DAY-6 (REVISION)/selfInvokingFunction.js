(function(){
    console.log("this  is a self-invoking functions");
    })();

(function(a,b){
    console.log(a%b);
})(5,2);


(function(n){
    for(let i=1;i<=n;i++){
        console.log("Alpha Intern");
    }
})(5);
