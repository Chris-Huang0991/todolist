import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import TextFieldComponent, { TextFieldComponentProps } from '.'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

export default {
  title: 'Atoms/TodoList/TextField',
  component: TextFieldComponent,
} as Meta

const Template: Story<TextFieldComponentProps> = (args) => {
  return (
    <div>
      <TextFieldComponent {...args} />
    </div>
  )
}

export const basic = Template.bind({})
basic.args = {
  label: 'add new items',
  variant: "outlined",
  disabled: false,
  color: "primary",
}