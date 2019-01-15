import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import FamousPerson from './components/FamousPerson/FamousPerson';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <br />
        <FamousPerson />
      </div>
    );
  }
}

export default App;
