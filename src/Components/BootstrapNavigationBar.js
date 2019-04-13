import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
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
      <Link to="/ContactCard" className="nav-link">Home 2</Link>
      <Link to="/Home3" className="nav-link">Home3</Link>
      <Link to="/ContactCard" className="nav-link">ContactCard</Link>
      <Link to="/Jokes" className="nav-link">Jokes</Link>
      <Link to="/StateAndEvent" className="nav-link">StateAndEvent</Link>
      <Link to="/ToDoList" className="nav-link">ToDoList</Link>
      <Link to="/Condition1" className="nav-link">Condition1</Link>
      <Link to="/Condition2" className="nav-link">Condition2</Link>
      <Link to="/LoginOrLogout" className="nav-link">LoginOrLogout</Link>
      <Link to="/API" className="nav-link">API</Link>
      <Link to="/Form1" className="nav-link">Form1</Link>
      <Link to="/Form2" className="nav-link">Form2</Link>
      <Link to="/BookForm" className="nav-link">BookForm</Link>
    </Nav> 
  </Navbar.Collapse>
</Navbar>
        );
    }
}

export default BootstrapNavigationBar;

