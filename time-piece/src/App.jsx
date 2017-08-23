import React, { Component } from 'react'
import Header from './components/Header.jsx'
import Clock from './components/Clock'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Clock /> 
      </div>
    );
  }
}

export default App