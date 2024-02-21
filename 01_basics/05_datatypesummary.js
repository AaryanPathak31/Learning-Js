/*in what matter is data kept in memory and how it is access it
 is divided into 2
 -Primitive data type
 -Non-Primitive data type

#Primitive:-(these are call by value i.e. when we call a function
    we get a copy to work not the real function.)
7 categories-
                -String
                -Number
                -Boolean
                -Null
                -Undefined
                -Symbol
                -BigInt=> Number with very high value.

** Javascript is Dynamically typed language.
No float here.
#Non-Primitive:- (these are refrence type i.e. we can get direct
    access of the data from the memory.)
    categories-
                -Arrays
                -Objects
                -Functions
 */
                // const score = 100
                // const scoreValue = 100.3
                /*
                const isLoggedIn = false
                const outsideTemp = null
                let userEmail; //undefined
                
                const id = Symbol('123')
                const anotherId = Symbol('123')*/
                
                // console.log(id === anotherId); //false
                
                // const bigNumber = 3456543576654356754n //n make it automatically big int
                
                
                
                // Reference (Non primitive)
                
                // Array, Objects, Functions
               /* 
                const heros = ["shaktiman", "naagraj", "doga"];
                let myObj = {
                    name: "Aaryan",
                    age: 22,
                }
                
                const myFunction = function(){
                    console.log("Hello world");
                }*/
                
                // console.log(typeof anotherId); //symbol
                // console.log(typeof myFunction); //function

//return type of non-primitive type is object. also known as object_function.

/**
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	
        Implementation-defined except may not be "undefined", 
        "boolean", "number", or "string".
 */

//*********** */        //https://262.ecma-international.org/5.1/#sec-11.4.3

//************************************** */

//Stack(Primitive) And Heap(Non-Primitive)
//stack => ek ke uppar ek.
//heap large storage box.
/*whenevr we use stack we get memory
and in heap we get refrence of original value*/

let myname="Aaryan"

let anothername=myname
anothername="Pathak"

console.log(myname) //stiall have Aaryan
console.log(anothername)
//above is stack so we have copy
let userone={
    email: "user@gmail.com",
    upi: "user@ybl"
}
console.log(userone); 
//{ email: 'user@gmail.com', upi: 'user@ybl'} <=joutput
//above is stored in heap so change at the original. in the above

let userTwo=userone

userTwo.email="aaryan@google.com"
console.log(userone.email)
console.log(userTwo.email)
//both have aaryan@google.com

