import React, { Component } from 'react';
import ContactCard from './ContactCard';
import Jokes from './Jokes';
import StateAndEventPractice from './StateAndEventPractice';
import * as model from './Model'
import ToDoList from './ToDoList'
import ConditionalComponentRendering from './ConditionalComponentRendering'
import ConditionalComponentRendering2 from './ConditionalComponentRendering2';
import LoginORLogoutPracticeComponent from './LoginORLogoutPracticeComponent';
import ApiComponent from './ApiComponent'
import Form1Component from './Form1Component'
import Form2Component from './Form2Component'

          //  RoutingProcess
import { Route,Switch } from 'react-router-dom';
import Home1 from './Home1'
import Home2 from './Home2'
import Home3 from './Home3'
import BookForm from './BookForm'


class MainContent extends Component {

  constructor()
  {
       super();
       this.state = {
           toDoListState : model.ToDoList // Setting the initial value of state. 
       }
       this.handleChange = this.handleChange.bind(this);
  }

  CalculateTimeAndReturn(time)
  {
    var statement;

    var customStyle = {
        backgroundColor:"",
        fontSize:"",
        color:""
    };

    if(time < 12)
    {
      statement = "Good Morning";
      customStyle.backgroundColor = "Green";
      customStyle.fontSize = "26px";
      customStyle.color = "White";
    }
    else if(time > 12 && time < 16 )
    {
      statement = "Good Afternoon";
      customStyle = {backgroundColor:"Yellow", fontSize:"24px",color:"Blue"};
    }
    else
    {
      statement = "Good Evening";
      customStyle = {backgroundColor:"Blue", fontSize:"22px",color:"yellow"};
    }

    return { 
      customStyle: customStyle, 
      statement: statement
    }
  }

  handleChange(id)
  {
    this.setState( x => {
      const updatedToDoList = x.toDoListState.map( i => {
        if(i.id === id )
        {
          i.completion = !i.completion
        }
        return i
      })

      return { toDoListState:updatedToDoList }
    })
  }
  
  render() 
  {  
   var obj = this.CalculateTimeAndReturn(new Date().getHours());

  //const JokesComponentArray = model.jokesDetails.map(i => <Jokes key={i.id} jokesDetails={i}/>);
  //const ContactCardComponentArray = model.ContactDetails.map(i => <ContactCard key={i.id} contactDetails={i}/>);
  //const ToDoListComponentArray =  model.ToDoList.map( x => <ToDoList key={x.id} TodoListProps = {x} handleChangeProps = {this.handleChange}/> );
       
    return (    
      <main id="main">
         <h1 style={obj.customStyle}>This is Main Content, {obj.statement}</h1>
         <p>This is where the content will go.</p>
         <Switch>
              <Route exact path="/" component={Home1}/>
              <Route path="/Home2" component={Home2}/>
              <Route path="/Home3" component={Home3}/> 

              <Route path="/ContactCard" component={ContactCard}/>  
              <Route path="/Jokes" component={Jokes}/>
              <Route path='/ToDoList' 
               render={(props) => <ToDoList {...props} TodoListProps = {model.ToDoList} handleChangeProps = {this.handleChange} />} />

              <Route path="/StateAndEvent" component={StateAndEventPractice}/> 
              <Route path="/Condition1" component={ConditionalComponentRendering}/> 
              <Route path="/Condition2" component={ ConditionalComponentRendering2}/> 
              <Route path="/LoginOrLogout" component={LoginORLogoutPracticeComponent}/> 
              <Route path="/API" component={ApiComponent}/> 
              <Route path="/Form1" component={Form1Component}/> 
              <Route path="/Form2" component={Form2Component}/>    
              <Route path="/BookForm" component={BookForm}/>    
         </Switch>
      </main>
    );
  }
}

export default MainContent;

// Method 1 


// Method 2           
         


// Method 1 
 
// Method 2        
      


    

