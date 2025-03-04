import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid2, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../component';

export const NoteView = () => {
  return (
    <Grid2
      className='animate__animated animate__fadeIn animate__faster'
      container
      sx={{ mb: 1 }}
    >
      
      <Grid2 width={'100%'} mb={5} container direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
        <Grid2>
          <Typography fontSize={39} fontWeight={'light'}>
            28 de agosto, 2023
          </Typography>
        </Grid2>
        
        <Grid2>
          <Button color="primary" sx={{ p: 2 }}>
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
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Qué sucedió el día de hoy"
          label="Titulo"
          minRows={5}
        />
      </Grid2>

      {/* Image gallery */}
      <ImageGallery />
    </Grid2>
  )
}
