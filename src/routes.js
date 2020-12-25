  
import React from 'react';
import {BrowserRouter,  Route,  Switch} from 'react-router-dom';

//import Welcome from '././components/Welcome/Welcome';
import Home from './App.js';
import Login from './component/Login.js'; 
//import Signup from '././components/Signup/Signup';
import NotFound from './App.js';


const Routes = () => (
  <BrowserRouter >
      <Switch>
          {/* <Route exact path="/" component={Welcome}/> */}
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/> 
          <Route path="*" component={NotFound}/>
      </Switch>
  </BrowserRouter>
);

export default Routes;