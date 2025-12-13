// DATE

let myDate = new Date();

// console.log(myDate); //  2025-12-08T09:29:08.463Z
// console.log(myDate.toDateString()); //  Mon Dec 08 2025
// console.log(myDate.toISOString()); // 2025-12-08T09:29:08.463Z
// console.log(myDate.toJSON()); // 2025-12-08T09:29:08.463Z
// console.log(myDate.toLocaleDateString()); // 12/8/2025
// console.log(myDate.toLocaleTimeString()); // 3:14:08 PM
// console.log(myDate.toString()); // Mon Dec 08 2025 15:14:08 GMT+0600 (Nepal Standard Time)
// console.log(myDate.toUTCString()); // Mon, 08 Dec 2025 09:29:08 GMT
// console.log(myDate.toTimeString()); // 15:14:08 GMT+0600 (Nepal Standard Time)

// created date object
// let newDate = new Date(2025, 11, 8, 3, 30);
let newDate = new Date("08-12-2025 3:35:00");

// console.log(newDate);
// console.log(newDate.toLocaleString());

// Time stamps
let newTime = Date.now();

// console.log(newTime);
// console.log(newDate.getTime());
// console.log(Math.round(Date.now() / 1000)); // to get time in seconds

// myDate.toLocaleDateString('default' , {
//     weekday: 'long',
//     hour12: 'true',

// })

console.log(
  myDate.toLocaleDateString("default", {
    weekday: "long",
    hour12: "true",
  })
);
