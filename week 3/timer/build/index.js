class PomodoroTimer extends React.Component {

  totalTime(timeOne, timeTwo) {
    return timeOne + timeTwo;
  }

  render() {
    return React.createElement(
      'div',
      null,
      'This timer runs for ',
      this.props.workingTime,
      ' minutes, followed by a rest of ',
      this.props.restingTime,
      ' minutes.',
      React.createElement('br', null),
      'For a total time of ',
      this.totalTime(this.props.workingTime, this.props.restingTime),
      ' minutes.',
      React.createElement('br', null),
      'There are 88 seconds elapsed.'
    );
  }
}

ReactDOM.render(React.createElement(PomodoroTimer, { workingTime: 25, restingTime: 5 }), document.getElementById('app'));