import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';

export class Header extends Component {

    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'd-none'
        } else {
            return 'font-weight-bold text-center text-danger'
        }
    }

    render() {
        return (
            <Container className="d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-top bg-white">
                <h3><i className="fas fa-user-circle"></i></h3>
                <h3 style={font} className={this.getClass()}>MYtinerary</h3>
                <h3><i className="fas fa-bars"></i></h3>
            </Container>
        )
    }
}

const font = {
    fontFamily: "'Courgette', cursive"
}

export default withRouter(Header)
