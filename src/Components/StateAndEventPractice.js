import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class StateAndEventPractice extends Component 
{
    constructor()
    {
        super(); //call parent contructor, so we have the instance of state.
        this.state = {
            count: 0 //set state as the initial point.
         }   
         this.MyCustomClick = this.MyCustomClick.bind(this)//Any time you creates method in which you use setState then you have to bind this method with the class. 
    }

    MyCustomClick()
    {
      //this.setState.count = ++; // Dont do this we dont tear apart the old state to get new one, instead use this.setState() to append the new state.
      this.setState(
          i => {//last verstion of state.
              return {
                  count: i.count + 1 //gets the previous value and adds a new one.
              }
          })
    }

    render()
    {
        return(
            <div id="state-and-event-practice">
               <h1>{this.state.count}</h1>
               <button onClick={this.MyCustomClick}>Click Here</button>
               <hr/>
               <ChildComponent count={this.state.count}/>
            </div>
            )  
    }
}

export default StateAndEventPractice;