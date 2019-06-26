import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Loader from 'react-loader-spinner';

import '../styles/mytinerary.css';

export class SwipeCarousel extends Component {
    render() {
        if(this.props.activities) {
            return (
            <React.Fragment>
                <div style={{backgroundColor: 'rgba(174, 220, 218, 0.2)'}} className="rounded-top shadow mt-3"><p className="title text-left m-0 p-3">My Activities</p></div>
                <Carousel infiniteLoop className="carouselBox rounded-bottom shadow"> 
                    {this.props.activities.map((activity, index) => (
                    <div className="d-flex justify-content-center align-items-center h-100" key={index}>
                        <img src={activity.picUrl} alt="activity.jpg"/>
                    </div>
                    ))}
                </Carousel>
            </React.Fragment>
            )
    } else {
            return ( 
                <div className="d-flex justify-content-center align-items-center h-100">
                    <Loader type="CradleLoader" color="black" height={80} width={80} />
                </div>
            )
        }            
    }
}


export default SwipeCarousel