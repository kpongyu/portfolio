import React, { Component } from 'react'
import '../../css/style.css';
import 'react-bootstrap/dist/react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import AOS from 'aos'
import 'aos/dist/aos.css'
import Lottie from 'react-lottie'
import * as animationData from '../../components/logo.json'



class Header extends Component {

  constructor(props) {
    super(props)
    this.state = { isStopped: false, isPaused: false }
  }

  componentDidMount() {
    AOS.init({
      duration: 500,
      delay: 300
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
      speed: 1
    }


    return (

      <div className="sticky_outer">
        <div className="sticky_inner">
          <div className="sticky_nav_left">
            <div className="sticky_nav_text" >
              <Link to="/" className="navigation-link">Home</Link> |
              <a href="https://drive.google.com/file/d/14i6duOzqWAeRmEcVJ_8hwBZ36I_KLXf4/view" target="_blank" className="navigation-link">Resume</a>
            </div>
          </div>
         
            <div className="sticky_logo" data-aos="fade-down">
              <div className="myLogo">

              <Link to="/" className="navigation-link">
                <Lottie options={defaultOptions}
                  height={100}
                  width={100}
                  isStopped={this.state.isStopped}
                  isPaused={this.state.isPaused}
                  onClick={() => this.setState({ isPaused: true })}

                />
              </Link>
              </div>


            </div>
         

          <div className="sticky_nav_right">
            <div className="sticky_nav_text" >
              <Link to="/projects" className="navigation-link">Projects</Link> |
              <Link to="/contact" className="navigation-link">Contact</Link></div>
          </div>

        </div>

      </div>

    )
  }
}

export default Header