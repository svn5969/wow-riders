import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const Header = () => {
    const history = useHistory();

    function handleLoginButton(){
        history.push("/login")
    }
    return (
        <div>
             <nav>

<Link to="/home">Home</Link>
<br />

<Link to="/destination">Destination</Link>
<br />

<Link to="/blog">Blog</Link>
<br />
<Link to="/contract">Contract</Link>
<br/>

<button onClick={()=>handleLoginButton()} className="btn btn-success">Log In</button>

</nav>
        </div>
    );
};

export default Header;