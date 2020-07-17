import React, {Component} from 'react';
import axios from 'Axios'; 


export default class CurrentWeather extends Component{
    constructor(){
        super()

        this.state = {
            location: 'yes',
            data: '',
            img: 'a01d'
        }
        this.switchState = this.switchState.bind(this)
    }

    switchState(){
        this.setState({location: this.props.location})
        this.setState({img: this.props.location.weather.icon})
        console.log(this.state.location.state_code)
    }
    render() {
        if (this.props.location === 'yes') {
            return(null)
        } else {
            return(
                
                <div className ="weather-conditions">

                    

                    <div className = "current-conditions">
                        <div className="temperature">
                            {this.props.location.temp}
                        </div>
                        <div className="stats-wrapper">
                            <div className="other-stats">
                                <div className="stat">Wind</div>
                                <div className="stat">{this.props.location.weather.description}mph</div>
                            </div>
                            <div className="other-stats">
                                <div className="stat">Wind</div>
                                <div className="stat">{this.props.location.wind_spd}mph</div>
                            </div>
                            <div className="other-stats">
                                <div className="stat">RealFeel</div>
                                <div className="stat">200</div>
                            </div>
                            <div className="other-stats, bottom" >
                                <div className="stat">Air Quality</div>
                                <div className="stat">Poor</div>
                            </div>
                        </div>
                                    
                        
                        
                    </div>

                </div>)
         }
       
    }
}