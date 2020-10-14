import React from 'react';
import Enzyme,{ shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import TodoListItem from './index'

Enzyme.configure({adapter:new EnzymeAdapter()})

describe('todo List item test', () => {
  test('render without error', () => {
    const wrapper = mount(<TodoListItem text={'test'} />)
    expect(wrapper.text()).toEqual('test')
  });
  test('first checkbox click', () => {
    const wrapper = mount(<TodoListItem text={'test'} />)
    wrapper.find('[data-test="checkedBox"]').at(0).simulate('click')
    expect(wrapper.find('[data-test="checkedBox"]').at(0).getElement().props.checked).toBe(true)
  });
  test('second checkbox click', () => {
    const wrapper = mount(<TodoListItem text={'test'} />)
    wrapper.find('[data-test="isFavoriteBox"]').at(0).simulate('click')
    expect(wrapper.find('[data-test="isFavoriteBox"]').at(0).getElement().props.checked).toBe(true)
  });
  test('test disabled', () => {
    const wrapper = mount(<TodoListItem text={'test'} disabled={true} />)
    wrapper.find('[data-test="checkedBox"]').at(3).simulate('click')
    // console.log(wrapper.find('[data-test="checkedBox"]').at(0).getElement())
    // expect(wrapper.find('[data-test="checkedBox"]').at(0).getElement().props.checked).toBe(false)
    // wrapper.find('[data-test="isFavoriteBox"]').at(0).simulate('click')
    // expect(wrapper.find('[data-test="isFavoriteBox"]').at(0).getElement().props.checked).toBe(false)
  });
})