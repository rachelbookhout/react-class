var person = {
  name: 'Rachel Bookhout',
  location: 'Boston',
  occupation: {
    employer: '@DK'
  },
  photo: './images/chris-merica.png',
  updates: [{
    date: '2017/01/02',
    quote: 'I have not failed. I\'ve just found 10,000 ways that won\'t work'
  }, {
    date: '2017/01/19',
    quote: 'It is never too late to be what you might have been'
  }, {
    date: '2017/02/14',
    quote: 'Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness that most frightens us. We ask ourselves, \'Who am I to be brilliant, gorgeous, talented, fabulous?\' Actually, who are you not to be? You are a child of God. Your playing small does not serve the world. There is nothing enlightened about shrinking so that other people won\'t feel insecure around you. We are all meant to shine, as children do. We were born to make manifest the glory of God that is within us. It\'s not just in some of us; it\'s in everyone. And as we let our own light shine, we unconsciously give other people permission to do the same. As we are liberated from our own fear, our presence automatically liberates others.'
  }]
};
class Photo extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'photo' },
      React.createElement('img', { src: this.props.image, alt: 'Photo', width: '250px', height: '225px' })
    );
  }
}

class Bio extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'bio' },
      React.createElement(
        'h1',
        { className: 'name' },
        this.props.name
      ),
      React.createElement(
        'h2',
        { className: 'location' },
        this.props.location
      ),
      React.createElement(
        'div',
        { className: 'occupation' },
        React.createElement(
          'p',
          null,
          this.props.occupation.title,
          ' at ',
          this.props.occupation
        )
      )
    );
  }
}

class Updates extends React.Component {

  updates() {
    return this.props.updates.map(function (update, index) {
      return React.createElement(
        'li',
        { className: 'update', key: index },
        React.createElement(
          'p',
          { className: 'date', key: index },
          update.date,
          ' '
        ),
        update.quote
      );
    });
  }

  render() {
    return React.createElement(
      'div',
      { className: 'updates' },
      React.createElement(
        'ul',
        null,
        this.updates()
      )
    );
  }
}

class Card extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'card' },
      React.createElement(Photo, { image: person.photo }),
      React.createElement(Bio, { name: person.name, location: person.location, occupation: person.occupation.employer }),
      React.createElement(Updates, { updates: person.updates })
    );
  }
}

ReactDOM.render(React.createElement(Card, null), document.getElementById('app'));