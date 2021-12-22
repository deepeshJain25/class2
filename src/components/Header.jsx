import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Final Project</h1>
      <Link to="/" style={{marginRight: '30px'}}>Home</Link>
      <Link to="/keeper" style={{margin: '30px'}} >Keeper</Link>
      <Link to="/weather" style={{margin: '30px'}}>Weather</Link>
    </header>
  );
}

export default Header;
