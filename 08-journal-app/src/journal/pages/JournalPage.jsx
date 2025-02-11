import { Box } from "@mui/material"
import { Navbar } from "../components/Navbar"

const drawerWidth = 200

export const JournalPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
    </Box>
  )
}
