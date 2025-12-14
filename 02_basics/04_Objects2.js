// const tinderUser = new Object(); // this is singleton object 

const tinderUser = {}; // this is non-singleton object

// console.log(typeof tinder);
// console.log(typeof tinderUser);


tinderUser.id = "KOW0032";
tinderUser.name = "konain"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    userFullName: {
        userName: {
            firstName: "Himesh",
            lastName: "Doglaa"
        }

    }
}

// console.log(regularUser.userFullName.userName.lastName);


const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};

// const obj3 = {...obj1, ...obj2};
const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const user = [
    {
        id: 1,
        firstName: "konain",
        lastName: "al zhrani"
    },
    {
        id: 2,
        firstName: "Himesh",
        lastName: "Doglaa"
    },
    {
        id: 3,
        firstName: "John",
        lastName: "Cena"
    }
];

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(Object.hasOwnProperty('name'));

// console.log(user[2].lastName);


const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Himesh Doglaa",
}

// console.log(course.courseInstructor);

const {courseInstructor: instructor} = course; // object destructuring
console.log(instructor);














