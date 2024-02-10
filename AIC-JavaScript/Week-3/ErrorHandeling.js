try{
    let x=undefined;
    console.log(x[0]);
}catch(err){
    console.log(err);
    console.log("Error handeling in catch");
}finally{
    console.log("Finally always executed");
}

try{
    console.log("Hello");
    console.log(a);
    console.log("Ending try");
}catch{
    console.log("Error Handled");
}
console.log("end");
