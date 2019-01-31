import React, { Component } from 'react';
import logo from '../logo.svg'; 
import '../App.css';
import Navigation from "./Navigation";
import MediaQuery from 'react-responsive';
import Responsive from 'react-responsive';
import Modal from 'react-modal';

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




class Header extends Component {
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
    state = {  }
    render() { 
        return (
            <div>
                <MediaQuery query="(min-device-width: 319px)">
                    <header className="clearfix">
                        <div className="container">
                            <div className="float-left brand">
                                <a href="/"><img className="App-logo" src={ logo } alt=""/></a>
                            </div>
                            <div className="float-right navigation">
                            <Navigation />
                            <button className="btn btn-success top-right" onClick={this.openModal}>Open Modal</button>
                            </div>
                        </div>
                    </header>
                </MediaQuery> 
                
                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 ref={subtitle => this.subtitle = subtitle}>React Modal</h2>
                        <button onClick={this.closeModal} className="close">close</button>
                    </div>
                    <div className="modal-body">
                        <div>
                            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </div>
                    </div>
                </div>
                </Modal>
                
            </div>
         );
    }
}
Modal.setAppElement('#root');
export default Header;