import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './mainHero.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <div className = 'leftWindow' />
        <div className = 'middleWindow' />
        <div className = 'rightWindow' />  
        <Footer />
      </div>
    );
  }
}

export default App;
