import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';
import BootstrapNavigationBar from './Components/BootstrapNavigationBar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import {Container,Row,Col } from 'react-bootstrap';



class App extends Component {
  render() 
  {
    return (
      <div className="App">
      {/* <Header /> */}
      <BootstrapNavigationBar/>
      <Container>
          <Row>
            <Col>
            <MainContent/>
            </Col>
          </Row>
      </Container>
      <Footer/>
      </div> 
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import './App.css';

// import Header from './Components/Header';
// import MainContent from './Components/MainContent';
// import Footer from './Components/Footer';

// class App extends Component {
//   render() 
//   {
//     return (
//       <div className="App">
//         <Header />
//         <MainContent/>
//         <Footer/>
//       </div>
//     );
//   }
// }

// export default App;

