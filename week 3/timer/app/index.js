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

    var timeElapsed = Math.floor((new Date() - this.state.start) /1000);
    var countdown = (this.props.workingTime * 60) - timeElapsed;
    var min = Math.floor(countdown / 60);
    var sec = Math.floor(countdown % 60);
     if (sec < 10){
      sec = '0' + sec.toString();
    }
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
          <div name='timeLeft'><h3>{this.state.counter}</h3></div>
          <hr className='soft' />
          <h3>Minutes Left</h3>
          <hr className='soft' />
          <span className='bottom_time'>{this.state.timeElapsed} seconds worked</span>
        </form>
      <p>This timer runs for {this.props.workingTime} minutes. When the time is up, rest for {this.props.restingTime} minutes.</p>
      <p>When you are ready to restart, click the alert and refresh!</p>
      </div>

      )
  }
}



ReactDOM.render(
  <PomodoroTimer workingTime ={25} restingTime= {5}/>,
  document.getElementById('app')
);
