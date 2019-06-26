import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom'
import '../styles/mytinerary.css';

export class LoginForm extends Component {
    render() {
        return (
            <Form className="title col-12 d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="userEmail">Email</Label>
                            <Input type="email" name="email" id="userEmail" placeholder="abc@abc.com" />
                        </FormGroup>
                    </Col>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="userPassword">Password</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="minimum 8 characters" />
                        </FormGroup>
                    </Col>
                    <FormGroup check md={12} className="mx-1">
                        <Input type="checkbox" name="check" id="exampleCheck"/>
                        <Label for="exampleCheck" check>Remember me</Label>
                    </FormGroup>
                </Row>
                <div className="col-md-6 d-flex justify-content-end my-3 px-0">
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1">Sign in</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1">Cancel</button>
                </div>
                <div class="col-12">
                    <p class="text-dark text-center mb-0">-- Or --</p>
                </div>
                <div class="col-md-6 d-flex justify-content-center my-3 mx-1">
                    <button class="col-12 btn btn-warning py-1 shadow" type="button">
                        <img class="rounded-circle loginIcon" src={require('../assets/GoogleIcon.jpg')} alt="google.jpg"/>
                        <span className="ml-2">Google Account</span>
                    </button>
                </div>
                <div class="col-md-6 d-flex justify-content-center mb-3 mx-1">
                    <button class="col-12 btn btn-primary py-1 shadow" type="button">
                        <img class="rounded-circle loginIcon" src={require('../assets/FbIcon.jpg')} alt="google.jpg"/>
                        <span className="ml-2">Facebook Account</span>
                    </button>
                </div>
                <small className="col-md-6 text-justify mt-3">Don't have a MYtinerary account yet? You should <Link to="/SignUp" className="text-decoration-none"><small className="text-info">Create One</small></Link>! It's totally free and only takes a minute.</small>
          </Form>
        );
    }
}

export default LoginForm
