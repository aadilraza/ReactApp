import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
class BootstrapNavigationBar extends Component
{
    render() 
    {
        return (  
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

  <Navbar.Brand><Link to="/">Home</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />

  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <NavLink  to="/ContactCard">Home 2</NavLink>
      <NavLink  to="/Home3">Home3</NavLink>
      <NavLink  to="/ContactCard">ContactCard</NavLink>
      <Nav.Link ><Link to="/Jokes">Jokes</Link></Nav.Link>
      <Nav.Link ><Link to="/StateAndEvent">StateAndEvent</Link></Nav.Link>
      <Nav.Link ><Link to="/ToDoList">ToDoList</Link></Nav.Link>
      <Nav.Link ><Link to="/Condition1">Condition1</Link></Nav.Link>
      <Nav.Link ><Link to="/Condition2">Condition2</Link></Nav.Link>
      <Nav.Link ><Link to="/LoginOrLogout">LoginOrLogout</Link></Nav.Link>
      <Nav.Link ><Link to="/API">API</Link></Nav.Link>
      <Nav.Link ><Link to="/Form1">Form1</Link></Nav.Link>
      <Nav.Link ><Link to="/Form2">Form2</Link></Nav.Link>
      <Nav.Link ><Link to="/BookForm">BookForm</Link></Nav.Link>
    </Nav> 
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default BootstrapNavigationBar;

