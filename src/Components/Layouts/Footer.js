import React from 'react'

//Components
import {
  Paper,
  Tabs,
  Tab
} from '@material-ui/core'

export default (props)=>
  <Paper>
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      value={0}
      onChange
      centered
      >
      <Tab label="Item One" />
      <Tab label="Item Two" />
      <Tab label="Item Three" />
    </Tabs>
  </Paper>
