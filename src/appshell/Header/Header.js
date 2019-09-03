import React, { Component } from 'react';
import './Header.css';
import 'react-bootstrap/dist/react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from 'react-lottie';
import * as animationData from '../../components/logo.json';



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {isStopped: false, isPaused: false, speed: 2};
  }

  componentDidMount(){
    this.setState({
      speed: 10
    })
  }

    render() {

      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
      };


      return (
       
        <div className="sticky_outer">
               <div className="sticky_inner">
                 <div className="sticky_nav_left">
	                <div className="sticky_nav_text" >
	                <Link to="/">Home</Link> |
                    <a href="https://drive.google.com/file/d/1bspK2w0b-5O4OLwwhjNP9dk_IhpiLH7M/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                 </div>
                 <Link to="/">
                 <div className="sticky_logo" data-aos="fade-down">
                 <div className="myLogo">
                 <Lottie options={defaultOptions}
              height={100}
              width={100}
              isStopped={this.state.isStopped}
              isPaused={this.state.isPaused}
              speed={this.state.speed}
              onClick={() => this.setState({ isPaused: true })}
             
              />
              </div>


                 </div>
                 </Link>
                
                 <div className="sticky_nav_right">
	                <div className="sticky_nav_text" >
                    <Link to="/projects">Projects</Link> | 
                    <Link to="/contact">Contact</Link></div>
                 </div>
	            
	          </div>
             
	    </div>
       
      )
    }
  }

  AOS.init({
    duration : 1000,
    delay: 2000
  });
  
  export default Header;