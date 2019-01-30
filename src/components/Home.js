import React, { Component } from 'react';
import CarouselBanner from "./Carousel";
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <CarouselBanner />
                <div className="container">
                    Home
                </div>
            </div>
         );
    }
}
 
export default Home;