import Image from './image.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class Radio extends React.Component
{
	constructor(props)
	{
		super(props)
		this.ajouter = this.ajouter.bind(this);
	}
	
	ajouter(e) 
	{
		this.props.onChange(this.props.radio);
	}


	render() {
		return (
			<div className = "radio rounded" style={(this.props.current == this.props.radio) ? {background:'red'} : {background:'#8AE4FF'}} onClick={this.ajouter} >
				<Image img={this.props.radio.img}/>
				<p>{this.props.radio.name}</p>
            </div>

		);
	}
}
export default Radio;