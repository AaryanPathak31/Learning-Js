const name="Aaryan"
const repoCount=2

// console.log(name + repoCount+ "Value");  => old value
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//above is the modern way to declare the string.

const gameName=new String('Aaryanap')
/*
String {'Aaryanap'}
0: "A"
1: "a"
2: "r"
3: "y"
4: "a"
5: "n"
6: "a"
7: "p"
length: 8
[[Prototype]]: String
[[PrimitiveValue]]: "Aaryanap"
*/
// console.log(gameName[0]); //=>A
// console.log(gameName.__proto__); //=> {} //this is syntax

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //print all element in the string.
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString=gameName.substring(0,4)
console.log(newString); //output=> Aary till 3rd index only.

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);
const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne="     Aaryan       "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim only works on blank spaces.

const url="https://www.mtlnovel.com/reborn-capital-empire/chapter-12-seize-the-future/"
console.log(url.replace('reborn', '-Aaryan')) //replace reborn with -

console.log(url.includes('europe')) //checks whether does url have europe in it or not.