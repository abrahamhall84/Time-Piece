import React, { Component } from 'react';
import './styles/Header.css';
import logo from '.././logo.svg';

class Header extends Component {
  render() {
    return (
    
        <div className="App-header">
          <div className='HeaderInfo'>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Time Piece</h2>
          </div> 
        </div> 
   
    )
  }
}

export default Header