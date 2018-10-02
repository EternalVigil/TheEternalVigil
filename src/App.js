import React, { Component } from 'react';
import Header from './Header.js';
import Hero from './mainHero.js';
import aboutAuthor from './aboutAuthor.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <div className = 'newContent'>
          <div className = 'leftWindow' />
          <div className = 'middleWindow' />
          <div className = 'rightWindow' />
        </div>
        <aboutAuthor />  
        <Footer />
      </div>
    );
  }
}

export default App;
