import React, { Component } from 'react'
import './styles/Analog.css'

class Analog extends Component {
  getHoursDeg() {
    return {transform: 'rotate(' + this.props.date.getHours() * 30 + 'deg)'}
  }
  getMinutesDeg() {
    return {transform: 'rotate(' + this.props.date.getMinutes() * 6 + 'deg)'}
  }
  getSecondsdeg() {
    return {transform: 'rotate(' + this.props.date.getSeconds() * 6 + 'deg)'} 
  }
  render() {
    return(
      <div className='AnalogClock'>
        <h1 className='AnalogTitle'>The Analog Clock</h1>
        <article className='clock'>
         
            <div className='hours-container'>
              <div className='hours' style={this.getHoursDeg()}></div>
            </div>
            <div className='minutes-containers'>
              <div className='minutes' style={this.getMinutesDeg()}></div>
            </div>
            <div className='seconds-containers'>
              <div className='seconds' style={this.getSecondsdeg()}></div>
            </div>
     
        </article>
      </div>
    );
  }
}

export default Analog




// TRIED WITH SVG DID NOT WORK WELL... 

// <svg id="clock" width='350' height='275'>
//           <circle id="face" cx="200" cy="200" r="100" stroke="black" stroke-width="5" fill="blue"/>
//           <g id="hands">
//             <rect id="hour" x="215" y="155" width="8" height="70" rx="2.5" ry="2.55" stroke="orange" transform={this.rotateHours()} />
//             <rect id="min" x="175" y="135" width="6" height="85" rx="2" ry="2" stroke="yellow" transform={this.rotateMinutes()} />
//             <rect id="sec" x="155" y="125" width="3" height="95" stroke="red" transform={this.rotateSeconds()} />
//           </g>
//           <g id="ticks">
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//             <rect />
//           </g>
//         </svg>





// getInitialState() {
  //   const seconds = this.props.date.getSeconds();
  //   const minutes = this.props.date.getMinutes();
  //   const hours = this.props.date.getHours();

  //   let hands = [
  //     {
  //       hand: 'hours',
  //       angle: (hours * 30) + (minutes / 2)
  //     },
  //     {
  //       hand: 'minutes',
  //       angle: (minutes * 6)
  //     },
  //     {
  //       hand: 'seconds',
  //       angle: (seconds * 6)
  //     }
  //   ]
  // }
  // getInitialState() {
  //   return this.extractTime(this.props.date);

  // }
  // componentDidMount() {

  // }
  // extractTime() {
  //   return {
  //     seconds: date.getSeconds(),
  //     minutes: date.getMinutes(),
  //     hours: date.getHours()
  //   }
  // }
  // setTime(date) {
  //   this.setProps(this.extractTime(date));
  // }

  // rotateSeconds() {
  //   return 'rotate(' + this.props.date.getSeconds() * 6 + ', 167, 168)'
  // }
  // rotateMinutes() {
  //   return 'rotate(' + this.props.date.getMinutes() * 6 + ', 132, 151)'
  // }
  // rotateHours() {
  //   return 'rotate(' + this.props.date.getHours() * 30 + ', 142, 143)'
  // }]
  // getHourHand() {

  // }
  // rotateHours() {
  //   return 'rotate(' + this.props.date.getHours() * 30 + 'deg)'
  // }
  // rotateMinutes() {
  //   return 'rotate(' + this.props.date.getMinutes() * 6 + 'deg)'
  // }
  // rotateSeconds() {
  //   return 'rotate(' + this.props.date.getSeconds() * 6 + 'deg)'
  // }

  // rotateHands() {
  //   for (let i = 0; i < hands.length; i++) {
  //     let elements = document.querySelectorAll('.' + hands[i].hand);
  //     for (let f = 0; f = elements.length; f++) {
  //       elements[f].style.webkitTransform = 'rotateZ(' + hands[i].angle + 'deg)';
  //       elements[f].style.transform = 'rotateZ(' + hands[i].angle + 'deg)';
  //       if (hands[i].hand === 'minutes') {
  //         elements[f].parentNode.setAttribute('data-second-angle', hands[i + 1].angle);
  //       }
  //     }
  //   }
  // }