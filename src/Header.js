import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
constructor (props) {
	super(props);
	this.state = {isLoggedIn: false};
	console.log(this.state);
}

  render() {
    return (
      <div className='navMenu'>
	      <ul className='navLinks'>
	      	<a href='/'><li>Home</li></a>
	      	<a href='/portfolio'><li>Portfolio</li></a>
	      	<a href='/projects'><li>Projects</li></a>
	      	<a href='/dnd'><li>DnD</li></a>
	      	<a href='/tutorials'><li>Tutorials</li></a>
	      </ul>
	      <ul className = 'userLogin'>
	      	<li>Login</li>
	      	<li>Create Account</li>
	      </ul>
      </div>
    );
  }
}

export default Header;
