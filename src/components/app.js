import React, { Component } from 'react';
import Navigation from './navigation';
import Content from './content';
import Forecasts from './forecast';
import HourlyForecast from './hourly-forecast';
import Cookies from "js-cookie";
import axios from 'axios';

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


export default class App extends Component {  
  constructor(){
    super() 

    this.state = {
      lat: '',
      lon: '',
      location: '',
      hourlyForecast: '',
      dailyForecast: '',
      forecast: "no",
      menu: "no",
      data: "",
      image: standard
    }

    this.keyGetter = this.keyGetter.bind(this)
    this.burger =this.burger.bind(this)
    this.getLocations =this.getLocations.bind(this)
    this.lookUp = this.lookUp.bind(this)
    this.hourlyForecast =this.hourlyForecast.bind(this)
    this.dailyForecast =this.dailyForecast.bind(this)
    this.currentConditions =this.currentConditions.bind(this)
    this.backgroundFunction = this.backgroundFunction.bind(this)
  }

  backgroundFunction() {
    const code = this.state.location.weather.code

    if (code === "200"){
        this.setState({image: t01d})
    } else if (code === "201"){
        this.setState({image: t02d})
    } else if (code === "202"){
        this.setState({image: t03d})
    } else if (code === "230"){
        this.setState({image: t04d})
    } else if (code === "231"){
        this.setState({image: t04d})
    } else if (code === "231"){
        this.setState({image: t04d})
    } else if (code === "232"){
        this.setState({image: t04d})
    } else if (code === "233"){
        this.setState({image: t05d})
    } else if (code === "300"){
        this.setState({image: d01d})
    } else if (code === "301"){
        this.setState({image: d02d})
    } else if (code === "302"){
        this.setState({image: d03d})
    } else if (code === "500"){
        this.setState({image: r01d})
    } else if (code === "501"){
        this.setState({image: r02d})
    } else if (code === "502"){
        this.setState({image: r03d})
    } else if (code === "511") {
        this.setState({image: f01d})
    } else if (code === "520") {
        this.setState({image: r04d})
    } else if (code === "521") {
        this.setState({image: r05d})
    } else if (code === "522") {
        this.setState({image: r06d})
    } else if (code === "600") {
        this.setState({image: s01d})
    } else if (code === "601") {
        this.setState({image: s02d})
    } else if (code === "602") {
        this.setState({image: s03d})
    } else if (code === "610") {
        this.setState({image: s04d})
    } else if (code === "611") {
        this.setState({image: s05d})
    } else if (code === "612") {
        this.setState({image: s05d})
    } else if (code === "621") {
        this.setState({image: s01d})
    } else if (code === "622") {
        this.setState({image: s02d})
    } else if (code === "623") {
        this.setState({image: s06d})
    } else if (code === "700") {
        this.setState({image: a01d})
    } else if (code === "711") {
        this.setState({image: a02d})
    } else if (code === "721") {
        this.setState({image: a03d})
    } else if (code === "731") {
        this.setState({image: a04d})
    } else if (code === "741") {
        this.setState({image: a05d})
    } else if (code === "751") {
        this.setState({image: a06d})
    } else if (code === "800") {
        this.setState({image: c01d})
    } else if (code === "801") {
        this.setState({image: c02d})
    } else if (code === "802") {
        this.setState({image: c02d})
    } else if (code === "803") {
        this.setState({image: c03d})
    } else if (code === "804") {
        this.setState({image: c04d})
    } else if (code === "900") {
        this.setState({image: u00d})
    }
}


  keyGetter(lat, lon, location) {
    this.setState({
      lat: lat,
      lon: lon,
      location: location,
      forecast: "yes"
      })
      this.hourlyForecast(lat, lon)
      this.dailyForecast(lat, lon)
      
  }



  renderForecasts(){
      return(   
        <div className="forecasts-wrapper">     
          <Forecasts forecast={this.state.hourlyForecast}/>
          <HourlyForecast  forecast={this.state.dailyForecast} />
        </div>
      )
  }

  getLocations(menu){
    axios.get(`https://frozen-mountain-91349.herokuapp.com/location/get/data/${Cookies.get("username")}`)
          .then(response => 
              {this.setState({data: response.data})
               console.log(this.state.data)
               this.setState({menu: menu})})
          .catch(error => console.log(error))

  }

  lookUp(lat, lon) {
    this.setState({forecast: "yes"})
    this.currentConditions(lat, lon)
  }

  currentConditions(lat, lon) {
        axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=853c916256714b40961d9c523f5e2727&units=i`)
            .then(response => {
                this.setState({location: response.data.data[0]})
                console.log(this.state.location)
                this.backgroundFunction()
                this.hourlyForecast(lat, lon)
                this.dailyForecast(lat, lon)
                this.setState({display: "yes"})
                })
            .catch(err => {console.log(err);
        });
    }

  hourlyForecast(lat, lon) {
    axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lon}&key=853c916256714b40961d9c523f5e2727&hours=48&unit=i`)
        .then(response => {
            this.setState({hourlyForecast: response.data})
            console.log(this.state.hourlyForecast)})
        .catch(err => {console.log(err);
    });
  }

  dailyForecast(lat, lon) {
    axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=853c916256714b40961d9c523f5e2727&units=i&days=14`)
        .then(response => {
            this.setState({dailyForecast: response.data})
            console.log(this.state.dailyForecast)})
        .catch(err => {console.log(err);
    });
  }


  

  burger(){
    const items = []
    if (this.state.menu === "yes"){
        const listItems = this.state.data.map((number) =>
      <h2 onClick= {() => this.lookUp(number.lat, number.lon)}>{number.location}</h2>);
        return(
                <div>
                  {listItems}
                </div>
        )
    } else if (this.state.menu === "no"){
      return(null)
    }
  }

  render() {
    return (
      <div className="app">         
        <Navigation  menu = {this.state.menu} getLocations = {this.getLocations}/>
        <div className="lower-part">
          <div className="menu-wrapper">
            {this.burger()}
          </div>
          <Content passUp = {this.keyGetter} location = {this.state.location} code = {this.state.image}/>
          {this.renderForecasts()}
        </div>
      </div>
    );
  }
}
