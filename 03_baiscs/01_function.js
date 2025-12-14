
function greetingForAll() {
    console.log("hi");
    console.log("hello");
    console.log("namaste");
    console.log("assalamualaikum");
}

// greetingForAll();

// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
    
// }

// addTwoNumbers(5, 9)

// const result = addTwoNumbers(10, 4)
// console.log(result); // undefined

function addTwoNumbers(num1, num2) {
    return num1 +  num2;
}

// addTwoNumbers(5, 8) does not print anything
const sum  =  addTwoNumbers(7, 3)
// console.log(sum);

function loginUserMessage(username = "Guest") {
    // if(username === undefined) {
    //     console.log('Please enter a username');
    //     return;
    // }
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} has just logged in`
}

// const message = loginUserMessage("konain") // doesnot print anything
console.log(loginUserMessage("hitesh"));






