import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import Google from './Google';
import '../styles/mytinerary.css';

export class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.login(user);
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg });
            } else {
                this.setState({ msg: null })
            }
        }

        if(this.props.isAuthenticated) {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form className="col-12 d-flex flex-wrap justify-content-center">
                { this.state.msg ? 
                    <Col md={6} className="mx-1">
                        <Alert color="danger">{this.state.msg}</Alert>
                    </Col> : null }
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
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.onSubmit}>Log In</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1">Cancel</button>
                </div>
                <div className="col-12">
                    <p className="text-dark text-center mb-0">-- Or --</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center my-3 mx-1">
                <Google />
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
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    error: state.error
 });

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { login, clearErrors })(withRouter(LoginForm))
