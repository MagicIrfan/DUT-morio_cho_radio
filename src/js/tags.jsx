import Bootstrapcss from './../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { radios } from './radios-big.mjs';
import {Button} from 'react-bootstrap';

class Tags extends React.Component
{
	constructor(props)
	{
		super(props);
		this.deselect = this.deselect.bind(this);
        this.select = this.select.bind(this);
        this.change = this.change.bind(this);
	}

    change(e,index)
    {
        this.props.isSelected[index] = !this.props.isSelected[index]
        if (this.props.isSelected[index])
        {
            this.props.tag(e.target.textContent);
        }
        else
        {
            this.props.suppress(e.target.textContent);
        }
    }

    select(e)
    {
        this.getTags().map((tag,index) => this.props.isSelected[tag] = true);
        this.getTags().map((tag,index) => this.props.tag(tag));
    }

    deselect(e)
    {
        this.getTags().map((tag,index) => this.props.isSelected[tag] = false);
        this.props.deleteall();
    }

	getTags()
	{
		let tabtags = [];
		radios.list.map((radio) => radio.tags.map((tag) => tabtags.push(tag) ));
		return Array.from(new Set(tabtags)).sort();
	}
	
	render() {
		return (  
            <div>
                <Button variant="dark" onClick={this.select} className = "btn btn-outline-info seltag"> Sélectionner tous les tags </Button>
                <Button variant="dark" onClick={this.deselect} className = "btn btn-outline-info seltag deselec"> Désélectionner tous les tags </Button>
                <div className = "divtag">
                    {this.getTags().map((tag, index) => <Button key={tag} onClick={(e) => this.change(e,tag)} variant={this.props.isSelected[tag] ? 'light' : 'raised' }  className = "btn btn-outline-info tag" > {tag} </Button>)}
                </div>
            </div>
		);
	}
}
export default Tags;