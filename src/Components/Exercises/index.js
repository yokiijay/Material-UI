import React from "react"
import { withStyles } from '@material-ui/core/styles'

//Components
import {
	Grid,
	Paper,
	List,
	ListSubheader,
	ListItem,
	ListItemText,
	Typography
} from '@material-ui/core'

// Theme
const styles = theme => ({
	paper: {
		padding: theme.spacing.unit * 4,
		color: theme.palette.text.secondary,
		height: '500px',
		overflow: 'auto'
	},
	list: {
		paddingBottom: '20px'
	},
	type: {
		textTransform: 'capitalize'
	}
})


// Main
const Exercises = ({
	exercises,
	pageIndex,
	onSelect,
	item: {
		id,
		title = 'Welcome!',
		description = 'Please select an exersice from the list on the left.'
	},
	...props
}) =>
	<Grid container justify='center' spacing={16}>
		<Grid item xs>
			<Paper className={props.classes.paper} >
				{
					pageIndex === -1 
					? // 首页
					exercises.map( ([group, exercises],index)=>(
						<List
							key={group}
							component='nav'
							subheader={ <ListSubheader component='div'>{group}</ListSubheader> }
							className={props.classes.list}
						>
							{exercises.map(({id, title})=>(
								<ListItem
									key={id}
									button
									onClick={()=>onSelect(id)}
								>
									<ListItemText primaryTypographyProps={{variant: 'headline'}} primary={title} />
								</ListItem>
							))}
						</List>
					))
					: // 不是首页
					<List
						key={exercises[pageIndex][0]}
						component='nav'
						subheader={ <ListSubheader component='div'>{exercises[pageIndex][0]}</ListSubheader> }
						className={props.classes.list}
					>
						{exercises[pageIndex][1].map(({id, title})=>(
							<ListItem
								key={id}
								button
								onClick={()=>onSelect(id)}
							>
								<ListItemText primaryTypographyProps={{variant: 'headline'}} primary={title} />
							</ListItem>
						))}
					</List>
				}
			</Paper>
		</Grid>
		<Grid item xs>
			<Paper className={props.classes.paper} >
				<Typography
					variant='display1'
				>
					{title}
				</Typography>
				<Typography
					variant='subheading'
					style={{marginTop: 20}}
				>
					{description}
				</Typography>
			</Paper>
		</Grid>
	</Grid>

export default withStyles(styles)(Exercises)
