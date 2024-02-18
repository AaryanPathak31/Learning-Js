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
console.log(str1+str2)
console.log(str3)

//problem
console.log("1"+2);
console.log(1+"2");
