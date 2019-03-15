import React from "react"
import { withStyles } from '@material-ui/core/styles'

//Components
import {
  Grid,
  Paper,
} from '@material-ui/core'

// Theme
const styles = theme => ({
  root: {

  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary
  }
})

// Main
const Exercises = (props) =>
  <Grid container justify='center' spacing={16}>
    <Grid item xs>
      <Paper style={{padding: 20}}>Left Pane</Paper>
    </Grid>
    <Grid item xs>
      <Paper style={{padding: 20}}>Right Pane</Paper>
    </Grid>
  </Grid>

export default withStyles(styles)(Exercises)
