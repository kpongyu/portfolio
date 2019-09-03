import React, { Component } from 'react';
import './Preloader.css';
import 'react-bootstrap/dist/react-bootstrap';






class Preloader extends Component {
    render() {
      return (
        <div className="preloader">
        <img src="assets/img/spinner.svg" alt="Loading..." className="preloader__spinner"/>
        </div>
      )
    }
  }
  
  export default Preloader;