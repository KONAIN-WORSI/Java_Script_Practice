const myObject = {
    js: "java script",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by apple"
}

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`)
    
// }

// const programming = ["js", 'rb', 'py', 'java']

// for (const key in programming) {
//     console.log(programming[key]);
    
// }



const coding = ['js', 'python', 'java', 'ruby']

coding.forEach((item) => {
    // console.log(item);
    
})


function printMe(item) {
    console.log(item);
    
}

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding  = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageFileName, item.languageName);
    
})