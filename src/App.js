import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Destination from './Component/Destination/Destination';
import Blog from './Component/Blog/Blog';
import Contract from './Component/Contract/Contract';
import Login from './Component/Login/Login';
import Header from './Component/Header/Header';
import { createContext } from 'react';

function App() {
 const pageContext = createContext()
  return (
    <pageContext.Provider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
            <Header></Header>
            <Home></Home>
            </Route>

            <Route path="/home">
             <Home></Home>
            </Route>
            <Route path="/destination">
                <Destination></Destination>
            </Route>

            <Route path="/blog">
             <Blog></Blog>
            </Route>
            <Route path="/contract">
          <Contract></Contract>
            </Route>
            
            <Route path="/login">
          <Login></Login>
            </Route>

          


          </Switch>
        </div>
      </Router>
    </pageContext.Provider>
  );
}

export default App;
