import React, { Component, Fragment } from "react"
import { 
	PlaylistAdd as Add
} from "@material-ui/icons"

// Components
import {
	Fab,
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	MenuItem,
	FormControl,
	InputLabel,
	Select
} from '@material-ui/core'

class Create extends Component {

	state = {
		open: false,
		select: '',
		form: {
			id: '',
			title: '',
			description: '',
			muscles: ''
		}
	}

	handleOpen = ()=>{
		this.setState({
			open: true
		})
	}
	handleClose = ()=>{
		this.setState({
			open: false
		})
	}
	handleChange = ()=>{

	}

  render() {
    return (
      <Fragment>
        <Fab size='small' onClick={this.handleOpen}>
					<Add color='primary' />
				</Fab>
				<Dialog open={this.state.open} onClose={this.handleClose}>
					<DialogTitle>Add your description to exercise</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To add to this list, please enter your description here. We will send updates
							occasionally.
						</DialogContentText>
						<br/>
						<form>
							<TextField
								autoFocus
								margin="dense"
								id="name"
								label="description"
								type="text"
								placeholder='write something'
								variant='outlined'
								fullWidth
							/>
							<FormControl fullWidth>
								<InputLabel>Age</InputLabel>
								<Select
									value={this.state.select}
									onChange={this.handleChange}
									variant='outlined'
								>
									<MenuItem value=""></MenuItem>
									<MenuItem value={10}>Ten</MenuItem>
									<MenuItem value={20}>Twenty</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem>
								</Select>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="default">
							Cancel
						</Button>
						<Button variant='contained' onClick={this.handleClose} color="primary">
							Add to List
						</Button>
					</DialogActions>
				</Dialog>
      </Fragment>
    )
  }
}

export default Create
