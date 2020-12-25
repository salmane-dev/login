  
import React,  {Component, useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../styles/styles.css';
//import {PostData} from '../../services/PostData';


class Login extends Component {

    constructor(){
    super();
      this.state = {
       username: '',
       password: '',
       redirectToReferrer: false
      };

      this.state = {
        LoginMessage: ''
      };
      
      this.loginfn = this.loginfn.bind(this);
      this.login = this.login.bind(this);
      this.onChange = this.onChange.bind(this);
    }
    
    
    //"http://dev.gmpanel.net:8085/api/v1/token/" 

    loginfn(username, pass) { 
      let BaseURL = 'https://cors-anywhere.herokuapp.com/http://dev.gmpanel.net:8085/api/v1/token/';
      return new Promise((resolve, reject) =>{
    
        const data = new FormData();
        data.append("username", username);
        data.append("password", pass);
        fetch(BaseURL, {
            method: "POST",
            headers: { 
            },
            //mode: "no-cors",
            body:data
        }).then((response) => response.json())
          .then((res) => {
          resolve(res);
        })
          .catch((error) => {
          reject(error);
        });
      });
    }
  
    login(e) {
      e.preventDefault();
      if(this.state.username && this.state.password){
      
        this.loginfn(this.state.username, this.state.password).then((result) => {
         let responseJson = result;
         if(responseJson){
          sessionStorage.setItem('userData',JSON.stringify(responseJson.user));
          sessionStorage.setItem('Token',JSON.stringify(responseJson.token));
          this.setState({LoginMessage:'Welcome'})
          this.setState({redirectToReferrer: true});
         }
         else{
        this.setState({LoginMessage:'Something wrong '})
         console.log('OUT')
         }
        });

        // const res = this.loginfn(this.state.username, this.state.password)
        // console.log(this.loginfn(this.state.username, this.state.password))

      }
      
     }
  
    onChange(e){
      this.setState({[e.target.name]:e.target.value});
     }
    
  
    render() {
  
       if (this.state.redirectToReferrer) {
        return (<Redirect to={'/'}/>)
      }
     
      if(sessionStorage.getItem('userData')){
        return (<Redirect to={'/dashboard'}/>)
      }
  
       return (
        <div className="row" id="Body">
          <div className="medium-5 columns center">
          <h4>Login</h4>
              <form id={"MyForm"}>

              <label>Username</label>
              <input type="text" name="username" placeholder="Username" required onChange={this.onChange}/>
              <br></br>
              <label>Password</label>
              <input type="password" name="password"  placeholder="Password" required onChange={this.onChange}/>
              <input type="submit" className="button success" value="Login" onClick={this.login}/>
          {/* <a href="/signup">Registration</a> */}
          </form>

          </div>
            <h2>{ this.state.LoginMessage }</h2>
        </div>
      );
    }
  }
  
  export default Login;