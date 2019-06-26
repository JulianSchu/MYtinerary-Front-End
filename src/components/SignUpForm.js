import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import '../styles/mytinerary.css';

export class SignUpForm extends Component {
    state = {
          modal: false
        }
     
    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
      }

    render() {
        return (
            <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form className="d-flex col-12 flex-wrap justify-content-center">
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userEmail">Username*</Label>
                            <Input type="text" name="userName" id="userName" placeholder="Be unique and fierce!" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userEmail">Email*</Label>
                            <Input type="email" name="email" id="userEmail" placeholder="abc@abc.com" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userPassword">Password*</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="minimum 8 characters" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userPassword">Password Confirm*</Label>
                            <Input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Hit me baby one more time!" />
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <Label for="country">Where u from</Label>
                        <Input type="select" defaultValue="a secret place" name="country" id="country">
                            <option>England</option>
                            <option>France</option>
                            <option>Germany</option>
                            <option>Holland</option>
                            <option>Ireland</option>
                            <option>Spain</option>
                            <option>USA</option>
                        </Input>
                    </Col>
                    <Col check="true" md={6} className="m-1">
                        <Input type="checkbox" name="check" className="mx-1 my-3"/>
                        <Label check className="my-2 ml-3 pl-1"><small>I agree to MYtinerary's <span className="link text-info" onClick={this.toggle}>Terms & Conditions</span>.</small></Label>
                    </Col>
                </Row>
                <div className="col-md-6 d-flex justify-content-end my-3 px-3">
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1">Sign Up</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1">Cancel</button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Terms and Policies</ModalHeader>
                    <ModalBody>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Accept</Button>
                        <Button color="secondary" onClick={this.toggle}>Accept</Button>
                    </ModalFooter>
                </Modal>
          </Form>
        );
    }
}

export default SignUpForm
