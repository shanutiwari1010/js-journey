"use strict";

function User(email, password) {
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "email", {
    get: function get() {
      return this._email.toUpperCase();
    },
    set: function set(value) {
      this._email = value;
    }
  });
  Object.defineProperty(this, "password", {
    get: function get() {
      return this._password.toUpperCase();
    },
    set: function set(value) {
      this._password = value;
    }
  });
}

var chai = new User("chai@aaa ", "chai");
console.log(chai.email);