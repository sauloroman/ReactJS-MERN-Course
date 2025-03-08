import { useDispatch, useSelector } from 'react-redux';

import { Button, Grid2, IconButton, TextField, Typography } from '@mui/material';
import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from '../component';
import { useForm } from '../../hooks/useForm';
import { useEffect, useMemo, useRef } from 'react';
import { setActiveNote } from '../../store/journal/journal.slice';
import { startSaveNote, startUploadingFiles } from '../../store/journal/journal.thunk';

export const NoteView = () => {

  const dispatch = useDispatch()

  const { active: note, messageSaved, isSaving } = useSelector( state => state.journal )

  const { body, title, date, onInputChange, formState } = useForm(note)

  const fileInputRef = useRef()

  const dateString = useMemo(() => {
    const newDate = new Date(date)
    return newDate.toUTCString()
  }, [date])

  useEffect(() => {
    dispatch( setActiveNote(formState) )
  }, [formState])

  useEffect(() => {
    if ( messageSaved.length > 0 ){
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }
  }, [messageSaved])

  const onSaveNote  = () => {
    dispatch( startSaveNote() )
  }

  const onFileInputChange = ({ target }) => {
    if (target.files === 0 ) return
    dispatch( startUploadingFiles(target.files) )
  }

  return (
    <Grid2
      className='animate__animated animate__fadeIn animate__faster'
      container
      sx={{ mb: 1 }}
    >
      
      <Grid2 width={'100%'} mb={5} container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Grid2>
          <Typography fontSize={39} fontWeight={'light'}>{dateString}</Typography>
        </Grid2>
        
        <Grid2>

          <input 
            ref={fileInputRef}
            type='file' 
            multiple
            onChange={ onFileInputChange }
            style={{ display: 'none', pointerEvents: 'none' }}
          />

          <IconButton 
            onClick={ () => fileInputRef.current.click() }
            color='primary' 
            disabled={isSaving}
          >
            <UploadOutlined />
          </IconButton>

          <Button disabled={isSaving} onClick={ onSaveNote } color="primary" sx={{ p: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid2>
      </Grid2>

      <Grid2 width={'100%'} mb={5}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="Titulo"
          sx={{ border: 'none', mb: 1 }}
          name='title'
          value={title}
          onChange={onInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Qué sucedió el día de hoy"
          label="Titulo"
          minRows={5}
          name='body'
          value={body}
          onChange={onInputChange}
        />
      </Grid2>

      {/* Image gallery */}
      <ImageGallery />
    </Grid2>
  )
}
