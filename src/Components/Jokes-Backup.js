import React, { Component } from 'react';

class Jokes extends Component {
  render() 
  { 
    return (   
    <div className="jokes-section">
    {
        /* { display: this.props.question ? "block": "none"} */}
        <h3 style= {{ display: !this.props.jokesDetails.question && "none"}}>Question: {this.props.jokesDetails.question}</h3>
        <h3 style= {{ color: !this.props.jokesDetails.question && "grey"}}>Answers: {this.props.jokesDetails.punchline}</h3>
        <hr/>
    </div>
     );   
  }
}

export default Jokes;