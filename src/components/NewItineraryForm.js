import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/mytinerary.css';

export class NewItineraryForm extends Component {
    render() {
        return (
        <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
            <Row form className="col-12 d-flex flex-wrap justify-content-center">
                <Col md={6} className="mx-1">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" placeholder="Headliner" />
                    </FormGroup>
                </Col>
                <Col md={6} className="mx-1">
                    <FormGroup>
                        <Label for="description">Your Itinerary</Label>
                        <Input type="text" name="description" placeholder="So what have you done?" />
                    </FormGroup>
                </Col>
                <Col md={6} className="mx-1 d-flex">
                    <div className="col-4 p-1">
                        <FormGroup>
                            <Label for="likes"><i className="fas fa-heart"></i></Label>
                            <Input type="number" name="likes" placeholder="minimum 10" />
                        </FormGroup>
                    </div>
                    <div className="col-4 p-1">
                        <FormGroup>
                            <Label for="duration"><i className="fas fa-clock"></i></Label>
                            <Input type="number" name="duration" placeholder="how many hours?" />
                        </FormGroup>
                    </div>
                    <div className="col-4 p-1">
                        <FormGroup>
                            <Label for="price"><i className="fas fa-piggy-bank"></i> </Label>
                            <Input type="number" name="price" placeholder="how much?" />
                        </FormGroup>
                    </div>
                </Col>
                <Col md={6} className="mx-1">
                    <FormGroup>
                        <Label for="hashtag">Hashtags</Label>
                        <Input type="text" name="hashtag" placeholder="#love" />
                    </FormGroup>
                </Col>
                <Col md={6} className="mx-1">
                    <FormGroup>
                        <Label for="activities">activity Pics</Label>
                        <Input type="text" name="activities" placeholder="url" />
                    </FormGroup>
                </Col>
                
            </Row>
        </Form>
        )
    }
}

export default NewItineraryForm
