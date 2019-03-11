import React from 'react'
import './../../css/NavigationBar.css'
import './../../css/SideBar.css'
import SideBar from "../SideBar";
import {Navbar,Nav,NavDropdown,Button,Form,FormControl,DropdownButton,Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return(
        <div>
        <SideBar pageWrapId={"page-wrap"} className="SideBar"/>
        <Navbar className="nav-bar" collapseOnSelect expand="lg" bg="primary" variant="dark"> 
       <Link to="/" >  <Navbar.Brand href="#home" className="text-dashboard">DashBoard </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" >
            <Form inline>
                <FormControl type="text" placeholder="" className="mr-md-2" style={{ width: '15em'}} />
                <Button variant="outline-light" className="buttonSearch">Rechercher</Button>
            </Form>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Formulaire">
            <Dropdown.Item href="#/action-1"> <Link to="/FormDepenses" className="Formulaire-item">Ajout dépenses</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-2"> <Link to="/FormRevenu">Ajout revenu </Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ajout catégorie</Dropdown.Item>
            </DropdownButton>

            
            <DropdownButton id="dropdown-basic-button" title="Menu" className="menu">
            <Dropdown.Item href="#/action-1.2"> <Link to="/PieChartCategory">PieChartCategory</Link></Dropdown.Item>
            <Dropdown.Item href="#/action-1.2"> <Link to="/GraphCurve">GraphCurve</Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-1.3"> <Link to="/PieChartBudget">PieChartBudget</Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-1.4"> <Link to="/ProgressBarComponent">ProgressBarComponent</Link> </Dropdown.Item>
            <Dropdown.Item href="#/action-1.6"> <Link to="/Calendrier">Calendrier</Link> </Dropdown.Item>           
            </DropdownButton>

        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
export default NavigationBar;