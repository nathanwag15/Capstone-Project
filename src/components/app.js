import React, { Component } from 'react';
import Navigation from './navigation';
import Content from './content';
import Forecasts from './forecast';

export default class App extends Component {  
  constructor(){
    super() 

    this.state = {
      lat: '',
      lon: ''
    }

    this.keyGetter = this.keyGetter.bind(this)
  }


  keyGetter(lat, lon) {
    this.setState({
      lat: lat,
      lon: lon})
      console.log(this.state.lat, this.state.lon)
  }

  renderForecasts(){
    if (this.state.lat === ''){
      return(null)
    } else {
      console.log("hello")
      return(
        <Forecasts lat = {this.state.lat} lon = {this.state.lon}/>
      )
    }
  }

  render() {
    return (
      <div className="app">         
        <Navigation />
        <Content passUp = {this.keyGetter}/>
        {this.renderForecasts()}
      </div>
    );
  }
}
