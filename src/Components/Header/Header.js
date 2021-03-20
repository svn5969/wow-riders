import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/logo.png';
const Header = () => {
    const [loggedinUser, setLoggedinUser] =useContext(UserContext);

console.log(loggedinUser);

    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="muted" variant="primary">
                <Navbar.Brand ><img style={{ height: "60px"}} src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/destination">Destination</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <Nav.Link href="/signin">
                        {loggedinUser.userName ?loggedinUser.userName:<button className="btn btn-primary btn-sm">Log In</button>}


      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;