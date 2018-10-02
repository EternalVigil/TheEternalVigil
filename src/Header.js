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
	      	<li>Home</li>
	      	<li>Portfolio</li>
	      	<li>Projects</li>
	      	<li>DnD</li>
	      	<li>Tutorials</li>
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
