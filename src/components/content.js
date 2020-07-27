import React, { Component } from 'react';
import SearchBar from './search-bar';
import CurrentWeather from './current-weather';
import Cookies from "js-cookie";
import axios from "axios";

import standard from "../../static/assets/images/weather-systems/default.jpg";
import t01d from "../../static/assets/images/weather-systems/thunderstorm-with-light-rain.jpg";
import t02d from "../../static/assets/images/weather-systems/thunderstorm-with-rain.jpg";
import t03d from "../../static/assets/images/weather-systems/thunderstorm-with-heavy-rain.jpg";
import t04d from "../../static/assets/images/weather-systems/thunderstorm-with-light-drizzle.jpg";
import t05d from '../../static/assets/images/weather-systems/thunderstorm-with-hail.jpg';
import d01d from "../../static/assets/images/weather-systems/light-drizzle.jpg";
import d02d from "../../static/assets/images/weather-systems/drizzle.jpg";
import d03d from "../../static/assets/images/weather-systems/heavy-drizzle.jpg";
import r01d from "../../static/assets/images/weather-systems/light-rain.jpg";
import r02d from "../../static/assets/images/weather-systems/moderate-rain.jpg";
import r03d from "../../static/assets/images/weather-systems/heavy-rain.jpg";
import f01d from "../../static/assets/images/weather-systems/freezing-rain.jpg";
import r04d from "../../static/assets/images/weather-systems/light-shower-rain.jpg";
import r05d from "../../static/assets/images/weather-systems/light-shower-rain.jpg";
import r06d from "../../static/assets/images/weather-systems/heavy-shower-rain.jpg";
import s01d from "../../static/assets/images/weather-systems/light-snow.jpg.jpg";
import s02d from "../../static/assets/images/weather-systems/snow.jpg";
import s03d from "../../static/assets/images/weather-systems/heavy-snow.jpg";
import s04d from "../../static/assets/images/weather-systems/snow-rain.jpg";
import s05d from "../../static/assets/images/weather-systems/sleet.jpg";
import s06d from "../../static/assets/images/weather-systems/flurry.jpg";
import a01d from "../../static/assets/images/weather-systems/mist.jpg";
import a02d from "../../static/assets/images/weather-systems/smoke.jpg.jpg";
import a03d from "../../static/assets/images/weather-systems/haze.jpg";
import a04d from "../../static/assets/images/weather-systems/dust.jpg";
import a05d from "../../static/assets/images/weather-systems/fog.jpg";
import a06d from "../../static/assets/images/weather-systems/freezing-fog.jpg";
import c01d from "../../static/assets/images/weather-systems/clear-sky.jpg";
import c02d from "../../static/assets/images/weather-systems/few-clouds.jpg";
import c03d from "../../static/assets/images/weather-systems/broken-clouds.jpg";
import c04d from "../../static/assets/images/weather-systems/overcast-clouds.jpg";
import u00d from "../../static/assets/images/weather-systems/default.jpg";


export default class Content extends Component{
    constructor(){
        super()

        this.state = {
            location: 'yes',
            display: 'no',
            image: standard,
            lat: '',
            lon: ''

        }

        this.keyGetter = this.keyGetter.bind(this)
        this.renderCurrentWeather = this.renderCurrentWeather.bind(this)
    }

  

    passUp(lat, lon, location) {
        this.props.passUp(lat, lon, location);
    }

    keyGetter = (location, lat, lon) => {
        this.passUp(lat, lon, location)
    }

    renderCurrentWeather() {
        if (this.props.location !== ''){    
            return(                
            <div className="current-weather-wrapper">
                <CurrentWeather location = {this.props.location}/>
            </div>
            )
        }
    }

    renderLocation(){        
        if (this.props.location !== ""){
            return(                
            <div className ="city">
                <div className="name">
                    {this.props.location.city_name}  {this.props.location.state_code}
                </div>
                <div className="add">
                    <button onClick={() => this.handleAdd()}>ADD</button>
                </div>
            </div>
                )
        }
        
    }

    handleAdd(){
            const form = new FormData()
            form.append("location", this.props.location.city_name)
            form.append("lat", this.props.location.lat)
            form.append("lon", this.props.location.lon)
            form.append("username", Cookies.get("username"))
        
            fetch("http://127.0.0.1:5000/location/add", {
              method: "POST",
              body: form
            })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

   

    render(){
    return(
        <div className="content-wrapper" style={{backgroundImage: `url(${escape(this.props.code)})`}}>
            <SearchBar passUp = {this.keyGetter}/>
            {this.handleSubmit}
            {this.renderLocation() }
            {this.renderCurrentWeather()}
        </div>)
    }
}