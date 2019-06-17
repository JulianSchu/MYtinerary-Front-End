import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';
import { connect } from  'react-redux';
import { getSearch, clearSearch } from '../actions/actions';

export class SearchBar extends Component {
    render() {
        return (
        <Col sm="12" md={{ size: 6, offset: 6 }} className="px-0 py-1 mt-3">
            <div className="d-flex">
                <input className="w-100 p-1 my-3 border border-secondary border-right-0 rounded-left" type="text" name="search" id="searchBar" placeholder="Search for city" value={this.props.search} onChange={this.props.getSearch}/>
                <div className="my-3 border border-secondary border-left-0 rounded-right d-flex align-items-center px-2" onClick={this.props.clearSearch}><i className="fas fa-times-circle"></i></div>
            </div>
        </Col>
        )
    }
}

SearchBar.propTypes = {
    getSearch: PropTypes.func.isRequired,
    clearSearch: PropTypes.func.isRequired,
    search: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    search: state.cityList.search
});

export default connect(mapStateToProps, { getSearch, clearSearch })(SearchBar);
