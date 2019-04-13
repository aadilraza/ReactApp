import React, { Component } from 'react';
import './style/Header.css';
// import Navigate from './Navigate';
import BootstrapNavigationBar  from './BootstrapNavigationBar';
class Header extends Component {
  render() 
  {
    return (
      <header>
      {/* <header className="App-header"> */}
          {/* <Navigate/> */}
          <BootstrapNavigationBar/>
      </header>
    );
  }
}

export default Header;