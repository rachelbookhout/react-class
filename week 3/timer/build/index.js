class PomodoroTimer extends React.Component {

  constructor() {
    super();
    this.state = { timeElapsed: 0 };
  }

  totalTime(timeOne, timeTwo) {
    return timeOne + timeTwo;
  }

  componentDidMount() {
    this.interval = setInterval(this.elapseTime.bind(this), 1000);
    this.setState({ start: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  elapseTime() {
    var timeElapsed = Math.floor((new Date() - this.state.start) / 1000);
    this.setState({ timeElapsed: timeElapsed });
    // if time elapsed = 25 minutes => alert

    if (this.state.timeElapsed >= this.props.workingTime * 60) {
      clearInterval(this.interval);
      alert("Time for a break");
    }
  }
  render() {
    return React.createElement(
      "div",
      null,
      "This timer runs for ",
      this.props.workingTime,
      " minutes, followed by a rest of ",
      this.props.restingTime,
      " minutes.",
      React.createElement("br", null),
      "For a total time of ",
      this.totalTime(this.props.workingTime, this.props.restingTime),
      " minutes.",
      React.createElement("br", null),
      "There are ",
      this.state.timeElapsed,
      " seconds elapsed."
    );
  }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));