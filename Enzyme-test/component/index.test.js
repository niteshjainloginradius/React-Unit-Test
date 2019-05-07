import React from 'react';
//var enzyme = require('enzyme');
//var Adapter = require('enzyme-adapter-react-16');
import Welcome from './../../src/index';
import renderer from 'react-test-renderer';
//var jest =require('jest');
//enzyme.configure({ adapter: new Adapter() });
test('renders correctly', () => {
  const tree = renderer.create(<Welcome/>).toJSON();
  expect(tree).toMatchSnapshot();
  })