const myName="Sweeti"
const count=54
//console.log(myName+count+" Value");
console.log(`Hey, my name is ${myName} and my repo count is ${count}`);

const gameName=new  String("Sweeti-Kumari");

console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt[3]);
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,5)
console.log(newString);
const anotherString=gameName.slice(-7,3)
console.log(anotherString);
const newStringone="   Beauti    "
console.log(newString);
console.log(newStringone.trim());

const url="hhtps://sweeti.com/sweeti%11kumari"
console.log(url.replace('%11','-'));

console.log(url.includes('kum'));
console.log(url.includes('xyz'));

console.log(gameName.split('-'));