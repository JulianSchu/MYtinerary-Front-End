import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, Row, Col, Collapse } from 'reactstrap';
import SwipeCarousel from './SwipeCarousel'

import '../styles/mytinerary.css';

export class ItineraryCard extends Component {
    state = {
        oneItinerary: {},
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
                                <div className="profilePic" style={{backgroundImage: `url(${this.state.oneItinerary.profilePic})`}}>                            </div>   
                                <p className="title pt-2">{this.state.oneItinerary.name}</p>
                            </div>
                        </Col>
                        <Col md="6" lg="7" className="title d-flex flex-wrap align-items-between justify-content-center pl-md-0">
                            <CardTitle className="w-100 font-weight-bold">{this.state.oneItinerary.title}</CardTitle>
                            <CardText className="w-100 d-flex flex-wrap justify-content-around px-3 px-md-0">
                                <span><i className="fas fa-heart"></i> {this.state.oneItinerary.likes}</span>
                                <span><i className="fas fa-clock"></i> {this.state.oneItinerary.duration}</span>
                                <span><i className="fas fa-piggy-bank"></i> {this.state.oneItinerary.price}</span>
                            </CardText>
                            {/* <CardText>{this.state.oneItinerary.description}</CardText> */}
                            <CardText className="w-100 mb-3">{this.state.oneItinerary.hashtag}</CardText>
                        </Col>
                    </Row>
                    <Button className="title w-50 mx-auto shadow" onClick={this.toggle}>View All</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <SwipeCarousel activities={this.state.oneItinerary.activities}/>
                    </Collapse>    
                </Card>
            </div>
        )
    }

    componentDidMount = () => {
        console.log(this.props.oneItinerary)
        this.setState({
            oneItinerary: this.props.oneItinerary
        })
    }
}

export default ItineraryCard
