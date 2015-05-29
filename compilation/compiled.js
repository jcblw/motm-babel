'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Foo = (function () {
  function Foo() {
    var options = arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Foo);

    var x = options.x;
    var y = options.y;
    var z = options.z;

    this._options = options;
    this.matrix = { x: x, y: y, z: z };
  }

  _createClass(Foo, [{
    key: 'options',
    get: function () {
      return this._options;
    }
  }]);

  return Foo;
})();

var foo = new Foo({ x: 1, y: 2, z: 4, bar: 'baz' });
var bar = foo._options.bar;

console.log(foo.matrix, bar);
