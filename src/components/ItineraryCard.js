import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, Row, Col, Collapse } from 'reactstrap';
import SwipeCarousel from './SwipeCarousel';
import CommentBox from './CommentBox';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';

import '../styles/mytinerary.css';

export class ItineraryCard extends Component {
    state = {
        collapse: false
    }
    
    toggle = () => {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className="p-3 col-12 col-md-6">
                <Card body className="text-center w-100 shadow">
                    <Row>
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
    comments: state.comment.comments
 });

ItineraryCard.propTypes = {
    isFetchingCo: PropTypes.bool,
    comments: PropTypes.array,
}

export default connect(mapStateToProps)(ItineraryCard)
