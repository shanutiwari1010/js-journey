"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var descripter = Object.getOwnPropertyDescriptor(Math, "PI"); // console.log(descripter);
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

var chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,
  orderChai: function orderChai() {
    console.log("chai nhi bni");
  }
};
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
  //writable: false,
  enumerable: true
});
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (var _i = 0, _Object$entries = Object.entries(chai); _i < _Object$entries.length; _i++) {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      key = _Object$entries$_i[0],
      value = _Object$entries$_i[1];

  if (typeof value !== 'function') {
    console.log("".concat(key, " : ").concat(value));
  }
}