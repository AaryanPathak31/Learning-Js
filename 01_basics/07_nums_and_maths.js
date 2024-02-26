const score=400
// console.log(typeof(score));
// console.log(score);

const balance=new Number(100) //change its datatype to number.
// console.log(balance);

// console.log(balance.toString());
// console.log(typeof(balance.toString())); //changed its datatype to string

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //deciaml till 2 points. i.e. 100.00

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //give precisse value.
/*
Returns a string containing a number represented either in exponential 
or fixed-point notation with a specified number of digits.
*/

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); //1,000,000 =>U.S. Number System.
// console.log(hundreds.toLocaleString('en-IN')); //comman 10,00,000..in indiancurrency

// +++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
/*
abs=> absolute value
round=> round off i.e. greater than 5 is successor number
ceil =>ceiling number i.e. even a single point greater than that of the integer it would round up to the next number.
i.e. 4.1 =>5
floor is opposite i.e. 4.9 is 5.
min=> minimum value
max=> Maximum value
maths.random=> random number between 0 and 1.
*/