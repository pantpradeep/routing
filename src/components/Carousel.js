import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class CarouselBanner extends Component {
    state = {  }
    render() {
        return (
            <Carousel loop={ true } selected={ 0 } showArrows={ true } showNav={ true } showThumbs={ false } swipeable={ true }>
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                            <p><small>Hello, my name is Pradeep Pant and</small></p>
                            <h2 className="">I am front-end developer</h2>
                            <p><small>creating modern and responsive design for Web and Mobile</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                        </div>
                    </div>
                </div>
                <div>
                    <img src="http://checkyourprojects.com/design/banner.jpg" alt=""/>
                    <div className="legend">
                        <div className="container">
                        </div>
                    </div>
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselBanner;