// Author: Cody Welsh
// License: GPL 3.0

// Suggestion: Pair *.js source files with *.tests.js files.
// For example:
// src/cool.js
// src/cool.tests.js

// I've chosen AVA and Enzyme here, but there are many other
// combinations of tools to choose from.
import test from 'ava';
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// In this context, you can't use the terse JSX syntax. You need to use
// either a class or a function, or you will have failed tests.
const Foo = () => (
  <div className="foo-inner">
    <p>Test Div</p>
  </div>
);

// An adapter allows Enzyme to understand tests written for React or
// other frameworks.
configure({ adapter: new Adapter() });

// Shallow tests do not emulate a browser.
test('shallow', (t) => {
  const wrapper = shallow(<Foo />);
  t.is(wrapper.contains(<p>Test Div</p>), true);
});

// Mounted tests simulate a browser via JSDOM.
// You can also choose another library to simulate the browser, but
// you'll have to set it up yourself.
test('mount', (t) => {
  const wrapper = mount(<Foo />);
  const fooInner = wrapper.find('.foo-inner');
  t.is(fooInner.is('.foo-inner'), true);
});
