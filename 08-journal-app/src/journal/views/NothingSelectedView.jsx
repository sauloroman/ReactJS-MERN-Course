import { StarOutline } from "@mui/icons-material"
import { Grid2, Typography } from "@mui/material"

export const NothingSelectedView = () => {
  return (
    <Grid2 
      container
      className="animate__animated animate__fadeIn animate__faster"
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        minHeight: 'calc(100vh - 110px)',
        backgroundColor: 'primary.main',
        borderRadius: 3,
      }}
    >
      <Grid2 textAlign={'center'} item size={{ xs: 12 }}>
        <StarOutline sx={{ fontSize: 100, color: 'white' }} />
      </Grid2>
      <Grid2 textAlign={'center'} item size={{ xs: 12 }}>
        <Typography color="white" fontSize={14}>Selecciona o crear una entrada</Typography>
      </Grid2>
    </Grid2>
  )
}
