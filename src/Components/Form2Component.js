import React,{Component} from 'react'

class Form2Component extends Component
{
    constructor()
    {
        super();
        this.state = {
                firstName:"",
                lastName:"",
                isFriendly:false,
                gender:"",
                favColor:"blue",
                textArea:"Some Value"
        };
       this.eventHandler = this.eventHandler.bind(this);
    }
    
                        //Method 1.
    // eventHandler(event)
    //      this.setState(
    //          {
    //            [event.target.name]:event.target.value
    //          }
    //      );
    // }
                        //Method 2.
    // eventHandler(event)
    // {    
    //      const {name,value} = event.target;
    //      this.setState(
    //          {
    //              [name]:value
    //          }
    //      );
    // }
                        //Method 3.
    eventHandler(event)
    {    
         const {name,value,checked,type} = event.target;
         type === "checkbox" ? this.setState( {[name]:checked} ): this.setState({[name]:value});
         debugger;
    }
    onSubmitteventHandler(event)
    {    
         debugger;
       
    }
   
    render()
    {
        const styleObject = {display : this.state.gender.length > 0 ? "block":"none"};
        return (
            //name value should matches the state value.
                <form onSubmit={this.onSubmitteventHandler}>
                    {/* Textbox First Name */}
                    <input type="text" 
                    name="firstName" 
                    placeholder="Enter First Name" 
                    value={this.state.firstName} 
                    onChange={this.eventHandler}/>
                    <h3>First Name is {this.state.firstName}</h3> 
                    
                    
                    {/* Textbox Last Name */}
                    <br/>
                    <input type="text" 
                    name="lastName" 
                    placeholder="Enter Last Name"
                    value={this.state.lastName} 
                    onChange={this.eventHandler} />
                    <h3>Last Name is {this.state.lastName}</h3>            
                    

                     {/* TextArea*/}
                     <textarea name="textArea" 
                     value={this.state.textArea}   //value={"Some Value"} 
                     onChange={this.eventHandler}/>



                    {/* Checkbox*/}
                    <br/>
                    <label>Is Friendly</label>
                    <input 
                     type="checkbox" 
                     name="isFriendly"
                     onChange = {this.eventHandler}
                     checked={this.state.isFriendly} />


                     {/* Radio Button*/}
                    <br/>
                    <label>Male</label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        onChange = {this.eventHandler}
                        checked={this.state.gender == "male"} />
                        <br/>
                    <label>Female</label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        onChange = {this.eventHandler}
                        checked={this.state.gender == "female"} />
                        <br/>
                     
                    <h1 style={{display : this.state.gender.length > 0 ? "block":"none"}}>{this.state.gender}</h1>

                    {/* Dropdown Or Select Tag. */}
                    <br/>
                    <select name="favColor" onChange={this.eventHandler}>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                    </select>   

                    <h1>Your Favourite color is {this.state.favColor}</h1>
                    <button>Submit</button>  {/* By default if there is button in form then it acts like a submitt button */}
                </form>
            
        )
    }
}

export default Form2Component;