import React,{Component} from 'react'
import ChildConditionalComponentRendering from './ChildConditionalComponentRendering'

class ConditionalComponentRendering extends Component
{
    constructor()
    {
        super();
        this.state = {
            isLoading: true
        }
    }

    componentDidMount(){//triggers when the component is rendered first time..
        debugger
        setTimeout( () =>
        {
            this.setState({isLoading : false})
        },2000);   // setTimeout(function , time);
    }//When ever the state changes the component renders it self.
    
                    //Method 1
    // render()
    // {
    //     return (
    //         <div id="conditional-component-rendering">
    //             <ChildConditionalComponentRendering isLoading={this.state.isLoading}/>
    //         </div>
    //     )
    // }
                    //Method 2
    render()
    {
        return (
            <div id="conditional-component-rendering">
                {this.state.isLoading ? <h1>Loading...</h1> :  <ChildConditionalComponentRendering isLoading={this.state.isLoading}/>}  
            </div>
        )
    }
}

export default ConditionalComponentRendering;