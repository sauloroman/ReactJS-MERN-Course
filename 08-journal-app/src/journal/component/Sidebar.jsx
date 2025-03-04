import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { useSelector } from 'react-redux';

export const Sidebar = ({ drawerWidth = 240 }) => {

  const { displayName } = useSelector(state => state.auth)

  return (
    <Box
      component={'nav'}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant='h6' noWrap component={'div'}>{displayName}</Typography>
        </Toolbar>
        <Divider />

        <List>
          {
            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid2 container>
                    <ListItemText primary={text}></ListItemText>
                    <ListItemText secondary={'Incididunt id ullamco sint amet mollit ullamco est ea Lorem tempor id ipsum amet fugiat.'}></ListItemText>
                  </Grid2>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  );
};
