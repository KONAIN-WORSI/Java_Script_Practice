const mySym = Symbol("hello$");

const JsUser = {
  name: "konain",
  "full name": "konain al zhrani",
  [mySym]: "hello$",
  age: 19,
  isAdmin: true,
  courses: ["html", "css", "js"],
  isLogedIn: false,
  lastLogginDay: null,
};

JsUser["lastLogginDay"] = "23/11/2025";

// console.log(JsUser.age);
// console.log(JsUser["courses"]);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser.lastLogginDay);

// console.log(JsUser);
// Object.freeze(JsUser);

JsUser.age = 20;
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello Js user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello Js User, ${this["full name"]}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
