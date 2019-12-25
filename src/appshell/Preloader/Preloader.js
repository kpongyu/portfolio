import React, { Component } from 'react';
import './Preloader.css';
import 'react-bootstrap/dist/react-bootstrap';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner'





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