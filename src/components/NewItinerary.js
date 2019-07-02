import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NewItineraryForm from './NewItineraryForm';
import NotAllowed from './NotAllowed'; 
import '../styles/mytinerary.css';

export class NewItinerary extends Component {
  state = {
    modal: false
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  getClass = () => {
    if (this.props.location.pathname === "/" || this.props.location.pathname === "/LogIn" || this.props.location.pathname === "/SignUp" ) {
        return 'd-none'
      } else {
        return 'p-0 m-0 shadow handle rounded-circle d-flex align-items-center justify-content-center'
      }
  }
     
  render() {
    return (
      <React.Fragment>
        <Draggable
          axis="both"
          handle=".handle"
          // defaultPosition={dPosition}
          scale={1}
          bounds=".main"
          // onStart={this.handleStart}
          // onDrag={this.handleDrag}
          // onStop={this.handleSp}
          >
          <div style={icon} className={this.getClass()} onClick={this.toggle}>
            <div className="bg-white rounded-circle d-flex align-items-center justify-content-center w-75 h-75">
            <h1 className="p-0 m-0"><i style={{color: 'rgb(84, 185, 193)'}} className="fas fa-plus-circle"></i></h1></div>
          </div>
        </Draggable>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered title">
          <ModalHeader toggle={this.toggle}>Let's go!</ModalHeader>
          <ModalBody>
            { this.props.isAuthenticated ?
            <NewItineraryForm /> :
            <NotAllowed onClickingThis={this.toggle}/>
            }              
          </ModalBody>                  
          <ModalFooter className="d-flex justify-content-between my-3 px-3">
            { this.props.isAuthenticated ?
            <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.toggle}>Add new</button>:
            null
            }
            <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1" onClick={this.toggle}>Cancel</button>  
            </ModalFooter>
          </Modal>
      </React.Fragment>
    );
  }
}

const icon = {
    width: '45px',
    height: '45px',
    position: 'fixed',
    top: '65px',
    left: '16px',
    right: 0,
    backgroundColor: 'rgb(84, 185, 193)'        
}


const mapStateToProps = state => ({
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
});
  
NewItinerary.propTypes = {
  // token: PropTypes.string,
    isAuthenticated: PropTypes.bool
}
  
export default connect(mapStateToProps)(withRouter(NewItinerary));