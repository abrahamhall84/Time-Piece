import React, { Component } from 'react'
import './styles/Digital.css'



class Digital extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
      time: !prevState.time
    }));
  }
  render() {
  {/*using props instead of state for date*/}
    const standardTime = this.props.date.toLocaleTimeString();
    const militaryTime = this.props.date.toLocaleTimeString('en-US', { hour12: false });
    let time: [standardTime, militaryTime];
    
    return(
      <div className='DigitalClock'>
        <h1 className='DigitalTitle'>The Digital Clock</h1>
        <h2>The time is:</h2>
        <h2 className='CurrentTime'>{this.state.time ? militaryTime : standardTime}</h2>
        <br />
        <br />
        <button onClick={this.handleClick}>
        {this.state.toggle ? 'Military' : 'Standard'}
        </button>
       </div>
    );
  }
}

export default Digital