import React, { Component } from 'react';
import CityList from '../components/CityList';
import SearchBar from '../components/SearchBar';
import { Row } from 'reactstrap';

export class Cities extends Component {
    render() {
        return (
            <React.Fragment>
                <SearchBar />
                <Row>
                    <CityList />
                </Row>
            </React.Fragment>
        )
    }
}

export default Cities
