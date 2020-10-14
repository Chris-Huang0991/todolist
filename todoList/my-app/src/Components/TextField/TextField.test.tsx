import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import TextFieldComponent from './index'

Enzyme.configure({adapter:new EnzymeAdapter()})

describe('TextField test', () => {
  test('render without error', () => {
    const wrapper = mount(<TextFieldComponent label={'add new items'} />)
    expect(wrapper.text()).toEqual('add new items')
  });
  test('onchange feature', () => {
    const wrapper = mount(<TextFieldComponent label={'add new items'} />)
    wrapper.find('input').simulate("change", { target: { value: "play" }})
    // wrapper.simulate('change', { target: { value: 'Hello' } })
    expect(wrapper.children().getElement().props.value).toBe('play')
  });
})