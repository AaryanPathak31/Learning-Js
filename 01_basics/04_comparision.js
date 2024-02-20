// console.log(2>1); //true
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);
//

// console.log("2">1); //true
// console.log("02">1); //true //it automatically converted it into number from string.
// //it does't give us predictable result.
/*
avoid these type of writting code. ||||
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true=> null can't be converted.
/*
the reason is that an equity check ==,and comparission > <>= <= work differently.
comparission convert null to a number, treating it as 0.
thats why in third null>=0 is true and 1 is false.
*/
// console.log(null<0); //false
/*
console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0); //fasle
//++++till here
*/
 //=== (strict check)
console.log("2"===2); //it checks the value strickly i.e it checkes datatype not directly converted.
