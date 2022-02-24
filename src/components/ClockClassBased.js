import { Component } from 'react';

class ClockClassBased extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  componentDidMount() {
    // get data from somewhere
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // run some cleanup
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
export default ClockClassBased;
