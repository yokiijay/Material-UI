import React from "react"

// Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core"
import Create from '../Exercises/Dialogs/Create'

export default props => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex:1}}>
        News
      </Typography>
      <Create />
    </Toolbar>
  </AppBar>
)
