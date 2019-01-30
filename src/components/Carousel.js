import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class CarouselBanner extends Component {
    state = {  }
    render() {
        return (
            <Carousel loop={ true } selected={ 0 } showArrows={ true } showNav={ true } showThumbs={ false } >
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/7_1459343454_28227226_1366_500.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/6_1459343432_93225689_1366_500.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="http://www.treelanstairs.com.au/img/slide/temp/5_1459343404_10249869_1366_500.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
 
export default CarouselBanner;