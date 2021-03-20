import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,Link
} from "react-router-dom";
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Destination from './Components/Destination/Destination';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { Nav, Navbar } from 'react-bootstrap';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import FinalDestination from './Components/FinalDestination/FinalDestination';
import SignIn from './Components/SignIn/SignIn';


export const UserContext = createContext();

function App(props) {

  const [loggedinUser, setLoggedinUser] = useState({});
  return (
    <UserContext.Provider value ={[loggedinUser, setLoggedinUser]}>
  <Router>
      <div>
      <Header></Header> 
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute >
          <PrivateRoute path="/finalDestination">
            <FinalDestination />
          </PrivateRoute >
         
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
