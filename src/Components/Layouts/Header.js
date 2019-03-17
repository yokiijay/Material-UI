import React from "react"

// Components
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core"
import Create from '../Exercises/Dialogs/Create'

export default ({muscles, onCreate}) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit" style={{flex:1}}>
        News
      </Typography>
      <Create muscles={muscles} onCreate={onCreate} />
    </Toolbar>
  </AppBar>
)
