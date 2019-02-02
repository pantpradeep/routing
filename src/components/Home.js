import React, { Component } from 'react';
import CarouselBanner from "./Carousel";
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ReactCSSTransitionGroup transitionName = {{ enter: 'enter',
    enterActive: 'enterActive',
    leave: 'leave',
    leaveActive: 'leaveActive',
    appear: 'appear',
    appearActive: 'appearActive' }} transitionAppear = {true} transitionAppearTimeout = {1000} transitionEnter = {false} transitionLeave = {false}>
                    <CarouselBanner />
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup transitionName = "example" transitionAppear = {true} transitionAppearTimeout = {1500} transitionEnter = {false} transitionLeave = {false}>
                    <Desktop>
                        <div className="welcomeSection padding50">
                            <div className="container">
                                <h2>Section in Desktop</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </Desktop>
                </ReactCSSTransitionGroup>

                <ReactCSSTransitionGroup transitionName = "example" transitionAppear = {true} transitionAppearTimeout = {1500} transitionEnter = {false} transitionLeave = {false}>
                    <Tablet>
                        <div className="infoSection padding50">
                            <div className="container">
                                <h2>Section in Tablet</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </Tablet>
                </ReactCSSTransitionGroup>
                    <Mobile>
                        <div className="moreSection padding50">
                            <div className="container">
                                <h2>Section in Mobile</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </Mobile>
                    <Default>
                        <div className="moreSection-2 padding50">
                            <div className="container">
                                <h2>Section in Desktop and Tablet</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </Default>
                    <section className="padding50">
                        <div className="container">
                        <h2>Below content is based on media query.</h2>
                            <MediaQuery minDeviceWidth={700}>
                                {(matches) => {
                                if (matches) {
                                    return <div>Media query matches!</div>;
                                } else {
                                    return <div>Media query does not match!</div>;
                                }
                                }}
                            </MediaQuery>
                            
                        </div>
                    </section>
                </div>
         );
    }
}
 
export default Home;