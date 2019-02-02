import React, { Component } from 'react'; 
import Error from "./Error";
class StateDef extends Component {
    constructor(){
        super();
        this.state={
            cls :"test"
        }
        this.changeColor = this.changeColor.bind(this);
    }
    changeColor(){
        this.setState({cls:"retest"});
    }
    render() { 
        return ( 
            <div className="container">
               
                <button className="btn btn-success " onClick={this.changeColor}>Change State</button>
                <Error test={ this.state.cls }/>
            </div>
         );
    }
}
 
export default StateDef;