import React from 'react';
import ReactDOM from 'react-dom';

class Image extends React.Component
{
	constructor(props)
	{
		super(props)
        this.state = {img : null}
	}

    componentDidMount() 
	{
		this.loadImage(this.props.img)
	}
	
	componentDidUpdate(prevProps) 
	{
		if(prevProps.img !== this.props.img) 
		{
		  this.loadImage(this.props.img)
		}
	}

	loadImage(name) {
		import(`./../assets/img/FRA_20200331/${name}`).then(image => {
			this.setState({ img: image.default })
		  })
	  }

	render() {
		return (
			<img width="100" height="100" src={this.state.img}/>
		);
	}
}
export default Image;