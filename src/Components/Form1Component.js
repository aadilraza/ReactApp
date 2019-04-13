import React,{Component} from 'react'

class Form1Component extends Component
{
    constructor()
    {
        super();
        this.state = {
                firstName:"",
                lastName:""
        };
       this.FirstInputeventHandler = this.FirstInputeventHandler.bind(this);
       this.SecondInputeventHandler = this.SecondInputeventHandler.bind(this);
    }

    FirstInputeventHandler(event)
    {    
         this.setState(
             {
                 firstName:event.target.value,
             }
         );
    }
    SecondInputeventHandler(event)
    {
        this.setState(
            {
                lastName:event.target.value,
            }
        );
    }

    render()
    {
        return (
            
                <form>
                    <input type="text" placeholder="Enter First Name" onChange={this.FirstInputeventHandler}/>
                    <h3>First Name is {this.state.firstName}</h3>
                    <br/>
                    <br/>
                    <input type="text" placeholder="Enter Last Name" onChange={this.SecondInputeventHandler}/>
                    <h3>Last Name is {this.state.lastName}</h3>
                </form>
            
        )
    }
}

export default Form1Component;