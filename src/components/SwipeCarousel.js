import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Loader from 'react-loader-spinner';

import '../styles/mytinerary.css';

export class SwipeCarousel extends Component {
    render() {
        if(this.props.activities) {
            return (
            <Carousel infiniteLoop className="carouselBox shadow"> 
                {this.props.activities.map((activity, index) => (
                <div className="d-flex justify-content-center align-items-center h-100" key={index}>
                    <img src={activity.picUrl} />
                </div>
                ))}
            </Carousel>
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