import React, { Component } from 'react';
import * as model from './Model'

class Jokes extends Component {

  createJokes2 = () => {
    let table = [];
    model.jokesDetails.map(i => 
    {
      table.push( 
          <div key={"jokes-section-"+ i.id} id={"jokes-section-"+ i.id}> 
              <h3 style = {{display: !i.question && "none"}}> {i.question} </h3>
              <h3 style= {{ color: !i.question && "grey"}}>Answers: {i.punchline}</h3>
          </div> 
      );
    })
    return table
  }

  render() 
  { 
    return ( 
      <div className="jokes-section">
          {this.createJokes2()}
      </div>
     );   
  }
}

export default Jokes;

{/* { display: this.props.question ? "block": "none"} */}