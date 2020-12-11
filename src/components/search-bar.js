import React, { Component } from 'react';
import axios from 'axios';


export default class SearchBar extends Component{
    constructor(){
        super()

        this.state = {
            location: '',
            data: [],
            selection: '',
            options: 'no'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        var location = this.state.location.replace(",", '')
        location = location.replace(" ", ',')
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=853c916256714b40961d9c523f5e2727&units=i`)
            .then(response => {
                this.setState({data: response.data.data[0]})
                // console.log(response)
                this.setState({options: 'yes'});
                this.passUp(this.state.data, this.state.data.lat, this.state.data.lon);
                })
            .catch(err => {console.log(err);
        });
        
        
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
      }

    

    passUp(location, lat, lon) {
        this.props.passUp(location, lat, lon);
        this.setState({ options: "no"})
    }

    render(){
        return(
            <div className = "search-and-results">
                <div className = "search-wrapper">
                        <div className = "search-input">                        
                            <input 
                                type="search"
                                name="location"
                                placeholder="Search Locations"
                                value = {this.state.location}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="search-button">
                            <button type="submit" onClick={() => this.handleSubmit()}>Search</button>
                        </div>

                        
                </div>


            </div>
        )
    }
}