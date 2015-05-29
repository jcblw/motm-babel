'use strict';

class Person {
  constructor(options) {
    this.firstName = options.firstName;
    this.lastName = options.lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

export {Person};
