// Author: Cody Welsh
// License: GPL 3.0

// Suggestion: Pair *.js source files with *.tests.js files.
// For example:
// src/cool.js
// src/cool.tests.js
import test from 'ava';

test('foo', t => {
 t.pass();
});

test('bar', async t => {
 const bar = Promise.resolve('bar');

 t.is(await bar, 'bar');
});
