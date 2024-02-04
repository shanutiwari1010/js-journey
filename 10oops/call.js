function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  setUserName.call(this,username);

  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@setUserName.com", "123");
console.log(chai);


// call passes the current execution context to another function
