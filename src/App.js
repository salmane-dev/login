import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react'
import axios from 'axios';
import './App.css'; 
// import Routes from './routes.js';
import Login from './component/Login.js'; 



class App extends Component {
 
 
    login = (username, password) => {
        axios.post('http://dev.gmpanel.net:8085/api/v1/token/', {
            username,
            password
          })
          .then(res => {
            console.log(res.data)
            // res.data.id = uuid.v4();
            // this.setState({ todos: [...this.state.todos, res.data] });
          });
      };
 
 
 
 
 
    render() {
      return (
      
      
        <Router>
        <div className={"MyApp"}>
          <ul className={ "menu"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
   
          <Switch>
                  <Route exact path="/">
                  <div className="App">
                    <header className="App-header">
                      <h3>Login Form </h3>
                      <br></br>
                          <form action="http://dev.gmpanel.net:8085/api/v1/token/" method="post" >
                              <label htmlFor="username">Username:</label> 
                              <input type="text" id="username" name="username" autoComplete="true"  ></input><br></br>
                              <label htmlFor="password">Password:</label> 
                              <input type="password" id="password" name="password" autoComplete="false" ></input><br></br>
                              <input type="submit" value="Submit"></input>
                          </form>

                      {/*  <LoginForm login={this.login}/> */}

                    </header>
                  </div>
                  </Route>
                  <Route path="/login">
                          <Login/>
                  </Route>
                  <Route path="/dashboard">
                      <h2>Dashboard </h2>
                  </Route>
            </Switch>
                </div>
            </Router>
      );
    }
  }
  
  export default App;