//let score= "33abc"
//let score= null //typeof => 0
//let score= undefined //typeof => Nan
//let score= true //typeof=> 1 asit is true.
// let score= "Aaryan" //typeof=> Nan

// console.log(typeof score);
// console.log(typeof(score)); //both are same


// let valueInNumber=Number(score)
//it would turn score in number even it is in string.
// it would even turn string value to numbers and show its types as NaN
// not be dependable on numbers in Js
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
//NaN => Not a Number!
/*
"33" => 33
"33abc" => Nan
true => 1; false=>0
*/

// let isLoggedIn=true
//let  isLoggedIn=1
//let  isLoggedIn="" //=> false
//let  isLoggedIn="Aaryan"


// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

/*
1 => true ;
0=> false
empty string "" => false
"Aaryan" => true
*/

// let someNumber = 33

// let stringNumber =String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber); //typeof is string.


/***********************Operations************ */

let value=3
let negvalue= -value
// console.log(negvalue);

// console.log(2+2)
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); //2^2
// console.log(2%3);

let str1="hello"
let str2=" Aaryan "

let str3=str1+str2
// console.log(str1+str2)
// console.log(str3)

// //problem
// console.log("1"+2); //12
// console.log(1+"2"); //12
// console.log("1" + 2 +"2"); //122 /* not dependable on these */
// console.log(1+2+"2"); //33

// console.log(3+4*5%3); //use paranthesis
// console.log((3+4)*5%3);

// console.log(true);
// console.log(+true); //value is 1
// // console.log(true+); //error code
// console.log(+""); //0 is output

//Operatorn presedence to be learned.

let num1, num2, num3
num1=num2=num3=2+2
// console.log([num1,num2,num3]);
// above should be avoided

let gameCounter =100
// gameCounter++ //add 1 to 100 i.e. 101

++gameCounter
console.log(gameCounter)


// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

/*
Postfix increment
JS
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
Prefix increment
JS
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
*/


