import React from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'

export type TextFieldComponentProps = TextFieldProps & {
  label: string
}
const TextFieldComponent: React.FC<TextFieldComponentProps> = props => {
  const [item, setItem] = React.useState('')
  return (
    <TextField  {...props} label={props.label} name="newItem" value={item} onChange={props => setItem(props.target.value)}/>
  )
}
export default TextFieldComponent