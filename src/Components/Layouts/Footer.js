import React from 'react'

//Components
import {
	Paper,
	Tabs,
	Tab
} from '@material-ui/core' 

export default ({muscles, onSelect, pageIndex})=>{
	const onIndexChange = (e, index)=>{
		onSelect(index===0 ? -1:index-1)
	}

	return<Paper>
			<Tabs
				indicatorColor="primary"
				textColor="primary"
				value={pageIndex+1}
				onChange={onIndexChange}
				centered
			>
				<Tab label='all' />
				{muscles.map( (val,index)=>(
					<Tab label={val} key={val} />        
				))}
			</Tabs>
		</Paper>
}
