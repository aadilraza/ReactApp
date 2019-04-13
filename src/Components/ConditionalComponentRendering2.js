import React,{Component} from 'react'

class ConditionalComponentRendering2 extends Component
{
    constructor()
    {
        super();
        this.state = {
            unReadMessages: [123,123]
        }
    }
    render()
    {
        return (
            <div id="conditional-component-rendering2">
                { 
                    // this.state.unReadMessages.length > 0 ? <h1>You have {this.state.unReadMessages.length} un read Messages.</h1> :  
                    // <h1>You have no unRead Messages.</h1>

                    // this.state.unReadMessages.length > 0 ? <h1>You have {this.state.unReadMessages.length} un read Messages.</h1> :  
                    // null

                    this.state.unReadMessages.length > 0 && <h1>You have {this.state.unReadMessages.length} un read Messages.</h1>
                }  
            </div>
        )
    }
}

export default ConditionalComponentRendering2;