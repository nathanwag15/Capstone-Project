import React, { Component } from 'react';
import Auth from "./auth";

export default class Navigation extends Component{
    constructor(){
        super()

        this.state ={
            login: "no"
        }
    }
handle(){
    if (this.props.menu === "no"){
        this.props.getLocations("yes")
    } else if (this.props.menu === "yes")
        this.props.getLocations("no")

}

login(){
    if (this.state.login === "no"){
        return(
            <h2 onClick={() => this.setState({login: "yes"})}>Login</h2>
        )
    }
    else if (this.state.login === "yes" ){
        return(
            <Auth />
        )
    }
}

render(){
    return(
        <div className="navigation-wrapper">
            <div className="navigation-links">
                <div className="navigation-link">
                    <h2 onClick={() => this.handle()}>Menu</h2>
                </div>       
                <div className="navigation-link">        
                    {this.login()}
                </div> 
            </div>          
        </div>
    )
}

}