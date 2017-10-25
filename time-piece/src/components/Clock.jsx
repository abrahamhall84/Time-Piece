import React, { Component } from 'react'
import Digital from './Digital'
import Analog from './Analog'
import './styles/Clock.css';

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      type: true
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleClick() {
    // const date = this.state.date;
    // const active = this.state.active;
    // let newActive = active === 'Digital' ? 'Analog' : 'Digital' ;
    this.setState(prevState => ({
      type: !prevState.type,
      active: !prevState.active
    }));
  }

  render() {
    const date = this.state.date;
    //const active = this.state.active;
    return (
      <div className='Clock'>
        {/*<Digital date={this.state.date} /> passed down date info*/}
        {/*<div>{active === 'Digital' ? (<Digital date={this.state.date} />) : active === 'Analog' ? (<Analog date={this.state.date} />) : null}</div>{/*tyring to render Digital or Analog components*/}
        <div className='ClockFrame'>
          <div className='ClockType'>{this.state.active ? <Analog date={date} /> : <Digital date={date} />}</div>
          <br />
          <button className='ToggleButton' onClick={this.handleClick}>
            {this.state.type ? 'Analog' : 'Digital'}
          </button>
        </div>
      </div>
    );
  }  
}

export default Clock

// getInitialState() {
  //   return {
  //     active: 'Digital'
  //   }
  // }
  // handleDigitalClock() {
  //   this.setState({isDigital: true});
  // }
  // handleAnalogClock() {
  //   this.setState({isDigital: false});
  // }
  // handleChangeClock() {
  //   const isDigital = isDigital
  //   if(isDigital) {
  //     return <Digital isDigital={this.handleDigitalClock}/>
  //   } 
  //   return <Analog isDigital={this.handleAnalogClock} />
  // }

  
// <h2>It is {standardTime}.</h2>
// <h2>It is {militaryTime}.</h2> 

/*<h2>It is {this.state.time ? militaryTime : standardTime}.</h2>
    <button onClick={this.handleClick}>
    {this.state.toggle ? 'Military' : 'Standard'}
  </button>*/ 

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
    
//     let button = null;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Logout
//     </button>
//   );
// }



//   render () {
//     return (
//       <div>
//         <div className="clock-frame"></div>
//         <div className="digital-frame">{new Date().toLocaleTimeString()}</div>
//       </div>
//     );
//   }
// };



// constructor() {
//         super();
//         this.state = this.getDate();
//     }


//     getDate() {
//         var newDate = new Date();
//         var date = {};
//         date.hours = newDate.getHours();
//         date.minutes = newDate.getMinutes();
//         date.seconds = newDate.getSeconds();
//         return date;
//     }

//     updateDate() {
//         this.setState(this.getDate());
//     }
  

//     updateClock() {
//         let angleSeconds = (this.state.seconds * 60) / 10;      
//         let angleMinutes = this.state.minutes * 6;
//         let angleHours =  (this.state.hours  / 12) * 360;
//         document.getElementById('js-seconds').style.transform = "translate(-50%, -100%) rotate(" + angleSeconds + "deg)";
//         document.getElementById('js-minutes').style.transform = "translate(-50%, -100%) rotate(" +  angleMinutes + "deg)";
//         document.getElementById('js-hours').style.transform = "translate(-50%, -100%) rotate(" +  angleHours + "deg)";
//     }

//     componentDidMount() {
//         this.updateClock();
//         let timeInterval = setInterval(() => {
//             this.updateDate();
//             this.updateClock();
//         }, 1000);
//     }

//     componentWillUnmount() {
//         clearInterval(timeInterval);
//     }


//     render() {
//         return (
//           <div className="c-clock">
//             <div id ="js-hours" className="c-clock__tick c-clock__tick--hours"></div>
//             <div id ="js-minutes" className="c-clock__tick c-clock__tick--minutes"></div>
//             <div id ="js-seconds" className="c-clock__tick c-clock__tick--seconds"></div>
//           </div>
//         )
//     }
// }