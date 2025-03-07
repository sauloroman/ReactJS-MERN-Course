import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { TurnedInNot } from '@mui/icons-material';
import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { setActiveNote } from '../../store/journal/journal.slice';

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

  const dispatch = useDispatch()

  const onClickNote = () => {
    dispatch( setActiveNote({ id, title, body, date, imageUrls }) )
  }

  const newTitle = useMemo( () => {
    return title.length > 17 
      ? title.substring(0, 17) + '...'
      : title
  }, [title])

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 container>
          <ListItemText primary={newTitle}></ListItemText>
          <ListItemText secondary={body}></ListItemText>
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
