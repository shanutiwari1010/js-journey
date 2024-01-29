const marvel_heros = ["thor", "IronMan", "spiderMan"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);


const allNewHeros = [...marvel_heros , ...dc_heros]
console.log(allNewHeros)


console.log(Array.isArray("shanu"))
console.log(Array.from("shanu"))  //convert in array

console.log(Array.from({name : "shnau"}))  //gives empty arrays becaouse we need to tell that arrys are made from keys or values

