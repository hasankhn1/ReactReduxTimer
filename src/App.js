import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment, decrement } from './actions/actions';
import * as constants from './constants/appConstants';
import './App.css';
class App extends Component {
  state = {
    activeSession: 'SECONDS',
  }

  setActiveSession = (e) => {
    if (e.currentTarget.id === constants.DAYS) {
      this.setState({ activeSession: constants.DAYS_SESSION })
    }
    if (e.currentTarget.id === constants.HOURS) {
      this.setState({ activeSession: constants.HOURS_SESSION })
    }
    if (e.currentTarget.id === constants.MINUTES) {
      this.setState({ activeSession: constants.MINUTES_SESSION })
    }
    if (e.currentTarget.id === constants.SECONDS) {
      this.setState({ activeSession: constants.SECONDS_SESSION })
    }
  }

  render() {
    const { seconds, hours, minutes, days } = this.props;
    const { activeSession } = this.state
    return (
      <div className="bg-home">
        <div className="upper-heading">
          <h6>BOOK NAME</h6>
          <h1>Understanding Redux - 1</h1>
        </div>
        <div className="lower-body">
          <h6>TOTAL TIME SPENT ON THE PROJECT</h6>
          <div className="timer">
            <div className="clock-heading">
              <h6>ACTIVE SESSION: {activeSession}</h6>
            </div>

            <div id="clockdiv">
              <div id={constants.DAYS} onClick={this.setActiveSession}>
                <span className="days pointer">{days}</span>
              <div className="smalltext">Days</div>
            </div>
            <div id={constants.HOURS} onClick={this.setActiveSession}>
                <span className="hours pointer">{hours}</span>
            <div className="smalltext">Hours</div>
          </div>
          <div id={constants.MINUTES} onClick={this.setActiveSession}>
                <span className="minutes pointer">{minutes}</span>
          <div className="smalltext">Minutes</div>
        </div>
        <div id={constants.SECONDS} onClick={this.setActiveSession}>
          <span className="seconds pointer">{seconds}</span>
          <div className="smalltext">Seconds</div>
        </div>
      </div>
          </div >
      <div className="clock-buttons">
        <ul>
          <li><button onClick={() => this.props.increment({ activeSession })}>INCREASE</button></li>
          <li><button onClick={() => this.props.decrement({ activeSession })}>DECREASE</button></li>
        </ul>
      </div>
        </div >
      </div >
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
