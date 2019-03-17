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
	Select,
	OutlinedInput
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
	handleChange = name=>({ target: { value } })=>{
		this.setState({
			select: value,
			form: {
				...this.state.form,
				[name]: value
			}
		})
	}
	handleSubmit = ()=>{
		this.handleClose()
		this.props.onCreate({
			...this.state.form,
			id: this.state.form.title.toLocaleLowerCase().replace(/ /g, '-')
		})
	}

  render() {
		const { muscles, onCreate } = this.props
		console.log(this.state.form)
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
								label="Title"
								type="text"
								placeholder='write something'
								variant='outlined'
								fullWidth
								onChange={this.handleChange('title')}
							/>
							<TextField
								autoFocus
								margin="dense"
								label="Description"
								type="text"
								placeholder='write something'
								variant='outlined'
								fullWidth
								onChange={this.handleChange('description')}
							/>
							<FormControl style={{marginTop: 5}} variant='outlined' fullWidth autoComplete='off'>
								<Select
									value={this.state.form.muscles||'placeholder'}
									onChange={this.handleChange('muscles')}
									variant='outlined'
									input={ <OutlinedInput labelWidth={0} /> }
								>
									<MenuItem value='placeholder' disabled>Select an Muscle</MenuItem>
									{muscles.map((muscle,index)=>(
										<MenuItem key={muscle} value={muscle}>{muscle}</MenuItem>		
									))}
								</Select>
							</FormControl>
						</form>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color="default">
							Cancel
						</Button>
						<Button variant='contained' onClick={this.handleSubmit} color="primary">
							Add to List
						</Button>
					</DialogActions>
				</Dialog>
      </Fragment>
    )
  }
}

export default Create
