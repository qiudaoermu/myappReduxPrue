import React from 'react'


import './App.css'

export default class Counter extends React.Component{
	render(){


		const {Ondecreament,OnIncreament,value} = this.props
		return(
			<div className='Counter'>
				
					<div className='text'>
						{value}
					</div>
					<button onClick ={OnIncreament}>+</button>
					<button onClick = {Ondecreament}>-</button>
			</div>
			)
		




	}
}