'use strict';

import {Person} from './person';

class Member extends Person {
  constructor(options = {}) {
    super(options);
    this.isAttending = options.isAttending;
  }

  status() {
    return `${this.fullName} is ${this.isAttending ? 'attending' : 'not attending'}`;
  }
}

export {Member};
