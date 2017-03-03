class PomodoroTimer extends React.Component {

  constructor(){
    super();
    this.state= {timeElapsed:0, countdown:1500, counter:0}
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

    // minutes less than 10 shows as 1 ** FIX **
    var timeElapsed = Math.floor((new Date() - this.state.start) /1000);
    var countdown = 1500 - timeElapsed;
    var min = Math.floor(countdown / 60);
    var sec = Math.floor(countdown % 60);
    var counter = min + ':' + sec;
    this.setState({timeElapsed: timeElapsed, countdown: countdown, counter:counter});

    if (this.state.timeElapsed >= this.props.workingTime * 60){
      clearInterval(this.interval);
      alert("Time for a break");
    }
  }


  render(){
    return(
      <div>
        <form className='countdown' name='countDown'>
          <div name='daysLeft'><h3>{this.state.counter}</h3></div>
          <hr className='soft' />
          <h3>Minutes Left</h3>
          <hr className='soft' />
          <span className='bottom_time'>{this.state.timeElapsed} seconds worked</span>
        </form>
      <p>This timer runs for {this.props.workingTime} minutes followed by a rest of {this.props.restingTime} minutes.</p>
      <p>For a total time of {this.totalTime(this.props.workingTime, this.props.restingTime)} minutes.</p>
      </div>

      )
  }
}



ReactDOM.render(
  <PomodoroTimer workingTime ={25} restingTime= {5}/>,
  document.getElementById('app')
);
