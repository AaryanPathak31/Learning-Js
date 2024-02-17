const accoundId=144553 //fixxed
let accountemail="aaryan@gmail.com" 
//let is used in place of var.
var accountPassword="12345"
// var is not used now. because it don't have scope i.e. {}.
accountCity="Delhi"

// accoundId =2 //not allowed  i.e. constant can't be changed once declared.

accountemail="abc@gmail.com"
accountPassword="1246578"
accountCity="Jaipur" //not good way to use this way. always use const or let.
// although this could be used but this is not the best way.
let accountState;
//if no value is declared in js and the variable is executed it shows undefined.
//semicolan(;) is not necessary.
console.log(accoundId);
/*
prefer not to use var because not to use var
because of issue in block scope and functional scopel
*/ 

console.table([accoundId,accountemail,accountPassword,accountCity,accountState])
