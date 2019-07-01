import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import ProfilModal from './ProfilModal'

export class Header extends Component {

    render() {
        return (
            <Container fluid className="bg d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-top shadow">
                <h3 className={this.getWelcome()}>Welcome</h3>
                <h3 className={this.getClass()}>MYtinerary</h3>
                <ProfilModal />
            </Container>
        )
    }

    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'd-none'
        } else {
            return 'logo font-weight-bold text-center title'
        }
    }

    getWelcome = () => {
        if (this.props.location.pathname === "/") {
            return 'title'
        } else {
            return 'd-none'
        }
    }
}

export default withRouter(Header)