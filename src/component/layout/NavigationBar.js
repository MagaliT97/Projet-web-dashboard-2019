import React from 'react'
import './../../css/NavigationBar.css'
import './../../css/SideBar.css'
import SideBar from "../SideBar";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl} from 'react-bootstrap'

const NavigationBar = () => {
    return(
        <div>
        <SideBar pageWrapId={"page-wrap"}/>
        <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="primary" variant="dark"> 
        <Navbar.Brand href="#home" className="text-dashboard">DashBoard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
            <Form inline>
                <FormControl type="text" placeholder="" className="mr-md-2" style={{ width: '15em'}} />
                <Button variant="outline-light">Rechercher</Button>
            </Form>
            </Nav>
            <i class="fas fa-user fa-2xl"></i>
            <Nav>
            <NavDropdown  alignRight title="Profil" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Se déconnecter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Aide</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
export default NavigationBar;