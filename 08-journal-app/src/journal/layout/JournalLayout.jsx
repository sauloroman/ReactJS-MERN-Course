import { Box, Toolbar } from "@mui/material"
import { Navbar } from "../components/Navbar"
import { Sidebar } from "../components"

const drawerWidth = 250

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />

      <Box
        component={'main'}
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />
        { children }
      </Box>
    </Box>
  )
}
