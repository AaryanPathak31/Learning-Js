const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

// console.log(marvel_heros);
//  output [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// [ 'thor', 'Ironman', 'spiderman','superman', 'flash', 'batman' ]

const all_new_heros = [...marvel_heros, ...dc_heros] //spread this ... represents spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


 
//console.log(Array.isArray("Aaryaan"))  //checks array or not.
//console.log(Array.from("Aaryan"))  // make Aaryan a array.
// console.log(Array.from({name: "Aaryan"})) // interesting case as this is boject and it can convert it to array but we have
//to specify whether key or pair.

// let score1 = 100
// let score2 = 200
// let score3 = 300

console.log(Array.of(score1, score2, score3));  //makes 100 , 200 and 300 to the array