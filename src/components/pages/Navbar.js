import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (

    <nav>
      <div className="logo">
        Json<span>App</span>
      </div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/addnote">AddNote</Link>
      </nav>
      
        
  );
}

export default Navbar;
