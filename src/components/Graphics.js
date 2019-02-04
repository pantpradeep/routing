import React, { Component } from 'react';

const styles = {
    transition : "all 1s ease-out"
};
class Graphics extends Component {
    constructor(){
        super();
        this.state = {
            opacity: 1,
            scale: 1,
            background: 'red'
        };
        this.onHide = this.onHide.bind(this);
        this.onScale = this.onScale.bind(this);
    }

    onHide(){
        this.setState({
            opacity:0
        });
    }
    onScale(){
        this.setState({
            scale:this.state.scale > 1 ? 1 : 1.3
        });
    }
    render() { 
        return ( 
            <div className="container">
                <h2>Changing state example</h2>
                <div className="test1" style= {{...styles, opacity: this.state.opacity, transform: 'scale(' + this.state.scale + ')', backgroundColor: this.state.background}}>
                    test 
                </div>
                <button className="m-2 btn btn-danger btn-sm" onClick={this.onHide}>Hide green div</button>
                <button className="m-2 btn btn-success btn-sm" onClick={this.onScale}>Scale green div</button>
                
            </div>
         );
    }
}
 
export default Graphics;