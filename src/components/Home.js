import React, { Component } from 'react';
import CarouselBanner from "./Carousel";
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;
const Default = props => <Responsive {...props} minWidth={768} />;
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CarouselBanner />
                    <section className="container">
                        <Desktop>
                            <div className="p-3 m-2 bg-primary">
                                <h2>Section in Desktop</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </Desktop>
                        <Tablet> 
                            <div className="p-3 m-2 bg-secondary">
                                <h2>Section in Tablet</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </Tablet>
                        <Mobile>
                            <div className="p-3 m-2 bg-success">
                                <h2>Section in Mobile</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </Mobile>
                        <Default>
                            <div className="p-3 m-2 bg-info">
                                <h2>Section in Desktop and Tablet</h2>
                                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </Default>

                        <MediaQuery minDeviceWidth={700}>
                        {(matches) => {
                        if (matches) {
                            return <div>Media query matches!</div>;
                        } else {
                            return <div>Media query does not match!</div>;
                        }
                        }}
                    </MediaQuery>
                    </section>
                </div>
         );
    }
}
 
export default Home;