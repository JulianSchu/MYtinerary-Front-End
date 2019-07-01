import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';

import '../styles/mytinerary.css';

export class Header extends Component {

    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'd-none'
        } else {
            return 'logo font-weight-bold text-center'
        }
    }

    getProfilClass = () => {
        if (this.props.isAuthenticated) {
            return 'text-dark'
        } else {
            return 'text-muted'
        }
    }
    
    getStyle = () => {
        if (!this.props.isAuthenticated) {
            return {
                pointerEvents: 'none'
            }
        }
    }

    render() {
        return (
            <Container fluid className="bg d-flex flex-wrap justify-content-between align-items-center pt-3 fixed-top shadow">
                <h3 className={this.getProfilClass()} style={this.getStyle()}><i className="fas fa-user-circle"></i></h3>
                <h3 className={this.getClass()}>MYtinerary</h3>
                <h3><i className="fas fa-bars"></i></h3>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated
 });

Header.propTypes = {
// token: PropTypes.string,
    isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps)(withRouter(Header))