import React, { Component } from 'react';

import Header from '../Header.js';
import Hero from '../mainHero.js';
import ContentColumns from '../ContentColumns.js';
import AboutAuthor from '../AboutAuthor.js';
import Footer from '../Footer.js';

class Home extends Component {
	render () {
		console.log('I am home');
		return (
			<div className = 'App'>
				<Header />
        	</div>

			);
	}
}

export default Home;