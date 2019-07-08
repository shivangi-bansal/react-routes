import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router";


class Nav extends Component{
   render() {
  return (
    <nav class="men">
        <ul>
           <li><Link to={"/"}>Home</Link></li>
           <li> <Link to={"/contact"}>Contact</Link></li>
           <li> <Link to={"/about"}>About</Link></li>
           <li><Link to={"/signup"}> Sign Up</Link></li>
           <li><Link to={"/login"}>Login</Link></li>
        </ul>
    </nav>
  );
}
}
export default Nav;
