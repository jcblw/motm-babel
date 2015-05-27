'use strict';

import {Member} from './member';

const member = new Member({
  firstName: 'Jacob',
  lastName: 'Lowe',
  isAttending: true
});

console.log(member.status());
