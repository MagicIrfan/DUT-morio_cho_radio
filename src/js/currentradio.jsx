import {Button} from 'react-bootstrap';
import Image from './image.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

class Currentradio extends React.Component
{
	constructor(props)
	{
		super(props)
		this.changeaudio = this.changeaudio.bind(this);
		this.noloading = this.noloading.bind(this);
        this.state = {play:false, finished:false};
		this.audio = React.createRef();
	}

	changeaudio()
	{
		this.setState((state) => ({play:!state.play}));
		(this.state.play) ? this.audio.current.play() : this.audio.current.pause();
	}

	noloading()
	{
		this.setState((state) => ({finished:!state.finished}))
	}

	componentDidUpdate(prevProps)
	{
		if(prevProps.radio != this.props.radio)
		{
			this.setState((state)=> ({finished:false,play:false}))
		}
	}


	render() {
		const tags = [];
		this.props.radio.tags.map((e,index) => tags.push(<p key={e} className="tagname rounded" >{e}</p>));
		return (
			<div className = "currentradio rounded">
				<Image img={this.props.radio.img}/>
                <p>{this.props.radio.name}</p>
				{tags}	
				<audio ref={this.audio}
						autoPlay={true}
						onCanPlayThrough={this.noloading}
						src={this.props.radio.url}
						>
						
				</audio>
				{this.state.finished ? <Button variant="dark" onClick={this.changeaudio} className = "btn btn-outline-info music"> {(this.state.play) ? 'Play' : 'Pause' }</Button> : <p>Loading</p>}
				<br/>
			</div>

		);
	}
}
export default Currentradio;