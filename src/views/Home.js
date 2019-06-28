import React, { Component } from 'react';

import Logo from '../components/Logo';
import HomeText from '../components/HomeText';
import LogSign from '../components/LogSign';

import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';

export class Home extends Component {
    state = {
        name: '',
        imgUrl: '',
        country: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onClick = (e) => {
        e.preventDefault();
        const city = this.state
        console.log(city)
        fetch(`http://localhost:5000/api/cities`, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(city), // data can be `string` or {object}!
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkMTQ5Y2FjNDhkN2JlNjU5NDc0ODIwOCIsImlhdCI6MTU2MTY0MDA2NywiZXhwIjoxNTkzMTc2MDY3fQ.ywkvciViEGxyO4HD_u9N0iNypwlbGUjLQkvEAEuGy3A' } 
          }).then(res => res.json())
          .then(response => console.log('Success:', response))
          .catch(error => console.log('Error:', error));
    }

    render() {
        return (
            <div>
                <Logo />
                <HomeText/> 
                <LogSign />
                <div>
                <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
                <Row form className="col-12 d-flex flex-wrap justify-content-center">
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" value={this.state.name} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="imgUrl">img</Label>
                            <Input type="text" name="imgUrl" id="imgUrl" value={this.state.imgUrl} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                    <Col md={6} className="mx-1">
                        <FormGroup>
                            <Label for="country">country</Label>
                            <Input type="text" name="country" id="country" value={this.state.country} onChange={this.onChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <div className="col-md-6 d-flex justify-content-end my-3 px-3">
                    <button className="bg border-0 rounded text-white py-2 px-3 mr-1" onClick={this.onClick}>Submit</button>
                    <button className="bg-muted border-0 rounded text-white py-2 px-3 ml-1">Cancel</button>
                </div>
          </Form>
                </div>
            </div>
        )
    }
}

export default Home
