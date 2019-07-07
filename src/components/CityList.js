import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from  'react-redux';
import { fetchCities } from '../actions/actions';
import { clearSearch } from '../actions/actions';


import '../styles/mytinerary.css';

export class CityList extends Component {

    render() {
    if (this.props.cities.length === 0) {
        return ( 
            <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                <Loader type="CradleLoader" color="black" height={80} width={80} />
            </Container>
        )
    } else {
        let searchString = this.props.search.toLowerCase();
        let filteredBySearch = this.props.cities.filter(city => {
            if (city.name.toLowerCase().match(searchString) || city.country.toLowerCase().match(searchString)) return true
        });
        return filteredBySearch.map((city) => (
                <Col sm="6" lg="4" key={city._id}>
                    <Link className="link text-decoration-none" name="ChosenCity" to={{pathname: "/ChosenCity/" + `${city._id}`}} onClick={this.props.clearSearch}>
                        <Row className="city-pic flex-wrap align-items-center mx-1 my-2 shadow" style={{backgroundImage: `url(${city.imgUrl})`}}>
                            <div className="w-100 overlay text-danger text-center my-0">
                                <p style={font} className="mt-3 mb-1">{city.name}</p>
                                <p style={font} className="mt-1 mb-3">{city.country}</p>
                            </div>
                        </Row>
                    </Link>
                </Col>       
        )
    )
    }
}

componentDidMount = () => {
    this.props.fetchCities();
      }
}

CityList.propTypes = {
    fetchCities: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    search: PropTypes.string.isRequired,
    clearSearch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    cities: state.cityList.cities,
    search: state.cityList.search
});

const font = {
    fontFamily: "'Gloria Hallelujah', cursive"
}

export default connect(mapStateToProps, { fetchCities, clearSearch })(CityList);
