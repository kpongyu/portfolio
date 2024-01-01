import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './ROTC.css';
import './GP.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class GP extends Component {
	handleLoad() {
		$('.preloader').addClass('active');
	
		setTimeout(function() {
		  $('.preloader').hide();
		}, 2500);
	  }

	constructor(props) {
		super(props);
		this.state = {spinner: true}
	  
	  }
	  componentDidMount(){
		window.addEventListener('load', this.handleLoad);
	  
	  }
  
    render() {

      setTimeout(() => {
        this.setState({ spinner: false });
        }, 1000);
  
      return (

        <section>
{this.state.spinner ? <Preloader/> : true}
<Row className="cd-header gp-header">
            <LazyLoadComponent effect="blur" height="500px" width="100%" placeholderSrc="./assets/img/georgia-power/gp-poster.webp">
              <video id="background-video" loop autoPlay playsInline className="title-video" poster="./assets/img/georgia-power/gp-poster.webp">
                <source src="./assets/img/georgia-power/gp-header.mp4" type="video/mp4" />         
    </video>        
    </LazyLoadComponent>
	<Container>
    <img src="./assets/img/georgia-power/logo.webp" className="project-logo gp-logo" alt="GP logo"/>
    <h1>GPC Lighting Calculator</h1>
		<p className="amazon-header">
			<strong>My Role</strong>: User Experience Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 2 Months<br/>
			<strong>Deliverable</strong>: <a className="header-link" href="https://www.georgiapower.com/lighting" target="_blank">georgiapower.com/lighting</a>
		</p>
        
		</Container>
	
		
		</Row>

		<section className="gp-section section" >
		<Container>
		<Row className="vcenter" >
     <Col xs={12}>	<h2>A calculator that displays energy savings directly</h2></Col>
		   <Col xs={12} md={7} >
		
			<p>We assisted Georgia Power in creating and developing a concept for demonstrating the energy 
        savings of using LED bulbs for homes. Our idea was to use the lighting from windows to visually 
        represent the energy savings, with the more LED bulbs purchased resulting in greater energy savings 
        and lighter windows. We developed two design approaches to convey this concept, one using realistic 
        photographs of typical houses in Georgia and the other using vector graphics. We ultimately selected 
        the realistic approach as it matched Georgia Power's style better and allowed us to more effectively 
        engage users by depicting the interior of the houses. When users interact with the slider, the lighting 
        in each window of the house would change and the yearly and lifetime savings would be updated accordingly.</p>
			</Col>
			<Col xs={12} md={5}>
       <LazyLoadImage effect="blur" placeholderSrc="./assets/img/georgia-power/options-alt.webp" src="./assets/img/georgia-power/options.webp" className="img-fluid" />
		
			</Col>
			</Row>
	
		<Row className="vcenter" >
    
		   <Col xs={12} md={7} >
       <h2>Design and development of a desktop interface</h2>
			<p>The design of the desktop version of the calculator is split into two columns, 
        with the input area on the left and the output area on the right. The numbers and interactive graphics are separated 
        to avoid interference. I also implemented a pulse animation to guide users in moving the slider.</p>
        <p>
      The interface was created using Canvas. The JQuery moveover function on the slider triggers the canvas to redraw the 
      interactive area each time the user moves the slider. The transparency of each window, represented by the alpha value, 
      is dynamic and based on the number of LED bulbs purchased, which affects the lightness of the window display. The higher 
      the transparency, the lighter the window appears.



</p>
			</Col>
			<Col xs={12} md={5}>
       <LazyLoadImage effect="blur" placeholderSrc="./assets/img/georgia-power/desktop-alt.webp" src="./assets/img/georgia-power/desktop.webp" className="img-fluid" />

			</Col>
			</Row>

      <Row className="vcenter" >
    
    <Col xs={12} md={7} >
    <h2>Design and development of the mobile interface</h2>
   <p>The interface was designed to adjust when the screen size becomes smaller, changing from a left-right layout to an up-down 
    layout. I rearranged the sequence of each section to define distinct touch targets for mobile screens. One change was to move 
    the saving numbers from behind the slider to above it, as the hand may obstruct the content when the slider is touched. I also 
    placed the animated graphics and saving numbers in the middle of the screen, as this is where user attention is likely to be focused.</p>
   
   </Col>
   <Col xs={12} md={5}>
     <LazyLoadImage effect="blur" placeholderSrc="./assets/img/georgia-power/mobile-alt.webp" src="./assets/img/georgia-power/mobile.webp" className="img-fluid" />

   </Col>
   </Row>
		</Container>

		</section>

   
	

	

	
	
		

	

		<section className="section gp-fixed-bg" >
		<Container>
		<Row className="vcenter" >
		<Iframe url="./assets/img/georgia-power/gp-interactive/index.html"
        width="100%"
        height="500"
        id="myId"
        className="GPFrame"
        display="initial"
        position="relative"/>
		</Row>
		</Container>

		</section>











    </section>
		
	
      
      )
    }
  }
  
  export default GP;