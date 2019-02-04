import React, { Component } from 'react';
import PropPage from "./PropPage";
class StatePage extends Component {
    state = { 
        test:["stateBased"]       
        
     }
    render() { 
        return (  
            <div>
                <PropPage name={this.state.test}/>
            </div>
        );
    }
}
 
export default StatePage;