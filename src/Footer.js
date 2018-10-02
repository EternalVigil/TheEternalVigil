import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
	render () {
		return (
				<div className = 'stickyFooter'>
					<h1>Hello from the feet</h1>
					<div className='footerNavLinks'> 
					<ul>
						<li>item 1</li>
						<li>item 2</li>
						<li>item n</li>
					</ul>
					</div>
				</div>
		);
	}
}

export default Footer;