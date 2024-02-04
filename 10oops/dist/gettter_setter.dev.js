"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User(email, password) {
    _classCallCheck(this, User);

    this.email = email;
    this.password = password;
  }

  _createClass(User, [{
    key: "password",
    get: function get() {
      return this._password.toUpperCase();
    },
    set: function set(value) {
      this._password = value;
    }
  }, {
    key: "email",
    get: function get() {
      return this._email.toUpperCase();
    },
    set: function set(value) {
      this._email = value;
    }
  }]);

  return User;
}();

var shanu = new User("Shanu@ai", "123abs");
console.log(shanu.password);
console.log(shanu.email);