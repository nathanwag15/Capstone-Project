import React, { Component } from 'react';
import axios from 'Axios';


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

    handleSubmit(event) {
        event.preventDefault();
        var location = this.state.location.replace(",", '')
        location = location.replace(" ", ',')
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${location}&key=853c916256714b40961d9c523f5e2727&units=i`)
            .then(response => {this.setState({data: response.data.data[0]})})
            .catch(err => {console.log(err);
        });
        this.setState({
            options: 'yes'
        });
        this.passUp(this.state.data)
    }

    handleChange(){

        this.setState({
            [event.target.name]: event.target.value
        })
      }

    

    passUp(location) {
        this.props.passUp(location);
        this.setState({ options: "no"})
    }

    render(){
        return(
            <div className = "search-and-results">
                <div className = "search-wrapper">
                    <div className = "search-input">

                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="search"
                                name="location"
                                placeholder="Search Locations"
                                value = {this.state.location}
                                onChange={this.handleChange}
                            />
                            <div className="search-button">
                                <button type="submit">Search</button>
                            </div>
                        </form>

                        </div>
                </div>


            </div>
        )
    }
}