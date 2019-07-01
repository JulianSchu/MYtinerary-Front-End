import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import '../styles/mytinerary.css';

export class LoginForm extends Component {
    state = {
        email: '',
        password: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signIn = (e) => {
        console.log('in progress')
    }

    render() {
        return (
            <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form className="col-12 d-flex flex-wrap justify-content-center">
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input type="email" name="email" id="userEmail" onChange={this.onChange} value={this.state.email}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userPassword">Password</Label>
                            <Input type="password" name="password" id="userPassword" onChange={this.onChange} value={this.state.password}/>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="col-md-6 d-flex justify-content-end my-3 px-3">
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.signIn}>Sign in</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1">Cancel</button>
                </div>
                <div className="col-12">
                    <p className="text-dark text-center mb-0">-- Or --</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center my-3 mx-1">
                    <button className="col-12 btn btn-warning py-1 shadow" type="button">
                        <img className="rounded-circle loginIcon" src={require('../assets/GoogleIcon.jpg')} alt="google.jpg"/>
                        <span className="ml-2">Google Account</span>
                    </button>
                </div>
                <div className="col-md-6 d-flex justify-content-center mb-3 mx-1">
                    <button className="col-12 btn btn-primary py-1 shadow" type="button">
                        <img className="rounded-circle loginIcon" src={require('../assets/FbIcon.jpg')} alt="facebook.jpg"/>
                        <span className="ml-2">Facebook Account</span>
                    </button>
                </div>
                <small className="col-md-6 text-justify mt-3">Don't have a MYtinerary account yet? You should <Link to="/SignUp" className="text-decoration-none"><small className="link text-info">Create One</small></Link>! It's totally free and only takes a minute.</small>
          </Form>
        );
    }
}

const mapStateToProps = state => ({
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    // user: state.auth.user,
    error: state.error
 });

LoginForm.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { register })(LoginForm)
