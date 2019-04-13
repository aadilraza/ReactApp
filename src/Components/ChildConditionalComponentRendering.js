import React,{Component} from 'react'

class ChildConditionalComponentRendering extends Component
{
    constructor()
    {
        super()
    }
                          //Method 1
    // render()
    // {
    //     var html = "";
    //     if(this.props.isLoading)
    //     {
    //         html = "Loading...";
    //     }
    //     else
    //     {
    //         html = "Some Contional Rendering.";
    //     }
    //     return(
    //         <div id="child-conditional-component-rendering">
    //              <h1>{html}</h1>
    //         </div>
    //     )
    // }
                         //Method 2
    // render()
    // {
    //     if(this.props.isLoading)
    //     {
    //         return(
    //             <div id="child-conditional-component-rendering">
    //                   <h3>Loading...</h3>
    //             </div>
    //         )
    //     }
 
    //     return(
    //     <div id="child-conditional-component-rendering">
    //             <h3>Some Contional Rendering.</h3> 
    //     </div>)
    // }
                         //Method 3
    //  render()
    //  {
    //      debugger;
    //      return(
    //         // this.props.isLoading == true ?  <h3>Loading...</h3> : <h3>Some Contional Rendering.</h3> 
    //                             //OR
    //         this.props.isLoading ? <h3>Loading...</h3> : <h3>Some Contional Rendering.</h3> 
    //     )
    //  }
                            //Method 4 Depends on parent.
    render()
    {
        return(
           <h3>Some Contional Rendering.</h3>
       )
    }
}

export default ChildConditionalComponentRendering;