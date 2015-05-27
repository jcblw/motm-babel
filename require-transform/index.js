'use strict';

// dont do this in a module
require("babel/register");

const _import = require('./es6-file');
const foo = _import.foo;
const bar = _import.bar;

console.log(foo, bar);
