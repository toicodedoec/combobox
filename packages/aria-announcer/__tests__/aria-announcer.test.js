'use strict';

const ariaAnnouncer = require('..');
const assert = require('assert').strict;

assert.strictEqual(ariaAnnouncer(), 'Hello from ariaAnnouncer');
console.info("ariaAnnouncer tests passed");
