// Author: Cody Welsh
// License: GPL 3.0

import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav, { navRoutes } from './Navigation';

configure({ adapter: new Adapter() });

test('has links container', (t) => {
  const wrapper = shallow(<Nav/>);
  const links = wrapper.find('div.Nav');
  t.is(links.is('.Nav'), true);
});

test('has same number of links as supplied routes', (t) => {
  const wrapper = shallow(<Nav/>);
  const linksLength = wrapper.find('Link').length;
  t.true(linksLength === (navRoutes.length));
});

