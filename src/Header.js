import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='navMenu'>
	      <ul className='navLinks'>
	      	<li>Home</li>
	      	<li>Portfolio</li>
	      	<li>Projects</li>
	      	<li>DnD</li>
	      	<li>Tutorials</li>
	      </ul>
      </div>
    );
  }
}

export default Header;
