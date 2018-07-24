// Author: Cody Welsh
// License: GPL 3.0

// Suggestion: Pair *.js source files with *.tests.js files.
// For example:
// src/cool.js
// src/cool.tests.js
import test from 'ava';
import React from 'react';
import PropTypes from 'prop-types';
import shallow from 'enzyme';

const Foo = ({children}) => (
	<div className="Foo">
		<span className="bar">bar</span>
		{children}
		<span className="bar">bar</span>
	</div>);

Foo.propTypes = {
	children: PropTypes.any
};

test('has a .Foo class name', t => {
	const wrapper = shallow(<Foo/>);
	t.true(wrapper.hasClass('Foo'));
});

test('renders two `.Bar`', t => {
	const wrapper = shallow(<Foo/>);
	t.is(wrapper.find('.bar').length, 2);
});

test('renders children when passed in', t => {
	const wrapper = shallow(
		<Foo>
			<div className="unique"/>
		</Foo>
	);
	t.true(wrapper.contains(<div className="unique"/>));
});
