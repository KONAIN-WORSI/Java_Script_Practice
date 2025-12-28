// for of (array specific loop)

const arr = ["saktiman", "naagraj", "doga", "shaktimaan", "chacha bhatija"];

// for (const hero of arr) {
//     console.log(hero);
    
// }

const map = new Map();

map.set("name", "saktiman");
map.set("power", "super strength");
map.set("weapon", "lightning");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ": ", value);
    
}
