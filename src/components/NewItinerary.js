import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { withRouter } from 'react-router-dom';

export class NewItinerary extends Component {

  getClass = () => {
    if (this.props.location.pathname === "/") {
        return 'd-none'
      } else {
        return 'p-0 m-0 shadow handle rounded-circle d-flex align-items-center justify-content-center'
      }
  }
     
      render() {
        return (
          <Draggable
            axis="both"
            handle=".handle"
            // defaultPosition={dPosition}
            scale={1}
            bounds=".main"
            // onStart={this.handleStart}
            // onDrag={this.handleDrag}
            // onStop={this.handleStop}
            >
            <div style={icon} className={this.getClass()}>
              <div className="bg-white rounded-circle d-flex align-items-center justify-content-center w-75 h-75">
              <h1 className="p-0 m-0"><i style={{color: 'rgb(84, 185, 193)'}} className="fas fa-plus-circle"></i></h1>
              </div>
            </div>
          </Draggable>
        );
      }
    }

    const icon = {
        width: '45px',
        height: '45px',
        position: 'fixed',
        top: '65px',
        left: '16px',
        right: 0,
        backgroundColor: 'rgb(84, 185, 193)'        
    }

export default withRouter(NewItinerary)
