import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom';
export default props => {
  return (
    // Pass on our props
    <Menu width={ '13%' } {...props}>
      
      <Link to="/" className="menu-item"> Dashboard </Link>
      <Link to="/DisplayDepense" className="menu-item"> Afficher dépense</Link>
      <Link to="/DisplayRevenu" className="menu-item"> Afficher revenu</Link>
      <Link to="/DisplayBudget" className="menu-item"> Afficher budget</Link>

    </Menu>
  );
};