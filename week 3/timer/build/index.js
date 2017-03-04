class PomodoroTimer extends React.Component {

  constructor() {
    super();
    this.state = { timeElapsed: 0, countdown: 1500, counter: 0 };
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
    var countdown = this.props.workingTime * 60 - timeElapsed;
    var min = Math.floor(countdown / 60);
    var sec = Math.floor(countdown % 60);
    if (sec < 10) {
      sec = '0' + sec.toString();
    }
    var counter = min + ':' + sec;
    this.setState({ timeElapsed: timeElapsed, countdown: countdown, counter: counter });

    if (this.state.timeElapsed >= this.props.workingTime * 60) {
      clearInterval(this.interval);
      alert("Time for a break");
    }
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'form',
        { className: 'countdown', name: 'countDown' },
        React.createElement(
          'div',
          { name: 'timeLeft' },
          React.createElement(
            'h3',
            null,
            this.state.counter
          )
        ),
        React.createElement('hr', { className: 'soft' }),
        React.createElement(
          'h3',
          null,
          'Minutes Left'
        ),
        React.createElement('hr', { className: 'soft' }),
        React.createElement(
          'span',
          { className: 'bottom_time' },
          this.state.timeElapsed,
          ' seconds worked'
        )
      ),
      React.createElement(
        'p',
        null,
        'This timer runs for ',
        this.props.workingTime,
        ' minutes. When the time is up, rest for ',
        this.props.restingTime,
        ' minutes.'
      ),
      React.createElement(
        'p',
        null,
        'When you are ready to restart, click the alert and refresh!'
      )
    );
  }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));