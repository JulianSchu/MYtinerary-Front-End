import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './ItineraryHeader.css';

export class ItineraryHeader extends Component {
    render() {
        return (
            <Jumbotron className="bg-light chosenCity my-3 py-3 px-0 d-flex align-items-center" style={{backgroundImage: `url(${this.props.chosenCity[0].imgUrl})`}}>
                <div className="w-100 chosenOverlay text-danger text-center mx-0 px-0">
                    <h4 className="mt-3 mb-1">Welcome to</h4>
                    <h2 className="my-1">{this.props.chosenCity[0].name}</h2>
                    <h4 className="mt-1 mb-3">{this.props.chosenCity[0].country}</h4>
                </div>
            </Jumbotron>
        )
    }
}

export default ItineraryHeader
