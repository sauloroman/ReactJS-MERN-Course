import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid2 
      container
      spacing={0}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ height: '100vh', backgroundColor: 'primary.main' }}
    >
      <Grid2
        item
        size={{ xs: 10, sm: 6, lg: 4 }}
        sx={{
          backgroundColor: '#fff', 
          padding: 4, 
          borderRadius: 2 
        }}
      >
        <Typography variant="h5" fontWeight={700} sx={{ mb: 3 }}>{title}</Typography>
        { children }
      </Grid2>
    </Grid2>
  )
}
