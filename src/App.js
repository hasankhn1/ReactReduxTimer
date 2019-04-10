import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
import { connect } from 'react-redux'
import { increment, decrement } from './actions/actions';
class App extends Component {
  constructor(props) {
    super()
  }

  componentDidMount() {
    
  }

  render() {
    const { timer } = this.props
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
              <h6>ACTIVE SESSION: MINUTES</h6>
            </div>

            <div id="clockdiv">
              <div>
                <span className="days">{moment().format('DD')}</span>
                <div className="smalltext">Days</div>
              </div>
              <div>
                <span className="hours">{moment().format('HH')}</span>
                <div className="smalltext">Hours</div>
              </div>
              <div>
                <span className="minutes">{moment().format('mm')}</span>
                <div className="smalltext">Minutes</div>
              </div>
              <div>
                <span className="seconds">{timer}</span>
                <div className="smalltext">Seconds</div>
              </div>
            </div>
          </div>
          <div className="clock-buttons">
            <ul>
              <li><button onClick={this.props.increment}>INCREASE</button></li>
              <li><button onClick={this.props.decrement}>DECREASE</button></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
  increment,
  decrement
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
