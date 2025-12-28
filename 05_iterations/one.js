// for (let i = 0; i <= 10; i++) {
//     console.log(i);
    
// }


// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`${i} * ${j} = ${i * j}`);
        
//     }
    
// }

// const arr = ["saktiman", "naagraj", "doga", "shaktimaan", "chacha bhatija"];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     // console.log(element);
    
// }

// break and continue

// for (let i = 1; i < 20; i++) {
//     if (i === 5) {
//         console.log(`${i} is the best number`);
//         break;
//     }
//     console.log(`Value of i is ${i}`);
    
// }

for (let i = 1; i < 20; i++) {
    if (i === 5) {
        console.log(`Detected ${i}`)
        continue;
    }
    console.log(`Value of i is ${i}`);
    
}