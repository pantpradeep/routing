import React, { Component } from 'react';

class PropPage extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="container padding50">
            <div className={this.props.name}><h2>SASS Used in this section</h2></div>
            <div className="parent p-2">Lorem ipsum dolor sit amet</div>
            <div className="little-border p-8 m-5">
            <h3>Background color is inherited from above section using @extend</h3>
            <h3>And border is used by mixin</h3>
            <div className="marginBottom50">
            @mixin border-radius($radius) <br />
                -webkit-border-radius: $radius <br />
                -moz-border-radius: $radius <br />
                border-radius: $radius 
                </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
        </div> );
    }
}
 
export default PropPage;