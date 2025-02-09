import { CircularProgress, Grid2 } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid2
      spacing={0} 
      container
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid2 
        container
        direction={'row'}
        justifyContent={'center'}
      >
        <CircularProgress color="warning" />
      </Grid2>
    </Grid2>
  )
}
