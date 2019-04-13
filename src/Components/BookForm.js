import React,{Component} from 'react'
import {Button, Dropdown} from 'react-bootstrap'
class BookForm extends Component
{
    constructor() {
        super();
        this.state = {
            bookName:"",
            price:"",
            category:"",
            author:""
          };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }

      handleSubmit(event) 
      {
            // event.preventDefault();
            // const data = new FormData(event.target); 
            let data  = JSON.stringify({
                bookName:this.state.bookName,
                price:this.state.price,
                category:this.state.category,
                author:this.state.author,
                 });

        
            fetch('http://localhost:49582/api/InsertBook', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body:  data    
        });
    }


      handleChange(event) {
        const {name,value} = event.target;
        this.setState({[name]:value});
      }

    render()
    {
        return(
            <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                    <label htmlFor="bookName">Book Name:</label>
                    <input id="bookName" name="bookName" className="form-control" type="text" value={this.state.bookName} onChange = {this.handleChange} placeholder="Enter Book Name" />
            </div>
            <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input id="price" name="price" className="form-control" type="text" value={this.state.price} onChange = {this.handleChange} placeholder="Enter Price" />
            </div>
            <div className="form-group">
                    <label htmlFor="selectBook">Category:</label>
                    <select id="selectBook" name="category" className="form-control" onChange={this.handleChange} >
                        <option>Fiction</option>
                        <option>Biography</option>
                        <option>Novel</option>
                    </select>
            </div>
            <div className="form-group">
                <label htmlFor="author">Author:</label>
                <input id="author" name="author" type="text" className="form-control" value={this.state.author} onChange={this.handleChange} placeholder="Enter Author Name" />  
            </div>
             <Button type="submit" variant="secondary" size="sm">Submitt</Button> 
            </form>
        )
    }
}
    
 
export default BookForm;