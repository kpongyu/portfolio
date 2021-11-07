import React, { Component } from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import "./LandingHead.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

class LandingHead extends Component {



     render() {
          return (
               <div className="landingHead">
                    <ParallaxProvider>
                         <Parallax y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-frame">
                              <LazyLoadImage effect="blur" placeholderSrc="./assets/img/homepage/background1-alt.jpg" src="./assets/img/homepage/background1.jpg" className="img-fluid frame hero-bg" />
                         </Parallax>
                         <Parallax y={[-25, 0]} tagOuter="figure" className="landingHead-me">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/me.png" placeholderSrc="./assets/img/homepage/me-alt.png" className="img-fluid" />
                         </Parallax>
                         <Parallax y={[0, 0]} x={[-50, 0]} tagOuter="figure" className="landingHead-dragon">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/dragon.png" placeholderSrc="./assets/img/homepage/dragon-alt.png" className="img-fluid" />
                         </Parallax>
                         <Parallax y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-frame">
                              <LazyLoadImage effect="blur" src="./assets/img/homepage/background.png" placeholderSrc="./assets/img/homepage/background-alt.png" className="img-fluid frame" />
                         </Parallax>
                         <Parallax tagOuter="figure" className="landingHead-ball">
                              <Link to="/projects">
                                   <LazyLoadImage effect="blur" src="./assets/img/homepage/ball.png" placeholderSrc="./assets/img/homepage/ball-alt.png" className="ball-image img-fluid" />
                              </Link>
                         </Parallax>
                    </ParallaxProvider>
               </div>
          )
     }
}

export default LandingHead