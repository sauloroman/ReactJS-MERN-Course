import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { NoteView, NothingSelectedView } from "../views"
import { startNewNoteThunk } from "../../store/journal/journal.thunk"

export const JournalPage = () => {

  const dispatch = useDispatch()
  const { isSaving, active } = useSelector( state => state.journal )

  const onClickNewNote = () => {
    dispatch( startNewNoteThunk() )
  }

  return (
    <JournalLayout>
      
      {
        !!active
        ? (<NoteView />)
        : (<NothingSelectedView />)
      }

      <IconButton
        onClick={ onClickNewNote }
        disabled={ isSaving }
        size="medium"
        sx={{
          color: "#fff",
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
