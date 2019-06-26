import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import '../styles/mytinerary.css';

export class Footer extends Component {
    getClass = () => {
        if (this.props.location.pathname === "/") {
            return 'text-muted'
        } else {
            return 'text-dark'
        }
    }
    
    getStyle = () => {
        if (this.props.location.pathname === "/") {
            return {
                pointerEvents: 'none'  
            }
        }
    }

    render() {
        return (
            <Container fluid className="bg d-flex justify-content-center fixed-bottom shadow">
                <Link to="/" style={this.getStyle()} className={this.getClass()} >
                    <h3 className="my-2"><i className="fas fa-home"></i></h3>
                </Link>
            </Container>
        )
    }
}

export default withRouter(Footer)