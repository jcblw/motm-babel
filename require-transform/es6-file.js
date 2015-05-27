'use strict';

class Foo {
  constructor(options = {}) {
    const {x,y,z} = options;
    this._options = options;
    this.matrix = {x, y, z};
  }
  get options() {
    return this._options;
  }
}

const foo = new Foo({x:1,y:2,z:3,bar:'baz'});
const {bar} = foo._options;

export {foo, bar};
