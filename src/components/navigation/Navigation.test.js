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
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from './components/navigation/Navigation';

configure({ adapter: new Adapter() });

test('has links container', (t) => {
  const wrapper = shallow(<Nav/>);
  const links = wrapper.find('div.Links');
  t.is(links.is('.Links'), true);
});

