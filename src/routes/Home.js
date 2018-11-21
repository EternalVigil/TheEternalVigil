import React, { Component } from 'react';

import Header from '../Header.js';
import Hero from '../mainHero.js';
import ContentColumns from '../ContentColumns.js';
import AboutAuthor from '../aboutAuthor.js';
import Footer from '../Footer.js';

import '../App.css';

class Home extends Component {
    render() {
        console.log('I am home');
        return (
            <div className = 'App'>
				<Header />
				<Hero />
				<ContentColumns />
				<AboutAuthor />
				<Footer />
        	</div>

        );
    }
}

export default Home;