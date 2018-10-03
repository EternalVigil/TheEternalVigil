import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './mainHero.js';
import ContentColumns from './ContentColumns.js';
import AboutAuthor from './AboutAuthor.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <ContentColumns />
        <AboutAuthor />  
        <Footer />
      </div>
    );
  }
}

export default App;
