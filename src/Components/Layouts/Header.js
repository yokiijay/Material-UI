import React from "react"

// Components
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"

export default props => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="headline" color="inherit">
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
)
