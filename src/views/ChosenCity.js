import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { Container, Row} from 'reactstrap';
import { connect } from  'react-redux';
import { fetchItineraries } from '../actions/actions';
import { fetchCity } from '../actions/actions';

import ItineraryHeader from '../components/ItineraryHeader'
import ItineraryCard from '../components/ItineraryCard'

export class ChosenCity extends Component {

    render() {
        if (this.props.itineraries.length === 0 || this.props.chosenCity.length === 0) {
                return ( 
                    <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                        <Loader type="CradleLoader" color="black" height={80} width={80} />
                    </Container>
                    )
                } else {
            
            return (
                <React.Fragment>
                    <ItineraryHeader chosenCity={this.props.chosenCity}/>
                    <Row>
                    { this.props.itineraries.map((itinerary) => 
                    (<ItineraryCard oneItinerary={itinerary} key={itinerary._id}/>)
                    )}
                    </Row>
                </React.Fragment>
            )
    }}
    
    componentDidMount() {
        console.log(this.props);
        const { city } = this.props.match.params;
        this.props.fetchItineraries(city);
        this.props.fetchCity(city)
    }
}

const mapStateToProps = state => ({
        itineraries: state.itineraryList.itineraries,
        chosenCity: state.cityList.chosenCity
     });

ChosenCity.propTypes = {
        fetchItineraries: PropTypes.func.isRequired,
        itineraries: PropTypes.array.isRequired,
        fetchCity: PropTypes.func.isRequired,
        chosenCity: PropTypes.array.isRequired
    }
    
export default connect(mapStateToProps, { fetchItineraries, fetchCity })(ChosenCity);