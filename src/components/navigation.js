import React, { Component } from 'react';
import Auth from "./auth";

export default class Navigation extends Component{

handleClick(){
    return(
        <div>
            <Auth />
        </div>
    )
}

render(){
    return(
        <div className="navigation-wrapper">
            <div className="navigation-links">
                <div>Menu</div>
                <div>
                    <Auth />
                </div>  
            </div>          
        </div>
    )
}

}