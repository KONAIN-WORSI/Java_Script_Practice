let myHeroes = ["thor", "spiderman", "ironman"];

let heroPower = {
  thor: "hammer",
  spiderman: "web",
  ironman: "suit",

  getSpiderManPower: function () {
    console.log(`Spiderman power is ${this.spiderman}`);
  }
};


Object.prototype.konain = function() {
    console.log("Konain is present in all the objects!!!");
}


// heroPower.konain()
// myHeroes.konain()


// Prototype Inheritance

let User = {
    username: "default",
    email: "default",
}

let Teacher = {
    makeVideos: true,
}

let TeachingSupport = {
    isAvailable: false,
}

const TAsupport = {
    makeAssignments: true,
    fullTime: false,
    __proto__: TeachingSupport,
}

Teacher.__proto__ = User;


Object.setPrototypeOf(TeachingSupport, Teacher);


let anotherUserName = "Sajid Nadiawala  "


String.prototype.trueLength = function() {
    console.log(this);
    console.log(`True Length of the String is ${this.trim().length}`);
}

anotherUserName.trueLength()
"  konain worsi is working   ".trueLength()
"Ice cola tea".trueLength()
"cola   ".trueLength()


