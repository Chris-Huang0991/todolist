import React from 'react'
import Button, { ButtonProps } from '@material-ui/core/Button'


export type NewButtonProps = ButtonProps & {
    text: string
    number: number
  }

const NewButton: React.FC<NewButtonProps> = props => {
  const [number, setNumber] = React.useState(props.number)
  return (
  <Button {...props} onClick={() => setNumber(number+1)}>{props.text} - {number}</Button>
  )
}
export default NewButton
