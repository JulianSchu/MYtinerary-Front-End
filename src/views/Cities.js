import React, { Component } from 'react';
import CityList from '../components/CityList';
import { Row } from 'reactstrap';

export class Cities extends Component {
    render() {
        return (
            <Row className="">
                <CityList />
            </Row>
        )
    }
}

export default Cities
