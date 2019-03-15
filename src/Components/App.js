import React, { Fragment } from "react"
import { Header, Footer } from "./Layouts"
import Exercises from "./Exercises"
import { muscles, exercises } from '../store'

export default class App extends React.Component {
	state = {
		exercises,
		pageIndex: -1
	}

	getExercisesByMuscles(){
		return Object.entries(this.state.exercises.reduce((prev,now)=>{
			const { muscles } = now
			prev[muscles] = prev[muscles] ? [...prev[muscles], now] : [now]
			return prev
		},{}))
	}

	handlePage = pageIndex=>{
		this.setState({
			pageIndex
		})
	}

	render() {
		const { pageIndex } = this.state

		return (
			<Fragment>
				<Header />
				<Exercises
					pageIndex={pageIndex}
					exercises={this.getExercisesByMuscles()}
				/>
				<Footer
					muscles={muscles}
					pageIndex={pageIndex}
					onSelect={this.handlePage}
				/>
			</Fragment>
		)
	}
}
