import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from  'react-redux';
import { fetchCities } from '../actions/actions';

import './CityList.css';

export class CityList extends Component {
    // state = {
    //     cities: [],
    //     isFetching: true 
    // }

    render() {
    if (this.props.cities.length == 0) {
        return ( 
            <Container className="d-flex justify-content-center align-items-center" style={{height: '80vh'}}>
                <Loader type="CradleLoader" color="black" height={80} width={80} />
            </Container>
        )
    } else {
    return this.props.cities.map((city) => (
            <React.Fragment key={city._id}>
                <Col sm="6" lg="4">
                    <Row className="city-pic flex-wrap align-items-center mx-1 my-2 shadow" style={{backgroundImage: `url(${city.imgUrl})`}}>
                        <div className="w-100 overlay text-center my-0">
                            <p className="mt-3 mb-1">{city.name}</p>
                            <p className="mt-1 mb-3">{city.country}</p>
                        </div>
                    </Row>
                </Col>
            </React.Fragment>
        )
    )
}
}

componentWillMount = () => {
    this.props.fetchCities();
        // this.setState({...this.state, isFetching: true})
        // fetch('http://localhost:5000/api/cities/')
        //   .then(response => response.json())
        //   .then(result => {
        //       this.setState({
        //         cities: result, 
        //         isFetching: false});
        //         console.log(this.state.cities)}
        //   )
        //   .catch(e => console.log(e));
      }
}

// CityList.PropTypes = {
//     fetchCities: PropTypes.func.isRequired,
//     cities: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
    cities: state.cities.cities
});

export default connect(mapStateToProps, { fetchCities })(CityList);
