import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import Button from './index'

Enzyme.configure({adapter:new EnzymeAdapter()})

describe('button test', () => {
  test('render without error', () => {
    const wrapper = mount(<Button text={'test'} number={3} />)
    expect(wrapper.text()).toEqual('test - 3')
    expect(wrapper.getElement().props.number).toEqual(3)
  });
  test('test click', () => {
    const wrapper = mount(<Button text={'test'} number={3} />)
    wrapper.simulate('click')
    expect(wrapper.text().slice(-1)).toEqual('4')
  });
  test('test disabled', () => {
    const wrapper = mount(<Button text={'test'} number={3} disabled />)
    wrapper.simulate('click')
    expect(wrapper.text().slice(-1)).toEqual('3')
  });
})