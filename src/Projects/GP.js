import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './ROTC.css';
import './GP.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';




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
<Row className="cd-header">
    <video id="background-video" loop autoPlay playsInline className="title-video">
                <source src="./assets/img/georgia-power/gp-header.mp4" type="video/mp4" />
               
    </video>        
	<div>
    <img src="./assets/img/georgia-power/logo.png" className="project-logo gp-logo" alt="GP logo"/>
    <h1>GPC Lighting Calculator</h1>
		<p className="amazon-header">
			<strong>My Role</strong>: User Experience Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 2 Months<br/>
			<strong>Deliverable</strong>: <a className="header-link" href="https://www.georgiapower.com/lighting" target="_blank">georgiapower.com/lighting</a>
		</p>
        
		</div>
	
		
		</Row>

		<section className="gp-section section" >
		<Container>
		<Row className="vcenter" >
     <Col xs={12}>	<h2>A Calculator to display energy-saving directly</h2></Col>
		   <Col xs={12} md={7} >
		
			<p>We helped Georgia Power to come up with and build a concept to present 
      the savings of using LED bulbs for residence, we came up with the idea to 
      use the lighting from windows to present the energy-saving, the more LED 
      bulb purchased, the more energy saves, and the lighter the windows would be. 
      We came up with two design approaches to illustrate the idea. One with 
      realistic photos of typical housing in Georgia, one with vector styles, 
      and we finally picked the realistic solution since it matches the Georgia 
      Power styles better, and we can help engage users when represent inner 
      settings of the housing. When user drag the slider, the lightings inside 
      each window of the house would change, and the yearly and lifetime savings 
      number would update simultaneously</p>
			</Col>
			<Col xs={12} md={5}>
				<img src="./assets/img/georgia-power/options.png" alt="user-journey" class="img-fluid right-img"/>
			</Col>
			</Row>
	
		<Row className="vcenter" >
    
		   <Col xs={12} md={7} >
       <h2>Desktop Interface Design and Development</h2>
			<p>The desktop version of the Calculator is in two columns, with the interaction (input) area on the 
      left side and the Output area on the right. The numbers and the interactive graphics are seperated 
      so they won't influence each other. I used a pulse animation as an indicator to help guide users 
      to move the slider.</p>
        <p>
      The interface is developed through Canvas, the JQuery moveover function on the slider would triggar 
      the canvas to redraw the interactive area each time when user moves the slider. The Alpha Value of 
      each window is dynamic based on the number of LED bulbs, which influence the transparency of the windows, 
      the higher the transparency is, the lighter the window displays.</p>
			</Col>
			<Col xs={12} md={5}>
				<img src="./assets/img/georgia-power/desktop.png" alt="desktop interface" class="img-fluid right-img"/>
			</Col>
			</Row>

      <Row className="vcenter" >
    
    <Col xs={12} md={7} >
    <h2>Mobile Interface Design and Development</h2>
   <p>The interface adjusted when the screen size getting smaller, from a left-right layout to an up-down layout, 
   I adjusted the sequence of each section to difine the different touch target for the mobile screen. One is to put 
   the saving numbers from behind the slider to above the slider. Since when user touch the slider, the hand would hide 
   the content that behind the slider. I also put the animated graphics and the saving numbers together on the middle part 
   of the screen, since they are where the attentions would be on.</p>
   
   </Col>
   <Col xs={12} md={5}>
     <img src="./assets/img/georgia-power/mobile.png" alt="mobile interface" class="img-fluid right-img"/>
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