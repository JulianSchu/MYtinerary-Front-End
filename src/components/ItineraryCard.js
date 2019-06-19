import React, { Component } from 'react';
import { Card, CardText, CardTitle, Button, Row, Col } from 'reactstrap';

import '../styles/mytinerary.css';

export class ItineraryCard extends Component {
    state = {
        oneItinerary: {}
    }

    render() {
        return (
            <div className="p-3 col-12 col-md-6">
            <Card body className="text-center w-100">
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
                            <span><i class="fas fa-heart"></i> {this.state.oneItinerary.likes}</span>
                            <span><i class="fas fa-clock"></i> {this.state.oneItinerary.duration}</span>
                            <span><i class="fas fa-piggy-bank"></i> {this.state.oneItinerary.price}</span>
                        </CardText>
                        {/* <CardText>{this.state.oneItinerary.description}</CardText> */}
                        <CardText className="w-100 mb-3">{this.state.oneItinerary.hashtag}</CardText>
                    </Col>
                </Row>
                <Button className="w-50 mx-auto">More Activities</Button>
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
