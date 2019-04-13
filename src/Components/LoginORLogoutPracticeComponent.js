import React,{Component} from 'react'

class LoginORLogoutPracticeComponent extends Component
{
    constructor()
    {
        super();
        this.state = {
                isLoggedIn:false
        };
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick()
    {
        this.setState( PreviosState => {
            return {
                isLoggedIn : !PreviosState.isLoggedIn
            }
        })
    }
           
    render()
    {
        const BtnText = this.state.isLoggedIn ? "Log Out": "Log In";
        const DisplayText = this.state.isLoggedIn ? "You are Logged In": "You are Logged Out";

        return (
            <div id="login-or-logout-practice-component">
                <h2>{DisplayText}</h2>
                <button onClick={this.handleClick}>{BtnText}</button> 
            </div>
        )
    }
}

export default LoginORLogoutPracticeComponent;