import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"; 
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import StateDef from "./components/StateDef";
import Graphics from "./components/Graphics";
import 'bootstrap/dist/css/bootstrap.css';
import StatePage from "./components/StatePage";
import './css/main.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');



const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const NewRoute = () =>{
  return(
    <div>
      <p>New Route</p>
    </div>
  )
}

class App extends Component {

  /* for modal */
     constructor() {
        super();
     
        this.state = {
          modalIsOpen: false
        };
     
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }
     
      openModal() {
        this.setState({modalIsOpen: true});
      }
     
      afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
      }
     
      closeModal() {
        this.setState({modalIsOpen: false});
      }
      /* end modal */
  state = {
    tags: [
      {name: 'Home', url: '/'},
      {name: 'About', url: '/about'},
      {name: 'Contact', url: '/contact'}
      ]
  }; 

  // renderTags(){
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   const listItems = this.state.tags.map((tag,index) =>
  //   <li key={index}>
  //     <a href={tag.url}>{tag.name}</a>
  //   </li>
  // );
  //   return <ul>
  //           {listItems }
  //       </ul>
  // }
  render() {
    return ( 
        
          <BrowserRouter>
            <div>
          
            <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
              <Header />
            </ReactCSSTransitionGroup>
              { /* {this.renderTags()} */ }
              <Switch>
              <Route path="/" component={ Home } exact/>
              <Route path="/about" component={ About }/>
              <Route path="/contact" component={ Contact }/>
              <Route path="/gallery" component={ Gallery }/>
              <Route component={ Error } />
              </Switch>
              <StateDef test ="test"/>
              <Graphics/>
              <StatePage />
            </div>
          </BrowserRouter>
        
    );
  }
}

export default App;
