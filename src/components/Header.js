import React, { Component } from 'react';
import logo from '../logo.svg'; 
import '../App.css';
import Navigation from "./Navigation";

class Header extends Component {
    state = {  }
    render() { 
        return (  
            <header className="clearfix">
                <div className="container">
                    <div className="float-left brand">
                        <a href="/"><img className="App-logo" src={ logo } alt=""/></a>
                    </div>
                    <div className="float-right navigation">
                    <Navigation />
                    </div>
                </div>
            </header> 
         );
    }
}
 
export default Header;