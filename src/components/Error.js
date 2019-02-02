import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                Error
                <p className={this.props.test}>test</p>
                <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {1000}
               transitionEnter = {false} transitionLeave = {false}>
					
               <h1>React Transition example</h1>
            </ReactCSSTransitionGroup>
            </div>
         );
    }
}
 
export default Error;