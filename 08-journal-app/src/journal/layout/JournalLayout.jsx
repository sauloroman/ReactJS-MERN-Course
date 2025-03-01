import { Box, Toolbar } from '@mui/material'
import { Navbar, Sidebar } from '../component'

const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box display={'flex'}>

      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      
      <Box flexGrow={1} p={3} component={'main'}>
        <Toolbar />
        { children }
      </Box>

    </Box>
  )
}
