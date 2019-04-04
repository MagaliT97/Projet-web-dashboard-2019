import React from 'react'
import './../../css/NavigationBar.css'
import './../../css/SideBar.css'
import SideBar from "../SideBar";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl,DropdownButton,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div>
        <SideBar pageWrapId={"page-wrap"}/>
        <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="primary" variant="dark"> 
       <Link to="/" >  <Navbar.Brand href="#home" className="text-dashboard">DashBoard </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
            <Form inline>
                <FormControl type="text" placeholder="" className="mr-md-2" style={{ width: '15em'}} />
                <Button variant="outline-light">Rechercher</Button>
            </Form>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Formulaire">
            <Dropdown.Item href="#/action-1"> <Link to="/FormDepenses" className="Formulaire-item">Ajout dépenses</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Link to="/FormRevenu">Ajout revenu </Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-3"> <Link to="/FormBudget">Ajout budget </Link></Dropdown.Item>
            </DropdownButton>
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