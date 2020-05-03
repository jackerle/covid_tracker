import React from 'react'
import {shallow} from 'enzyme'
import App from '../App'

it('<App/> have Modal,ListView and MapView?', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find('div').text()).toEqual('<Template_Modal /><ListView /><MapView />');
});