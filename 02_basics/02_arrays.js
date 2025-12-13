const marvelHeroes = ["ironman", "thor", "hulk"];

const dcHeroes = ["superman", "flash", "batman"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);

//concat method

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);
// console.log(allHeroes);

//spread operator

// const allHeroes = [...marvelHeroes, ...dcHeroes];
// console.log(allHeroes);

// flat method
// const array1 = [1, 32, 3, 4, [9, 5, 3], 7, [42, 42, [456, 243, 324]]];
// console.log(array1);

// const flattedArray = array1.flat(Infinity);
// console.log(flattedArray);

console.log(Array.isArray("Konain"));
console.log(Array.from("KONAIN"));
console.log(Array.from({ name: "konain" })); // it will convert only iterable objects to array

let score1 = 122;
let score2 = 334;
let score3 = 455;

console.log(Array.of(score1, score2, score3));
