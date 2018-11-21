import React, { Component } from 'react';
import Header from '../Header.js';
import Footer from '../Footer.js';


class DnD extends Component {
	render() {
		return (
			<div className = 'tabletopPage'>
			<Header />
			Start your Dungeons and Dragons campaign
			<Footer />
			</div>

			);
	}
}

export default DnD;