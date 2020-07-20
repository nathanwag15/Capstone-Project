import React, { Component } from 'react';
import axios from 'Axios';

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
    constructor(){
        super()

        this.state ={
            data: ''
        }

        this.componentDidMount = this.componentDidMount.bind(this)
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
                <img src={a01d} />
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

    componentDidMount() {
        axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${this.props.lat}&lon=${this.props.lon}&key=853c916256714b40961d9c523f5e2727&units=i`)
            .then(response => {
                console.log(response.data)
                this.setState({data: response.data})})
            .catch(err => {console.log(err);
        });
    }

    render(){
        if (this.state.data === ''){
            return(null)
        } else {
        return(
            <div>
                <div>
                    {this.state.data.data[0].high_temp}
                    {this.state.data.data[0].low_temp}
                    {this.iconSelector(this.state.data.data[0].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[1].high_temp}
                    {this.state.data.data[1].low_temp}
                    {this.iconSelector(this.state.data.data[1].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[2].high_temp}
                    {this.state.data.data[2].low_temp}
                    {this.iconSelector(this.state.data.data[2].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[3].high_temp}
                    {this.state.data.data[3].low_temp}
                    {this.iconSelector(this.state.data.data[3].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[4].high_temp}
                    {this.state.data.data[4].low_temp}
                    {this.iconSelector(this.state.data.data[4].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[5].high_temp}
                    {this.state.data.data[5].low_temp}
                    {this.iconSelector(this.state.data.data[5].weather.icon)}
                </div>
                <div>
                    {this.state.data.data[6].high_temp}
                    {this.state.data.data[6].low_temp}
                    {this.iconSelector(this.state.data.data[6].weather.icon)}
                </div>
                <div>
                    <div>
                        {this.state.data.data[7].high_temp}
                    </div>
                    {this.state.data.data[7].low_temp}
                    {this.iconSelector(this.state.data.data[7].weather.icon)}
                </div>
            </div>
        )}
    }
}