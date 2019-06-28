import React, { Component } from 'react';
import { Alert, Col, Row, Form, FormGroup, Label, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter, UncontrolledTooltip } from 'reactstrap';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import { register } from '../actions/authActions';
import { clearErrors } from '../actions/errorActions';
import '../styles/mytinerary.css';

export class SignUpForm extends Component {
    state = {
          modal: false,
          userName: '',
          email: '',
          password: '',
          passwordConfirm: '',
          profilPic: '',
          country: 'Wonderland',
          msg: null
        }
     
    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal
        }))
     }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    clearError = () => {
        this.props.clearErrors();
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            profilPic: this.state.profilPic || 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/banana-pink-background-thumb.jpg?w=756',
            country: this.state.country
        };
        this.props.register(newUser);
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg });
            } else {
                this.setState({ msg: null })
            }
        }
    }

    render() {
        return (
            <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form className="d-flex col-12 flex-wrap justify-content-center">
                    { this.state.msg ? 
                    <Col md={6} className="mx-1">
                        <Alert color="danger">{this.state.msg}</Alert>
                    </Col> : null }
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userEmail">Username*</Label>
                            <Input type="text" name="userName" id="userName" placeholder="Be unique and fierce!" value={this.state.userName} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userEmail">Email*</Label>
                            <Input type="email" name="email" id="userEmail" placeholder="abc@abc.com" value={this.state.email} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userPassword">password*</Label>
                            <Input type="password" name="password" id="userPassword" placeholder="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" value={this.state.password} onChange={this.onChange}/>
                            <small>!min. 8 char with one lowercase, one uppercase & one num</small>
                            {
                                // <span style={{textDecoration: "none", color:"red"}} href="#" id="passwordPattern">*?</span>
                                /* <UncontrolledTooltip placement="right" target="passwordPattern" className="bg-info">
                            Minmum 8 characters with at least one lowercase, one uppercase & one number
                            </UncontrolledTooltip> */}
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="userPasswordConfirm">Password Confirm</Label>
                            <Input type="password" name="passwordConfirm" id="userPasswordConfirm" placeholder="Hit me baby one more time!" value={this.state.passwordConfirm} onChange={this.onChange}/>

                            {/* <span style={{textDecoration: "none", color:"red"}} href="#" id="passConfirm">*?</span>
                            <UncontrolledTooltip placement="right" target="passConfirm">
                            Do u remember what u just typed in above?
                            </UncontrolledTooltip> */}
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="profilPic">Your Face Please</Label>
                            <Input type="text" name="profilPic" id="profilPic" placeholder="I said be unique and fierce!!!" value={this.state.profilPic} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <Label for="country">Where u from</Label>
                        <Input type="select" name="country" id="country" value={this.state.country} onChange={this.onChange}>
                            <option>Wonderland</option>
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
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.onSubmit}>Sign Up</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1" onClick={this.clearError}>Cancel</button>
                </div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-dialog-centered">
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

const mapStateToProps = state => ({
    // token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
    // user: state.auth.user,
    error: state.error
 });

SignUpForm.propTypes = {
    register: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    isLoading: PropTypes.bool,
    error: PropTypes.object.isRequired
}

export default connect(mapStateToProps, { register, clearErrors })(SignUpForm)
