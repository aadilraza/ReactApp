import React, { Component } from 'react';
import * as model from './Model'

class ContactCard extends Component {

  createContactCard = () => {
    let contactDiv = [];
    model.ContactDetails.map(x => 
    {
      contactDiv.push( 
          <div key={"contact-card-"+ x.id} id={"contact-card-"+ x.id}> 
              <img src={x.imgUrl} alt={x.name}/>
              <h3>{x.name}</h3>
              <p>{x.phone}</p>
              <p>{x.email}</p>
          </div> 
      );
    })
    return contactDiv
  }


  render() 
  {  
    console.log(this.props);
    return (    
      <div className="contact-card"> 
           {this.createContactCard()}
      </div>
    );
  }
}

export default ContactCard;





///Method 1
// render() 
// {  
//   console.log(this.props);
//   return (    
//     <div className="contact-card"> 
//           <img src={this.props.contactDetails.imgUrl} alt={this.props.contactDetails.name}/>
//           <h3>{this.props.contactDetails.name}</h3>
//           <p>{this.props.contactDetails.phone}</p>
//           <p>{this.props.contactDetails.email}</p>
//     </div>
//   );
// }