//objects are declared in 2 ways => i) literals  ii)constructor
// singleton  //is created when objected is made with the help of constructors
// Object.create  /// this is constructor method

// object literals

const user={}  //empty object
const mySym = Symbol("key1")


const JsUser = {
    name: "Aaryan",
    "full name": "Aaryan Pathak",
    [mySym]: "mykey1",
    age: 19,
    location: "Delhi",
    email: "aaryan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])  //same as above
// console.log(JsUser["full name"])  //for string object types
// console.log(JsUser[mySym])  //for symbol data types

JsUser.email = "aaryanh@chatgpt.com"
// Object.freeze(JsUser)  //with freeze keyword, later email can't be changed
JsUser.email = "aaryan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());