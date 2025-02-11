import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "../../hooks"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { startDeletingNote, startSaveNote, startUploadingFiles } from "../../store/journal/journal.thunk"
import { ImageGallery } from "../components/ImageGallery"
import { setActiveMode } from "../../store/journal/journal.slice"

export const NoteView = () => {

  const dispatch = useDispatch()
  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal )

  const fileInputRef = useRef()

  const { body, title, date, onInputChange, formState } = useForm( note )

  const dateString = useMemo(() => {
    const newDate = new Date( date )
    return newDate.toLocaleDateString()
  }, [date])

  useEffect(() => {
    dispatch( setActiveMode( formState ) )
  }, [formState])

  const onSaveNote = () => {
    dispatch( startSaveNote() )
  }

  const onFileInputChange = ({ target }) => {
    if ( target.files === 0 ) return
    dispatch( startUploadingFiles(target.files) )
  }

  const onDelete = () => {
    dispatch( startDeletingNote() )
  }

  return (
    <Grid2
      container
      direction={'column'}
      justifyContent={'space-between'}
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid2 item>
        <Typography fontFamily={39} fontWeight={'light'}>{ dateString }</Typography>
      </Grid2>

      <Grid2 container justifyContent={'end'}>

        <input 
          type="file" 
          multiple
          ref={ fileInputRef }
          onChange={ onFileInputChange }
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={ isSaving }
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid2>

      <Grid2 container>
        <TextField 
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label='Título'
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={ onInputChange }
        />

        <TextField 
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Descripción de la actividad"
          minRows={5}
          name='body'
          value={body}
          onChange={ onInputChange }
        />
      </Grid2>

      <Grid2 container justifyContent={'end'}>
        <Button
          onClick={ onDelete }
          sx={{ mt: 2 }}
          color="error"
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid2>

      <ImageGallery 
        images={ note.imageUrls }
      />

    </Grid2>
  )
}
