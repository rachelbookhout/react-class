class PomodoroTimer extends React.Component {

  constructor(){
    super();
    this.state= {timeElapsed:0}
  }

  totalTime(timeOne, timeTwo){
    return timeOne + timeTwo
  }

  componentDidMount(){
    this.interval = setInterval(this.elapseTime.bind(this),1000);
    this.setState({start: new Date()});
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  elapseTime(){
    var timeElapsed = Math.floor((new Date() - this.state.start) /1000);
    this.setState({timeElapsed: timeElapsed});
    // if time elapsed = 25 minutes => alert

    if (this.state.timeElapsed >= this.props.workingTime * 60){
      clearInterval(this.interval);
      alert("Time for a break");
    }
  }
  render(){
    return(
      <div>This timer runs for {this.props.workingTime} minutes,
      followed by a rest of {this.props.restingTime} minutes.
      <br />For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.
      <br />There are {this.state.timeElapsed} seconds elapsed.</div>
      )
  }
}



ReactDOM.render(
  <PomodoroTimer workingTime ={25} restingTime= {5}/>,
  document.getElementById('app')
);
