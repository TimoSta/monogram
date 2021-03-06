import React from 'react'

import {Paper} from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

import ShapeOptions from './shapes/ShapeOptions'

const styles = theme => ({
  paper: {
    position: 'absolute',
    top: 100,
    right: 50,
    zIndex: 1000,
    width: 300,
    backgroundColor: '#FFF'
  }
})

const Options = ({classes, selectedShape, onChangeShape, theme}) => (
  <Paper elevation={8} className={classes.paper}>
    <ShapeOptions
      shape={selectedShape}
      theme={theme}
      onChangeShape={onChangeShape}
    />
  </Paper>
)

export default withStyles(styles)(Options)
