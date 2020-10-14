import React from 'react';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';

export type TodoListItemProps = ListItemProps & {
  text: string,
  disabled?: boolean
}
const TodoListItem: React.FC<TodoListItemProps> = ({
  text,
  disabled,
  ...props
}) => {
  const [checked, setChecked] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  return (
    <ListItem {...props} disabled={disabled}>
      <ListItemIcon>
        <Checkbox
          data-test="checkedBox"
          // className="testbox"
          edge="start"
          checked={checked}
          tabIndex={1}
          disableRipple
          disabled={disabled}
          onClick={()=>setChecked(!checked)}
          // inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>

      <ListItemText primary={text} />
      <ListItemSecondaryAction>
        <Checkbox
          data-test="isFavoriteBox"
          edge="start"
          checked={isFavorite}
          disabled={disabled}
          tabIndex={-1}
          disableRipple
          icon={<StarBorderIcon />}
          checkedIcon={<StarIcon />}
          onClick={()=>setIsFavorite(!isFavorite)}
            // inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default TodoListItem