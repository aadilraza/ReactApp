import React,{Component} from 'react'

class ApiComponent extends Component
{
    constructor()
    {  
        super();
        this.state = {
                character:{},
                Isloading:true
        }
    }

    componentDidMount()
    {
       debugger;
       fetch('https://swapi.co/api/people/1')//chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security    ------Need to Disable cors for that example.
      .then(response => response.json())
      .then(d => {
            console.log(d);

            this.setState({ 
               character:d,
               Isloading:false
              })
        })
        .catch(function() {
            console.log("error")
        })
    }

    render()
    {
        const text = this.state.Isloading ? "Loading..." : this.state.character.name;
        return(
        <div id="api-component"> 
            <p>{text}</p>
        </div>
        )
    }
}
    
 
export default ApiComponent;