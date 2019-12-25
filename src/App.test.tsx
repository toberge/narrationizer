import React from 'react';
import App from './App';
import { shallow, ShallowWrapper } from 'enzyme';


describe('App', () => {
  const wrapper: ShallowWrapper = shallow(<App />);

  it('should render a title', function() {
    expect(wrapper.find('h1')).toHaveLength(1);
  });
});
