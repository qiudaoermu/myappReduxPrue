import React from 'react'


import './App.css'

export default class ChangeColor extends React.Component{
	render(){


		const {cclor,bgc,Ondecreament} = this.props
		return(
			<div className='Counter'>
				
					<div className='backgroundColor' style={{backgroundColor:bgc}}>
						
					</div>
					<div onClick ={cclor}>
						ChangeColor
					</div>
					
			</div>
			)
		




	}
}