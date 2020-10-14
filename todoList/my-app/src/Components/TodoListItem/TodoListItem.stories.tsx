import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TodoListItem, { TodoListItemProps } from '.'
import List from '@material-ui/core/List';

export default {
  title: 'Atoms/TodoList/TodoListItem',
  component: TodoListItem,
} as Meta

const Template: Story<TodoListItemProps> = (args) => {

  return (
    <List>
      <TodoListItem {...args}/>
    </List>
  )
}

export const basic = Template.bind({})
basic.args = {
  text: 'test'
}