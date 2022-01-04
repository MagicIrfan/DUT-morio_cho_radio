import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component
{
	constructor(props)
	{
		super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {search:''};
	}

    handleChange(e)
    {
        e.preventDefault();
        this.setState({search:e.target.value});
    }

    handleSubmit(e)
    {
        this.props.onChange(this.state.search);
    }
	
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{backgroundColor: '#1a1a1a'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Morioh cho Radio !</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <input onChange={this.handleChange} className="form-control me-2 search" type="search" placeholder="Rechercher des radios" aria-label="Search"/>
                    <button onClick={this.handleSubmit} className="btn btn-outline-info" type="submit">Rechercher</button>
                </div>
            </nav>

		)
	}
}
export default NavBar;
