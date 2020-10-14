import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Button, { NewButtonProps } from '.'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

export default {
  title: 'Atoms/TodoList/Button',
  component: Button,
} as Meta

const Template: Story<NewButtonProps> = (args) => {

  return (
    <div>
      <Button {...args}/>
    </div>
  )
}

export const basic = Template.bind({})
basic.args = {
  text: 'test',
  number: 2,
  variant: "contained",
  disabled: false,
  color: "primary",
  startIcon: <FormatListBulletedIcon />,
  disableRipple: false,
}