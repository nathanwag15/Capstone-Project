import React, { Component } from 'react';
import SearchBar from './search-bar';
import CurrentWeather from './current-weather';

import background from "../../static/assets/images/weather-systems/rain.jpg";
import thunderstorms from "../../static/assets/images/weather-systems/thunderstorms.jpg";

export default class Content extends Component{
    constructor(){
        super()

        this.state = {
            location: 'yes',
            city: '',
            state: ''

        }

        this.keyGetter = this.keyGetter.bind(this)
    }

    keyGetter = (location) => {
        this.setState({location: location})
        console.log(location)
    }

    render(){
    return(
        <div className="content-wrapper" style={{backgroundImage: `url(${thunderstorms})`}}>
            <SearchBar passUp = {this.keyGetter}/>
            <CurrentWeather location = {this.state.location}/>
        </div>)
    }
}