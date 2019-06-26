import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import '../styles/mytinerary.css';

export class Header extends Component {

    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'd-none'
        } else {
            return 'logo font-weight-bold text-center'
        }
    }

    render() {
        return (
            <Container fluid className="bg d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-top shadow">
                <h3><i className="fas fa-user-circle"></i></h3>
                <h3 className={this.getClass()}>MYtinerary</h3>
                <h3><i className="fas fa-bars"></i></h3>
            </Container>
        )
    }
}

export default withRouter(Header)
