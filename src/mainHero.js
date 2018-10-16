import React, { Component } from 'react';
import './mainHero.css';
import sliderImages from './sliderImages.json';

class mainHero extends Component {
	constructor(props) {
		super(props);
		this.state = { content: 'normal' };
		console.log('hero state: ' + this.state.content);
	}

	componentDidMount () {
		console.log(sliderImages);
	}

	render () {
		return (
			<div className = 'mainHero'>
				<img className='heroBanner' src='https://www.strikeforcepest.com/wp-content/uploads/2014/01/Lightning-storm-banner-cropped.jpg' href='' alt='' title='There is a storm coming...' />
			</div>
			);
	}
}

export default mainHero;