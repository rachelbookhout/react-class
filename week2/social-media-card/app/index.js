var person = {
  name: 'Rachel Bookhout',
  location: 'Boston',
  occupation: {
    employer: '@DK'
  },
  photo: './images/chris-merica.png',
  updates: [
    {
      date: '2017/01/02',
      quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work'
    },
    {
      date: '2017/01/19',
      quote: 'It is never too late to be what you might have been'
    },
    {
      date: '2017/02/14',
      quote: 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, \'Who am I to be brilliant, gorgeous, talented, fabulous?\' Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won\'t feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It\'s not just in some of us; it\'s in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.'
    },
  ]
}
class Photo extends React.Component{
  render() {
    return(
       <div className="photo">
          <img src={this.props.image} alt="Photo" width="250px" height="225px"/>
        </div>
    )
  }
}

class Bio extends React.Component{
  render() {
    return(
      <div className="bio">
        <h1 className="name">{this.props.name}</h1>
        <h2 className="location">{this.props.location}</h2>
        <div className="occupation">
        <p>{this.props.occupation.title} at {this.props.occupation}</p>
        </div>
        </div>
    )
  }
}

class Updates extends React.Component{

  updates(){
    return this.props.updates.map(function(update,index){
      return (
          <li className="update" key={index}>
           <p className="date" key={index}>{update.date} </p>
          {update.quote}
          </li>
        )
    });
  }


  render() {
     return(
        <div className="updates">
         <ul>
         {this.updates()}
         </ul>
      </div>
     )
   }
 }

class Card extends React.Component {
  render() {
    return(
<div className="card">
      <Photo image={person.photo}/>
      <Bio name={person.name} location={person.location} occupation={person.occupation.employer} />
     <Updates updates={person.updates} />
     </div>
      )
  }
}


ReactDOM.render(<Card />, document.getElementById('app'));
