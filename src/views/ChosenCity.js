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
        if (this.props.itFetching || this.props.chosenCity.length === 0) {
                return ( 
                    <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                        <Loader type="CradleLoader" color="black" height={80} width={80} />
                    </Container>
                    )
                } else {
                    if (this.props.itineraries.length === 0) {
                        return ( 
                            <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                                <div className="">
                                    <div className="profilePic" style={{backgroundImage: 'url("data:image/png;base64,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")'}}></div>   
                                </div>
                                <h3 className="title text-center">For this city there is no itineraries yet. Be the first one to surprise us!</h3>
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
            }
        }
    }
    
    componentDidMount() {
        console.log(this.props);
        const { city } = this.props.match.params;
        this.props.fetchItineraries(city);
        this.props.fetchCity(city)
    }
}

const mapStateToProps = state => ({
        itineraries: state.itineraryList.itineraries,
        itFetching: state.itineraryList.itFetching,
        chosenCity: state.cityList.chosenCity
     });

ChosenCity.propTypes = {
        fetchItineraries: PropTypes.func.isRequired,
        itineraries: PropTypes.array.isRequired,
        fetchCity: PropTypes.func.isRequired,
        chosenCity: PropTypes.array.isRequired
    }
    
export default connect(mapStateToProps, { fetchItineraries, fetchCity })(ChosenCity);