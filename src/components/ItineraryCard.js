import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, Row, Col, Collapse, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SwipeCarousel from './SwipeCarousel';
import CommentBox from './CommentBox';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import ModalDelete from './ModalDelete';

import '../styles/mytinerary.css';

export class ItineraryCard extends Component {
    state = {
        collapse: false,
        modal: false
    }
    
    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    modalToggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
          }));
    }

    onSure = (e) => {
        this.props.onDelete(e.target.id)
        this.modalToggle()
    }

    render() {
        return (
            <div className="p-3 col-12 col-md-6">
                <Card body className="text-center w-100 shadow">
                    <Row>
                        { this.props.user && this.props.oneItinerary.userId === this.props.user._id ?
                        
                        <Col className="col-12 d-flex justify-content-end">
                            <small>
                                <i className="far fa-trash-alt" onClick={this.modalToggle} ></i>
                            </small>
                            <Modal isOpen={this.state.modal} toggle={this.modalToggle} className="modal-dialog-centered title">
                                <ModalHeader toggle={this.modalToggle}>Oops!</ModalHeader>
                                <ModalBody>
                                    <ModalDelete />    
                                </ModalBody>           
                                <ModalFooter className="d-flex justify-content-between my-3 px-3">
                                    <button id={this.props.oneItinerary._id} className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.onSure}>I'm Sure</button>
                                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1" onClick={this.modalToggle}>Cancel</button>      
                                </ModalFooter>  
                            </Modal>                     
                        </Col> : 
                        <Col className="col-12 d-flex justify-content-end">
                            <small>
                                <i className="far fa-trash-alt text-white"></i>
                            </small>    
                        </Col> 
                        }
                        <Col md="6" lg="5">
                            <div className="">
                                <div className="profilePic" style={{backgroundImage: `url(${this.props.oneItinerary.profilPic})`}}>                            </div>   
                                <p className="title pt-2">{this.props.oneItinerary.userName}</p>
                            </div>
                        </Col>
                        <Col md="6" lg="7" className="title d-flex flex-wrap align-items-between justify-content-center pl-md-0">
                            <CardTitle className="w-100 font-weight-bold">{this.props.oneItinerary.title}</CardTitle>
                            <CardText className="w-100 d-flex flex-wrap justify-content-around px-3 px-md-0">
                                <span><i className="fas fa-heart"></i> {this.props.oneItinerary.likes}</span>
                                <span><i className="fas fa-clock"></i> {this.props.oneItinerary.duration}</span>
                                <span><i className="fas fa-piggy-bank"></i> {this.props.oneItinerary.price}</span>
                            </CardText>
                            <CardText className="w-100 mb-3">{this.props.oneItinerary.hashtag}</CardText>
                        </Col>
                    </Row>
                    <Collapse isOpen={this.state.collapse}>
                        <SwipeCarousel activities={this.props.oneItinerary.activities}/>
                        <CommentBox comments={this.props.comments} itId={this.props.oneItinerary._id}/>
                    </Collapse>   
                    { this.state.collapse ? 
                    <Button className="title w-50 mx-auto shadow" onClick={this.toggle}>Close All</Button> :
                    <Button className="title w-50 mx-auto shadow" onClick={this.toggle}>View All</Button> }
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isFetchingCo: state.comment.isFetchingCo,
    comments: state.comment.comments,
    user: state.auth.user
 });

ItineraryCard.propTypes = {
    isFetchingCo: PropTypes.bool,
    comments: PropTypes.array,
    user: PropTypes.object
}

export default connect(mapStateToProps)(ItineraryCard)
