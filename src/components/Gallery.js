import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
const photos = [
    {
      src: 'http://checkyourprojects.com/design/innerBanner.jpg',
      width: 4,
      height: 3
    },
    {
      src: 'http://checkyourprojects.com/design/innerBanner.jpg',
      width: 1,
      height: 1
    }
  ];
class GallerySection extends Component {
    state = {  }
    render() { 
        return (  
            <section className="padding50">
            <div className="container">
                <Gallery photos={photos} />
            </div>
            </section>
        );
    }
}
 
export default GallerySection;