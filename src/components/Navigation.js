import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
class Navigation extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item"><NavLink exact to="/" className="nav-link ">Home</NavLink></li>
                    <li className="nav-item" ><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    <li className="nav-item"><NavLink to="/gallery" className="nav-link">Gallery</NavLink></li>
                </ul>
            </div>
         );
    }
}
 
export default Navigation;