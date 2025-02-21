import { TurnedInNot } from "@mui/icons-material"
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useMemo } from "react"
import { useDispatch } from "react-redux"
import { setActiveMode } from "../../store/journal/journal.slice"

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {
  
  const dispatch = useDispatch()

  const newTitle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + '...'
      : title
  }, [title])

  const onClickNote = () => {
    dispatch( setActiveMode({ title, body, id, date, imageUrls }) )
  }

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={ onClickNote }>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2 container>
          <ListItemText primary={ newTitle } />
          <ListItemText secondary={body} />
        </Grid2>
      </ListItemButton>
    </ListItem>
  )
}
