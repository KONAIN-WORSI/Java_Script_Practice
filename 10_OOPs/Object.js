function MultipleOf5(num) {
    return num * 5;
}

MultipleOf5.power = 4;

console.log(MultipleOf5(3));
console.log(MultipleOf5.power);
console.log(MultipleOf5.prototype);


function createUser(name, score){
    this.name = name
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
};

createUser.prototype.PrintMe = function() {
    console.log(`Name: ${this.name}, Score: ${this.score}`);
}

const user1 = new createUser("Alice", 10);
const user2 = new createUser("Bob", 5);

user1.increment();
user1.PrintMe(); // Output: Name: Alice, Score: 11

