import React, { Component } from 'react';
import moment from "moment";

import a01d from "../../static/assets/images/icons/a01d.png";
import a01n from "../../static/assets/images/icons/a01n.png";
import a02d from "../../static/assets/images/icons/a02d.png";
import a02n from "../../static/assets/images/icons/a02n.png";
import a03d from "../../static/assets/images/icons/a03d.png";
import a03n from "../../static/assets/images/icons/a03n.png";
import a04d from "../../static/assets/images/icons/a04d.png";
import a04n from "../../static/assets/images/icons/a04n.png";
import a05d from "../../static/assets/images/icons/a05d.png";
import a05n from "../../static/assets/images/icons/a05n.png";
import a06d from "../../static/assets/images/icons/a06d.png";
import a06n from "../../static/assets/images/icons/a06n.png";
import c01d from "../../static/assets/images/icons/c01d.png";
import c01n from "../../static/assets/images/icons/c01n.png";
import c02d from "../../static/assets/images/icons/c02d.png";
import c02n from "../../static/assets/images/icons/c02n.png";
import c03d from "../../static/assets/images/icons/c03d.png";
import c03n from "../../static/assets/images/icons/c03n.png";
import c04d from "../../static/assets/images/icons/c04d.png";
import c04n from "../../static/assets/images/icons/c04n.png";
import d01d from "../../static/assets/images/icons/d01d.png";
import d01n from "../../static/assets/images/icons/d01n.png";
import d02d from "../../static/assets/images/icons/d02d.png";
import d02n from "../../static/assets/images/icons/d02n.png";
import d03n from "../../static/assets/images/icons/d03n.png";
import d03d from "../../static/assets/images/icons/d03d.png";
import f01d from "../../static/assets/images/icons/f01d.png";
import f01n from "../../static/assets/images/icons/f01n.png";
import r01d from "../../static/assets/images/icons/r01d.png";
import r01n from "../../static/assets/images/icons/r01n.png";
import r02d from "../../static/assets/images/icons/r02d.png";
import r02n from "../../static/assets/images/icons/r02n.png";
import r03d from "../../static/assets/images/icons/r03d.png";
import r03n from "../../static/assets/images/icons/r03n.png";
import r04d from "../../static/assets/images/icons/r04d.png";
import r04n from "../../static/assets/images/icons/r04n.png";
import r05d from "../../static/assets/images/icons/r05d.png";
import r05n from "../../static/assets/images/icons/r05n.png";
import r06d from "../../static/assets/images/icons/r06d.png";
import r06n from "../../static/assets/images/icons/r06n.png";
import s01d from "../../static/assets/images/icons/s01d.png";
import s01n from "../../static/assets/images/icons/s01n.png";
import s02d from "../../static/assets/images/icons/s02d.png";
import s02n from "../../static/assets/images/icons/s02n.png";
import s03d from "../../static/assets/images/icons/s03d.png";
import s03n from "../../static/assets/images/icons/s03n.png";
import s04d from "../../static/assets/images/icons/s04d.png";
import s04n from "../../static/assets/images/icons/s04n.png";
import s05n from "../../static/assets/images/icons/s05n.png";
import s05d from "../../static/assets/images/icons/s05d.png";
import s06d from "../../static/assets/images/icons/s06d.png";
import s06n from "../../static/assets/images/icons/s06n.png";
import t01d from "../../static/assets/images/icons/t01d.png";
import t01n from "../../static/assets/images/icons/t01n.png";
import t02d from "../../static/assets/images/icons/t02d.png";
import t02n from "../../static/assets/images/icons/t02n.png";
import t03d from "../../static/assets/images/icons/t03d.png";
import t03n from "../../static/assets/images/icons/t03n.png";
import t04d from "../../static/assets/images/icons/t04d.png";
import t04n from "../../static/assets/images/icons/t04n.png";
import t05n from "../../static/assets/images/icons/t05n.png";
import t05d from "../../static/assets/images/icons/t05d.png";
import u00d from "../../static/assets/images/icons/u00d.png";
import u00n from "../../static/assets/images/icons/u00n.png";


export default class Forecasts extends Component{
    constructor(props){
        super(props)

        this.state ={
            data: '',
            fourteen: 'no'
        }

    }
    
    iconSelector(code){
        
        
        if (code === "a01d"){
            return(
                <img src={a01d} />
            )
        } else if (code === "a01n"){
            return(
                <img src={a01n} />
            )
        } else if (code === "a02d"){
            return(
                <img src={a02d} />
            )
        } else if (code === "a02n"){
            return(
                <img src={a02n} />
            )
        } else if (code === "a03d"){
            return(
                <img src={a03d} />
            )
        } else if (code === "a03n"){
            return(
                <img src={a03n} />
            )
        } else if (code === "a04d"){
            return(
                <img src={a04d} />
            )
        }  else if (code === "a04n"){
            return(
                <img src={a04n} />
            )
        } else if (code === "a05d"){
            return(
                <img src={a05d} />
            )
        } else if (code === "a05n"){
            return(
                <img src={a05n} />
            )
        } else if (code === "a06d"){
            return(
                <img src={a06d} />
            )
        } else if (code === "a06n"){
            return(
                <img src={a06n} />
            )
        }  else if (code === "c01d"){
            return(
                <img src={c01d} />
            )
        }  else if (code === "c01n"){
            return(
                <img src={c01n} />
            )
        }  else if (code === "c02d"){
            return(
                <img src={c02d} />
            )
        } else if (code === "c02n"){
            return(
                <img src={c02n} />
            )
        } else if (code === "c03d"){
            return(
                <img src={c03d} />
            )
        } else if (code === "c03n"){
            return(
                <img src={c03n} />
            )
        } else if (code === "c04d"){
            return(
                <img src={c04d} />
            )
        } else if (code === "c04n"){
            return(
                <img src={c04n} />
            )
        } else if (code === "d01d"){
            return(
                <img src={d01d} />
            )
        } else if (code === "d01n"){
            return(
                <img src={d01n} />
            )
        } else if (code === "d02d"){
            return(
                <img src={d02d} />
            )
        } else if (code === "d02n"){
            return(
                <img src={d02n} />
            )
        } else if (code === "d03d"){
            return(
                <img src={d03d} />
            )
        } else if (code === "d03n"){
            return(
                <img src={d03n} />
            )
        } else if (code === "f01d"){
            return(
                <img src={f01d} />
            )
        } else if (code === "f01n"){
            return(
                <img src={f01n} />
            )
        } else if (code === "r01d"){
            return(
                <img src={r01d} />
            )
        } else if (code === "r01n"){
            return(
                <img src={r01n} />
            )
        } else if (code === "r02d"){
            return(
                <img src={r02d} />
            )
        } else if (code === "r02n"){
            return(
                <img src={r02n} />
            )
        } else if (code === "r03d"){
            return(
                <img src={r03d} />
            )
        } else if (code === "r03n"){
            return(
                <img src={r03n} />
            )
        } else if (code === "r04d"){
            return(
                <img src={r04d} />
            )
        } else if (code === "r04n"){
            return(
                <img src={r04n} />
            )
        } else if (code === "r05d"){
            return(
                <img src={r05d} />
            )
        } else if (code === "r05n"){
            return(
                <img src={r05n} />
            )
        } else if (code === "r06d"){
            return(
                <img src={r06d} />
            )
        } else if (code === "r06n"){
            return(
                <img src={r06n} />
            )
        } else if (code === "s01d"){
            return(
                <img src={s01d} />
            )
        } else if (code === "s01n"){
            return(
                <img src={s01n} />
            )
        } else if (code === "s02d"){
            return(
                <img src={s02d} />
            )
        } else if (code === "s02n"){
            return(
                <img src={s02n} />
            )
        } else if (code === "s03d"){
            return(
                <img src={s03d} />
            )
        } else if (code === "s03n"){
            return(
                <img src={s03n} />
            )
        } else if (code === "s04d"){
            return(
                <img src={s04d} />
            )
        } else if (code === "s04n"){
            return(
                <img src={s04n} />
            )
        } else if (code === "s05d"){
            return(
                <img src={s05d} />
            )
        } else if (code === "s05n"){
            return(
                <img src={s05n} />
            )
        } else if (code === "s06d"){
            return(
                <img src={s06d} />
            )
        } else if (code === "s06n"){
            return(
                <img src={s06n} />
            )
        } else if (code === "t01d"){
            return(
                <img src={t01d} />
            )
        } else if (code === "t01n"){
            return(
                <img src={t01n} />
            )
        } else if (code === "t02d"){
            return(
                <img src={t02d} />
            )
        } else if (code === "t02n"){
            return(
                <img src={t02n} />
            )
        } else if (code === "t03d"){
            return(
                <img src={t03d} />
            )
        } else if (code === "t03n"){
            return(
                <img src={t03n} />
            )
        } else if (code === "t04d"){
            return(
                <img src={t04d} />
            )
        } else if (code === "t04n"){
            return(
                <img src={t04n} />
            )
        } else if (code === "t05d"){
            return(
                <img src={t05d} />
            )
        } else if (code === "t05n"){
            return(
                <img src={t05n} />
            )
        } else if (code === "u00d"){
            return(
                <img src={u00d} />
            )
        } else if (code === "u00n"){
            return(
                <img src={u00n} />
            )
        } 
        
    }

    

    forecastGenerator(number) {     
        var date = moment().add(number, 'days').calendar();
        date = date.split(" ")
        date = date[0]
        return(      
                <div className="forecast-day">
                        <div className="date">
                            {date}
                        </div>
                        <div className="forecast-icon">
                            {this.iconSelector(this.props.forecast.data[number].weather.icon)}                            
                        </div>
                        <div className="forecast-description">
                            {this.props.forecast.data[number].weather.description}
                        </div>
                        <div className="temp-wrapper">
                            <div className="temp-title">
                                Avg. Temp
                            </div>
                            <div className="temp">
                                {this.props.forecast.data[number].temp}
                            </div>
                        </div>
                </div>
        )

    }

     fourteenDay(){
        if (this.state.fourteen === 'no'){
            return(<button className="fourteen"onClick= {() => this.setState({fourteen: 'yes'})} >14 Day Forecast</button>)
        } else {
            return(
                <div className="forecast-wrapper">
                   {this.forecastGenerator(7)}
                   {this.forecastGenerator(8)}
                   {this.forecastGenerator(9)}
                   {this.forecastGenerator(10)}
                   {this.forecastGenerator(11)}
                   {this.forecastGenerator(12)}
                   {this.forecastGenerator(13)}
                </div>
            )
        }
         
     }



    

    render(){
        if (this.props.forecast === ''){
            return(null)
        } else {
            return(
                <div className="daily-forecast">
                    {/* <h1>Daily Forecast</h1> */}
                    <div className="forecast-wrapper">
                        {this.forecastGenerator(0)}
                        {this.forecastGenerator(1)}
                        {this.forecastGenerator(2)}
                        {this.forecastGenerator(3)}
                        {this.forecastGenerator(4)}
                        {this.forecastGenerator(5)}
                        {this.forecastGenerator(6)}
                    </div>
                    {this.fourteenDay()}
                </div>
        )}
    }
}