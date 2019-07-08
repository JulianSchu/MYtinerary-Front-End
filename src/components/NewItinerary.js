import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { createNewItinerary, fetchCities, resetCreation } from '../actions/actions';
import { clearErrors } from '../actions/errorActions';

import { withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import NewItineraryForm from './NewItineraryForm';
import NotAllowed from './NotAllowed'; 
import '../styles/mytinerary.css';
import GoAndSee from './GoAndSee';
const uuidv1 = require('uuid/v1')

export class NewItinerary extends Component {
  state = {
    modal: false,
      
    title: '',
    city: '',
    cityId: '', 
    country: '', 
    name: '', 
    profilePic: '', 
    duration: '', 
    price: '€', 
    activities: [], 
    hashtag: ''
  }

  onChange = (key, value) => {
    this.setState({
        [key]: value
    })

    if(key === 'cityId') {
      let city = this.props.cities.filter(city => {
         return city._id.match(value)
      });

      this.setState({
        city: city[0].name
      })
    }
  }

  addActivities = (newPic) => {
    const currentState = this.state.activities;
        currentState.push(newPic)
        this.setState({
            activities: currentState
        })
  }

  removeOne = (removedState) => {
    this.setState({
      activities: removedState
  })
  }

  getPicUrl = (theOne) => {
    this.setState({
      activities: theOne
  })
  }

  onCancel = () => {
    this.setState({
      title: '',
      city: '',
      cityId: '', 
      country: '', 
      userName: '', 
      profilePic: '', 
      duration: '', 
      price: '€', 
      activities: [{id:uuidv1(), picUrl: ''}], 
      hashtag: ''
    })

    this.props.resetCreation()
  }

  goAndSee = () => {
    this.props.history.push("/chosenCity/" + `${this.state.city}`);
    this.toggle()
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    this.onCancel()
  }

  getClass = () => {
    if (this.props.location.pathname === "/" || this.props.location.pathname === "/LogIn" || this.props.location.pathname === "/SignUp" ) {
        return 'd-none'
      } else {
        return 'p-0 m-0 shadow handle rounded-circle d-flex align-items-center justify-content-center'
      }
  }

  addNewItinerary = (e) => {
    e.preventDefault();
    const { title, city, cityId, country, duration, price, activities, hashtag } = this.state
    const newItinerary = {
      title, 
      city, 
      cityId,
      country, 
      userName: this.props.user.userName, 
      profilPic: this.props.user.profilPic, 
      duration, 
      price, 
      activities, 
      hashtag 
    }
  
    this.props.createNewItinerary(newItinerary);
    this.props.clearErrors();
  }

  componentDidMount = () => {
    this.props.fetchCities();
  }

  render() {
     if (this.props.cities.length === 0) {
        return ( 
          <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
            <Loader type="CradleLoader" color="black" height={80} width={80} />
          </Container>
        )
      } else {
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
                { this.props.created ?
                <GoAndSee onClickingThis={this.toggle} cityId={this.state.cityId}/> :
                  ( this.props.isAuthenticated ?
                <NewItineraryForm onChange={this.onChange} state={this.state} addActivities={this.addActivities} removeOne={this.removeOne} getPicUrl={this.getPicUrl} /> :
                <NotAllowed onClickingThis={this.toggle}/>
                  )
                }              
              </ModalBody>                 
              <ModalFooter className="d-flex justify-content-between my-3 px-3">
                { 
                this.props.created ?
                null :
                ( this.props.isAuthenticated ? 
                <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.addNewItinerary}>Add new</button> : 
                null
                )
                }
                <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1" onClick={this.toggle}>Cancel</button>  
                </ModalFooter>
              </Modal>
          </React.Fragment>
      );
    }
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
    isAuthenticated: state.auth.isAuthenticated,
    newItinerary: state.itineraryList.newItinerary,
    created: state.itineraryList.created,
    cities: state.cityList.cities,
    user: state.auth.user,
    error: state.error
});
  
NewItinerary.propTypes = {
  // token: PropTypes.string,
    isAuthenticated: PropTypes.bool,
    created: PropTypes.bool,
    user: PropTypes.object,
    cities: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    createNewItinerary: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    resetCreation: PropTypes.func.isRequired
}
  
export default connect(mapStateToProps, { createNewItinerary, fetchCities, clearErrors, resetCreation })(withRouter(NewItinerary));