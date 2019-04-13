import React,{Component} from 'react';

class ChildComponent extends Component
{
    render()
    {
        return(
            <div id="child-component">
                <h3>{this.props.count}</h3>
            </div>
        )
    }
}

export default ChildComponent