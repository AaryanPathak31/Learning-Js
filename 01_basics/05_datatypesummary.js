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
                const score = 100
                const scoreValue = 100.3
                
                const isLoggedIn = false
                const outsideTemp = null
                let userEmail;
                
                const id = Symbol('123')
                const anotherId = Symbol('123')
                
                console.log(id === anotherId);
                
                // const bigNumber = 3456543576654356754n
                
                
                
                // Reference (Non primitive)
                
                // Array, Objects, Functions
                
                const heros = ["shaktiman", "naagraj", "doga"];
                let myObj = {
                    name: "hitesh",
                    age: 22,
                }
                
                const myFunction = function(){
                    console.log("Hello world");
                }
                
                console.log(typeof anotherId);