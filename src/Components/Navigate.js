import React, { Component } from 'react';
import './style/Navigate.css';
import { Link } from 'react-router-dom';

class Navigate extends Component {
    
  render() 
  {
    return (  
      <div className="topnav">
            <ul>
              <li><Link to="/">Home 1</Link></li>
              {/* <li><Link to="/Home2">Home 2</Link></li>
              <li><Link to="/Home3">Home 3</Link></li> */}
              <li><Link to="/ContactCard">Contact Card</Link></li>
              <li><Link to="/Jokes">Jokes</Link></li> 
              <li><Link to="/StateAndEvent">StateAndEvent</Link></li>
              <li><Link to="/ToDoList">To Do List</Link></li>
              <li><Link to="/Condition1">Condition 1</Link></li>
              <li><Link to="/Condition2">Condition 2</Link></li>
              <li><Link to="/LoginOrLogout">Login Or Logout</Link></li>
              <li><Link to="/API">API</Link></li>
              <li><Link to="/Form1">Form 1</Link></li>
              <li><Link to="/Form2">Form 2</Link></li>
            </ul>
        </div>
    );
  }
}

export default Navigate;