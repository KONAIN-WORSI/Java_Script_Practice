// const promiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve()
//         console.log("Async task is completed");
        
//     }, 1000)
// })


// promiseOne.then(function(){
//     console.log("Promise consumed");
// })


// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve({name: "Kumar", age: 30, email: "kumar@example.com"})
//     }, 1000)
// }).then(function(user) {
//     console.log(user);
// })


// const PromiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         let error = false
//         if(!error){
//             resolve({name: "Kumar", age: 30, email: "kumar@example.com"})
//         } else {
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// PromiseOne.then(function(user) {
//     console.log(user);
//     return user.name
// }).then(function(name) {
//     console.log(name);
// }).catch(function(err) {
//     console.log(err);
// }).finally(
//     console.log("Your promise is either resolved or rejected")  
// );



// async function getAllUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
// }

// getAllUsers();


fetch("https://api.github.com/users/KONAIN-WORSI")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);
})
.catch((err) => console.log(err));















