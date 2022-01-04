import ListeRadio from './listeradio.jsx';
import Tags from './tags.jsx';
import NavBar from './navbar.jsx';
import { radios } from './radios-big.mjs';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state = {tags:[], selected :[]};
		this.showTags = this.showTags.bind(this);
		this.suppress = this.suppress.bind(this);
		this.deleteall = this.deleteall.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(value)
	{
		let tab = [];
		let select = [];
		radios.list.map((radio) =>
		(
			radio.tags.map((tag2) =>
				{
					if (tag2.toLowerCase().includes(value.toLowerCase()))
					{
						tab.push(tag2)
						select[tag2] = true;								
					}
				}
		)))
		tab = Array.from(new Set(tab));
		this.setState({selected:select,tags : tab});
	}

	showTags(tag)
	{
		this.setState({tags:this.state.tags.push(tag.trim()), tags:Array.from(this.state.tags)});
	}

	suppress(tag)
	{
		this.setState({tags:this.state.tags.filter(function(v){return v !== tag.trim()})});
	}

	deleteall()
	{
		this.setState({tags:[]});
	}

	getRadios()
	{
		let radioss = []
		radios.list.map((radio) =>
		(
			this.state.tags.map((tag,index) =>
			(	
					radio.tags.map((tag2) =>
					{
						if (tag.trim()==tag2.trim())
						{
							radioss.push(radio)
						}										
					}	
				)
		))));
		return Array.from(new Set(radioss)).sort();		
	}

	render() {
		const select = this.state.selected;
		return (  
			<div>
				<NavBar onChange = {this.handleChange}/> 
				<div className = "container">
					<Tags tag={this.showTags} suppress={this.suppress} deleteall={this.deleteall} isSelected={select}/>
					{ (this.getRadios().length > 1) ? <h2>{this.getRadios().length} radios trouvées</h2> : <h2>{this.getRadios().length} radio trouvée</h2>}
					<ListeRadio tags = {this.state.tags} radios={this.getRadios()} />
				</div>
			</div>
		);
	}
}
export default App;