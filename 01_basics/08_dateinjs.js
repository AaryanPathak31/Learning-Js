// console.log("hello");
//Dates

let myDate=new Date()
// console.log(myDate);** from down here
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString())
// console.log(myDate.getTimezoneOffset())

/*
Output in Sequence:-
Mon Feb 26 2024 13:43:07 GMT+0000 (Coordinated Universal Time)
2/26/2024
Mon Feb 26 2024
2024-02-26T13:43:07.980Z
2024-02-26T13:43:07.980Z
2/26/2024, 1:43:07 PM
1:43:07 PM
13:43:07 GMT+0000 (Coordinated Universal Time)
*/


let myCreateDate=new Date(2024,7,31,5,3)
// yyyy,mm,dd,time
//indexing of month starts from 0
console.log(myCreateDate);
//2024-08-31T05:03:00.000Z

/*
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());
*/


let myTimeStamp = Date.now() //current time im Ms

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})