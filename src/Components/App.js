import React, { Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from '../store'

export default class App extends React.Component {
	state = {
		exercises,
		item: {},
		pageIndex: -1
	}

	getExercisesByMuscles(){
		return Object.entries(this.state.exercises.reduce((prev,now)=>{
			const { muscles } = now
			prev[muscles] = prev[muscles] ? [...prev[muscles], now] : [now]
			return prev
		},{}))
	}

	handlePageSelected = pageIndex=>{
		pageIndex!==-1 && this.handleItemSelected()
		this.setState({
			pageIndex
		})
	}
	handleItemSelected = id=>{
		if(id){
			console.log(1)
			this.setState(({exercises})=>({
				item: exercises.find( ex=>ex.id===id )
			}))
		}else {
			this.setState({
				item: {
					title: 'Welcome!',
					description: 'Please select an exersice from the list on the left.'
				}
			})
		}
	}

	render() {
		const { pageIndex, item } = this.state

		return (
			<Fragment>
				<Header />
				<Exercises
					pageIndex={pageIndex}
					exercises={this.getExercisesByMuscles()}
					onSelect={this.handleItemSelected}
					item={item}
				/>
				<Footer
					muscles={muscles}
					pageIndex={pageIndex}
					onSelect={this.handlePageSelected}
				/>
			</Fragment>
		)
	}
}
