
// const coding = ['js', 'python', 'java', 'ruby']

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) =>  num > 5)
// console.log(newNums);

// const newNums = myNums.map( (num) => {return num + 10})
// console.log(newNums);


const newNums = myNums.map( (num) => num * 7).map( (num) => num - 3).filter( (num) => {return num % 2 !== 0})
console.log(newNums);


