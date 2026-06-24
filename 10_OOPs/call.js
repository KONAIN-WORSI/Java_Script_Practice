function SetUsername(username) {
    this.username = username;
}

function CreateUser(username, email , password) {
    SetUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const chai = new CreateUser("chai", "hi@iic.edu.np", "12345678")

console.log(chai);