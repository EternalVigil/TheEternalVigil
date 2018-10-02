import React, { Component } from 'react';
import './mainHero.css';

class mainHero extends Component {
	constructor(props) {
		super(props);
		this.state = { content: 'normal' };
		console.log('hero state: ' + this.state.content);
	}
	render () {
		return (
			<div className = 'mainHero'>
			</div>
			);
	}
}

export default mainHero;