import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import "./LandingHead.css";


class LandingHead extends Component {


  
    render() {
      return (
        <div className="landingHead">
        <ParallaxProvider>
        <Parallax  y={[0, 0]} tagOuter="figure" className="landingHead-background">
            <img src="./assets/img/homepage/background1.jpg" className="img-responsive" />
       </Parallax>
        <Parallax  y={[-25, 0]} tagOuter="figure" className="landingHead-me">
            <img src="./assets/img/homepage/me.png" className="img-responsive" />
       </Parallax>
       <Parallax  y={[0, 0]} x={[-50, 0]} tagOuter="figure" className="landingHead-dragon">
            <img src="./assets/img/homepage/dragon.png" className="img-responsive" />
       </Parallax>
       <Parallax  y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-frame">
            <img src="./assets/img/homepage/background.png" className="img-responsive" />
       </Parallax>
       <Parallax  y={[0, 0]} x={[0, 0]} tagOuter="figure" className="landingHead-ball">
            <img src="./assets/img/homepage/ball.png" className="ball-image" />
       </Parallax>
        </ParallaxProvider>
        </div>
      )
    }
  }
  
  export default LandingHead;