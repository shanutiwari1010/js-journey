// ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptePassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `'${this.username.toUpperCase()}'`;
//   }
// }

// const chai = new User("chai", "chai2hej@.com", "123");
// console.log(chai.encryptePassword());
// console.log(chai.changeUsername());

/*
 constructor is called as soon as object is created
*/

// BEHIND THE SCHENE
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User.prototype.encryptePassword = function(){
    return `${this.password}xyz`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "teaa@chai.com", "1010")
console.log(tea.encryptePassword())
console.log(tea.changeUsername())