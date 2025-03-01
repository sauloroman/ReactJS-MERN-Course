import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material';
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material';

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: 2, display: { sm: 'none' } }}>
          <MenuOutlined />
        </IconButton>

        <Grid2
          width={'100%'}
          container
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="h6" noWrap component={'div'}>
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid2>
      </Toolbar>
    </AppBar>
  );
};
