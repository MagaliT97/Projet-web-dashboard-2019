import React from "react";
import { slide as Menu } from "react-burger-menu";
import {Link} from 'react-router-dom';
export default props => {
  return (
    // Pass on our props
    <Menu width={ '13%' } {...props}>
      
      <Link to="/" className="menu-item"> Dashboard </Link>
      <Link to="/FormProject" className="menu-item"> Nouveau projet </Link>
      <Link to="/MyWallet" className="menu-item"> My wallet </Link>
      <Link to="/Sales" className="menu-item"> Sales </Link>

    </Menu>
  );
};