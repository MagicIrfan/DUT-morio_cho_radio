import Radio from './radio.jsx';
import Currentradio from './currentradio.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class ListeRadio extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {radio:null};
		this.selectradio = this.selectradio.bind(this);
	}

	selectradio(value)
	{
		this.setState({radio:value});
	}

	render() {
		const array = [];
		const radioactuel = this.state.radio;
		this.props.radios.map((radio,index) =>
						(
							array.push(<Radio key={radio.name} radio = {radio} onChange = {this.selectradio} current={radioactuel}/>)
						))
		return (
			<div>
				{ radioactuel == null ? <></> : <Currentradio radio = {radioactuel} />}
				<div className = "liste">
					{array}	
				</div>	
			</div>
		);
	}
}
export default ListeRadio;