import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import '../styles/mytinerary.css';

export class Footer extends Component {
    getClass = () => {
        console.log(this.props)

        if (this.props.location.pathname === "/") {
            return 'my-2'
        } else {
            return 'navIcon p-2 m-0'
        }
    }
    
    getStyle = () => {
        if (this.props.location.pathname === "/") {
            return {
                pointerEvents: 'none',
                color: 'rgb(200, 200, 200)'
            }
        } else {
            return {
                color: 'black'
            }
        }
    }

    render() {
        return (
            <Container fluid className="bg d-flex justify-content-center fixed-bottom shadow">
                <Link to="/" style={this.getStyle()}  >
                    <h2 className={this.getClass()}><i className="fas fa-home"></i></h2>
                </Link>
            </Container>
        )
    }
}

export default withRouter(Footer)