import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive';

class CarouselBanner extends Component {
    state = {  }
    render() {
        return (
            <Carousel loop={ true } selected={ 0 } showArrows={ true } showNav={ true } showThumbs={ false } autoPlay={ true } showStatus= { false }>
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                            <p><small>Hello, my name is Pradeep Pant and</small></p>
                            <h2 className="">I am front-end developer</h2>
                            <MediaQuery query="(min-device-width: 767px)">
                                <p><small>creating modern and responsive design for Web and Mobile</small></p>
                            </MediaQuery>
                            <p className="info">Used <strong>React JS, SASS, GULP and GIT</strong></p>
                            <div className="btns">
                            <a href="/about" className="btn btn-lg btn-primary">Learn More</a>
                            </div> 
                        </div>
                    </div>
                </div> 
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                            <h2 className="">Slide 2</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                        <h2 className="">Slide 3</h2>
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselBanner;