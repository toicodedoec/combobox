'use strict';

const customElements = require('..');
const assert = require('assert').strict;

assert.strictEqual(customElements(), 'Hello from customElements');
console.info("customElements tests passed");
