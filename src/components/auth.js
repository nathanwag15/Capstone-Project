import React, { Component } from 'react';
import Cookies from "js-cookie";

import Login from "./login";
import Signup from "./signup";

export default class Auth extends Component {
   constructor(props) {
       super(props)

       if (Cookies.get("username")) {
        
       }

       this.state = {
           LoggedInStatus: "NOT_LOGGED_IN",
           authMethod: "login",
           usernameInput: "",
           passwordInput: "",
           passwordConfirmInput: "",
           errorMessage: "none"
       }

       this.handleClick = this.handleClick.bind(this)
       this.handleChange = this.handleChange.bind(this)
       this.handleSignup = this.handleSignup.bind(this)
       this.handleLogin = this.handleLogin.bind(this)
       this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this)
       this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this)
   }

   handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value,
            errorMessage: "none"
        })
    }

    handleSignup(event) {
        event.preventDefault()

        if (this.state.usernameInput === "" || this.state.passwordInput === "" || this.state.passwordConfirmInput === "") {
            this.setState({ errorMessage: "blank field" })
        }
        else if (this.state.passwordInput !== this.state.passwordConfirmInput) {
            this.setState({ errorMessage: "mismatched passwords" })
        }
        else {
            fetch ("http://127.0.0.1:5000/user/create", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    username: this.state.usernameInput,
                    password: this.state.passwordInput
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)

                if (data === "Username Taken") {
                    this.setState({ errorMessage: "username taken" })
                }
                else {
                    this.setState({ errorMessage: "none" })
                    Cookies.set("username", this.state.usernameInput)
                }
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMessage: "fetch error" })
            })
        }
   }

   handleLogin(event) {
       event.preventDefault()

       if (this.state.usernameInput === "" || this.state.passwordInput === "") {
           this.setState({ errorMessage: "blank field" })
       }
       else {
           fetch("http://127.0.0.1:5000/user/verification", {
               method: "POST",
               headers: { "content-type": "application/json" },
               body: JSON.stringify({
                   username: this.state.usernameInput,
                   password: this.state.passwordInput
               })
           })
           .then(response => response.json())
           .then(data => {
               console.log(data)

               if (data === "User NOT Verified") {
                   this.setState({ errorMessage: "not verified" })
               }
               else {
                   this.setState({ errorMessage: "none" })
                   Cookies.set("username", this.state.usernameInput)
                    console.log(this.state.usernameInput)
                    this.handleSuccessfulLogin()
               }
            })
           .catch(error => {
               console.log(error)
               this.setState({ errorMessage: "fetch error" })
            })
       }
   }

   handleClick() {
       this.setState({ 
           authMethod: this.state.authMethod === "login" ? "signup" : "login",
           errorMessage: "none",
           usernameInput: "",
           passwordInput: "",
           passwordConfirmInput: ""
        })
   }

   toggleLogin(){
       if (this.state.LoggedInStatus === "NOT_LOGGED_IN"){
           return(<div className='auth-wrapper'>
           {this.state.authMethod === "login" 
                ? <Login 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleLogin}
                    usernameInput={this.state.usernameInput}
                    passwordInput={this.state.passwordInput}
                    errorMessage={this.state.errorMessage}
                    handleClick={this.handleClick}
                /> 
                : <Signup 
                    handleChange={this.handleChange} 
                    handleSubmit={this.handleSignup}
                    usernameInput={this.state.usernameInput}
                    passwordInput={this.state.passwordInput}
                    passwordConfirmInput={this.state.passwordConfirmInput}
                    errorMessage={this.state.errorMessage}
                    handleClick={this.handleClick}
                />}
           
       </div>)
       } else if (this.state.LoggedInStatus=== "LOGGED_IN") {
           return(
           <div>
               {this.state.usernameInput}
               <p onClick={() => this.handleSuccessfulLogout()}>Logout</p>
           </div>
            )
       }
   }

   handleSuccessfulLogin(){
       this.setState({LoggedInStatus: "LOGGED_IN"})
   }

   handleSuccessfulLogout(){
       this.setState({LoggedInStatus: "NOT_LOGGED_IN"})
        Cookies.remove("username")
   }

   render() {
       return (
           <div>
               {this.toggleLogin()}
           </div>
           
       )
   }
}