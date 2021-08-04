import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";
import _createClass from "@babel/runtime-corejs3/helpers/createClass";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
import _Map from "@babel/runtime-corejs3/core-js-stable/map";
import _Object$fromEntries from "@babel/runtime-corejs3/core-js-stable/object/from-entries";
import "core-js/modules/es.function.name.js";

var test = function test(name) {
  return name === null || name === void 0 ? void 0 : name.name;
};

test('222');

var Person = /*#__PURE__*/function () {
  function Person() {
    _classCallCheck(this, Person);

    _defineProperty(this, "age", 1);
  }

  _createClass(Person, [{
    key: "play",
    value: function play() {}
  }]);

  return Person;
}();

var a = new Person();
a.play();
new _Promise(function () {});
new _Map();

_Object$fromEntries([[1, 2], [2, 3]]);