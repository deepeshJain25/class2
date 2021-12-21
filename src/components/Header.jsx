import React from "react";
import '../styles.css'
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <h1>Final Project</h1>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/keeper">Keeper</Link>
    </header>
  );
}

export default Header;
