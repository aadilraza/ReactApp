import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class Home1 extends Component {
	constructor()
    {  
        super();
        this.state = {
              book:{},
              Isloading:true
        }
    }
	
	handleClick = () => {
       fetch('http://localhost:49582/api/AllBooks')//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security    ------Need to Disable cors for that example.
       .then(response => response.json())
       .then(d => {
            console.log(d);
			debugger;
			this.setState({ 
               book:d,
			   Isloading:false
              })
        })
        .catch(function() {
            console.log("error")	 
        })
  }
  
   createBookListText = () => {
	debugger;
    let array = [];
	if(this.state.Isloading == false)
	{
		this.state.book.map(i => 
		{
		  array.push( 
			  <div key={"book-section-"+ i.Id} id={"book-section-"+ i.Id}> 
				  <h3>BookName: {i.BookName}</h3>
			  </div> 
		  );
		});
	 return array;
	}
	else
	{
	 return <h3>Answers Home 1</h3>;
	}
  }

  render() 
  { 
    // const text = this.state.Isloading ? "Answers Home 1" : this.state.book.BookName;
    return (   
    <div id="books_details"> 
		 {this.createBookListText()}
       <Button variant="primary" onClick={this.handleClick}>CLick Here to call API</Button>
    </div>
     );   
  }
}

export default Home1;