import React, { Component } from 'react';
import { Col, Row, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from  'react-redux';
import PropTypes from 'prop-types';
import '../styles/mytinerary.css';
const uuidv1 = require('uuid/v1')

export class NewItineraryForm extends Component {
    state = {
        activities: [{id:uuidv1(), picUrl: ''}], 
        
        predefinedList: this.props.cities,
        clicksAdd: 1,
        clicksRemove: 0,
        msg: null
    }

    onChange = (e) => {
        this.props.onChange(e.target.name, e.target.value);
        console.log(e.target.name)

        if(e.target.name === 'city' || e.target.name === 'country') {
            this.predefinedList(e.target.value)
        }     
    }

    addOne = () => {
        console.log(this.state.clicksAdd)
        this.setState({
            clicksAdd: this.state.clicksAdd + 1
        }, () => {this.addActivities()})
    }

    removeOne = (e) => {
        console.log(e)
        
        const plusMinus = this.state.clicksAdd - this.state.clicksRemove

        if(plusMinus > 1) {
            this.setState({
                clicksRemove: this.state.clicksRemove + 1
            })
            const currentState = this.props.state.activities;
            console.log(currentState)
            const removedState = currentState.filter((activity) => {
                if(activity.id !== e.target.id) return true
            })
            console.log(removedState)
            this.props.removeOne(removedState)
        } else {
            this.setState({
                msg: 'Please share at least one pic of activity with us.'
            })
        }
    }

    addActivities = () => {
        const newPic = { id: uuidv1(), picUrl: ''}
        this.props.addActivities(newPic)
    }

    getPicUrl = (e) => {
        const currentState = this.props.state.activities
        const theOne = currentState.filter((activity) => {
            if(activity.id === e.target.name) {
                activity.picUrl = e.target.value
                return activity
            } else {
                return activity
            }})
        
        this.props.getPicUrl(theOne)
    }

    predefinedList = (value) => {
        const selected = value
        const predefinedList = this.props.cities.filter(city => {
            if (city.name.match(selected) || city.country.match(selected)) return true
        })
        console.log(predefinedList)
        this.setState({
            predefinedList
        })
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'CREATION_FAIL') {
                this.setState({ msg: error.msg });
            } else {
                this.setState({ msg: null })
            }
        }
    }

    
    render() {
        return (
        <Form className="title d-flex flex-wrap justify-content-center py-3 my-3 border rounded bg-white shadow">
            <Row form className="col-12 d-flex flex-wrap justify-content-center">
                { this.state.msg ? 
                    <Col className="col-12 mx-1">
                        <Alert color="danger">{this.state.msg}</Alert>
                    </Col> : null }
                <Col className="col-12 mx-1">
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" value={this.props.state.title} onChange={this.onChange} placeholder="Headliner" />
                    </FormGroup>
                </Col>
                <Col className="col-12 mx-1 d-flex">                    
                    <div className="col-6 p-1">
                        <FormGroup>
                            <Label for="city">City</Label>
                            <Input type="select" name="city" value={this.props.state.city} onChange={this.onChange}>
                                <option value=''>Please Select</option>
                                { 
                                    this.state.predefinedList.map((city, index) => (
                                        <option key={index}>{city.name}</option>
                                        ))
                                    // this.props.cities.map((city, index) => (
                                    // <option key={index}>{city.name}</option>
                                    // ))
                                }
                            </Input>
                        </FormGroup>
                    </div>
                    <div className="col-6 p-1">
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="select" name="country" value={this.props.state.country} onChange={this.onChange}>
                            <option value=''>Please Select</option>
                                { 
                                    this.state.predefinedList.map((city, index) => (
                                    <option key={index}>{city.country}</option>
                                    ))
                                }
                            </Input>
                        </FormGroup>
                    </div>
                </Col>
                <Col className="col-12 mx-1 d-flex">
                    <div className="col-6 p-1">
                        <FormGroup>
                            <Label for="duration"><i className="fas fa-clock"></i></Label>
                            <Input type="number" name="duration" value={this.props.state.duration} onChange={this.onChange} placeholder="how long?" />
                        </FormGroup>
                    </div>
                    <div className="col-6 p-1">
                        <FormGroup>
                            <Label for="price"><i className="fas fa-piggy-bank"></i> </Label>
                            <Input type="select" name="price" value={this.props.state.price} onChange={this.onChange}>
                                {/* <option value=''>how much?</option> */}
                                <option>€</option>
                                <option>€€</option>
                                <option>€€€</option>
                                <option>€€€€</option>
                            </Input>
                        </FormGroup>
                    </div>
                </Col>
                <Col className="col-12 mx-1">
                    <FormGroup>
                        <Label for="hashtag">Hashtags</Label>
                        <Input type="text" name="hashtag" value={this.props.state.hashtag} onChange={this.onChange} placeholder="#love" />
                    </FormGroup>
                </Col>
                <Col className="col-12 mx-1">
                    <FormGroup>
                        <Label>activity Pics <i className="fas fa-plus-circle" onClick={this.addOne}></i></Label>
                        {this.props.state.activities.map((activity, index) => (
                        <div className="d-flex align-items-center mb-2" key={index}>
                        <Input name={activity.id} type="text" placeholder="url" value={activity.picUrl} onChange={this.getPicUrl}/>{ }<i id={activity.id} className="fas fa-minus-circle text-danger ml-1" onClick={this.removeOne}></i>
                        </div>
                        ))}
                    </FormGroup>
                </Col>                     
            </Row>
        </Form>
        )
    }
}

const mapStateToProps = state => ({
    error: state.error,
    created: state.itineraryList.created,
    cities: state.cityList.cities
});
  
NewItineraryForm.propTypes = {
    error: PropTypes.object.isRequired,
    cities: PropTypes.array.isRequired
}
  
export default connect(mapStateToProps)(NewItineraryForm);