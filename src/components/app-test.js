import React from 'react';
import {shallow} from 'enzyme';
import {assert} from 'chai';
import App from './app';

suite('App component', () => {
  test('that the app is rendered', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('Text');

    assert.equal(text.children().text(), 'Grooming notifications');
  });
});
