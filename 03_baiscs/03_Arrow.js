const user = {
    username : "konain",
    price: 592,

    welcomeMessage : function () {
        console.log(`${this.username}, Welcome to Website!`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Himesh";
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "Hitesh"
//     console.log(this.username);
    
// }

// chai()

// const chai = function() {
//     let username = "Konain"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "Konain"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(2226, 89));
