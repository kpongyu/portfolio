import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Wydot.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';



class Wydot extends Component {

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
		<section className="wydot-header">
		<Container>
       
        
	<div className="wydot-header-content ">
    <img src="./assets/img/wydot/wydot.png" className="project-logo wydot-logo" alt="seed logo"/>
    <h1>Seed Application Design</h1>
		<p >
		<strong>My Role</strong>: Web Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 3 Months<br/>
			<strong>Client</strong>: <a className="header-link" href="https://wydotcvp.wyoroad.info/" target="_blank">wydotcvp.wyoroad.info</a>
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>

		
	<section className="wydot-section"  >
		<Container>
		<Row className="vcenter" >
			
			<Col xs={12} md={7}  className="float-right" >
			 <h2 >From Infographic to Landing Page</h2>
			 <p >
			 WYDOT Connected vehicle pilot is the campaign to help promote the 
			 connected vehicle project for Wyoming Department of Transportation, 
			 which build a sensor-based system on the highway 80 across Wyoming 
			 to help vehicles get connected with the control center and each other, 
			 and is one of the three pilot project in the nation. The campaign 
			 composed of a variety of different materials, including social media, 
			 videos, infographics and website, I'm the major design and developer 
			 for the website of the project.
			 </p>
					 
			 <p >
			 The project goes through a long discussion on the information architecture, 
			 and how to present all the information to the public, we come up with a infographic 
			 to help guide the logic sequence of the project, start with the current challenges 
			 on the high-way, and presented some consequences the challenges caused, then we 
			 discussed how the Connected Vehicle Pilot project can solve the challenges, and 
			 how the vehicles and utilities can implement the changes. We adjusted the sequence 
			 when it comes to webpage, to highlight the solutions and their effects, and provide 
			 interface for events and news.
			 </p>
			 </Col>
			 <Col xs={12} md={5} className="float-left">
				 <img src="./assets/img/wydot/infographic.png" alt="user-journey" class="img-fluid right-img"/>
			 </Col>
			 
			 </Row>
		
			 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >Web Development and Micro-interaction</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		   
			<p >
			I'm the major developer of the website, following the Bootstrap grid system, 
			we included lots of micro-interactions to make the website more vivid and attractive. 
			The hero-image rotate in a gradient way to keep the cool visual effects of the website, 
			we adapted a cool rotating-transition as the onboarding animation. For the other sections, 
			we created a filter section to categorize different materials and keep the page tight,
			in the research sub-page, we adapted the card-based grid system plus the 3d transition of the 
			cards to help guide user flip through the card to see the details. A demo of the research subpage
			is as follows:
				
				
			</p>

		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			
				<video  loop autoPlay className="responsive-video" >
                <source src="./assets/img/wydot/micro-interaction.mp4" type="video/mp4" />
               
    		</video> 
			</Col>
			
			</Row>
		
		
	
		</Container>
	</section>
   



		<section className="wydot-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Media Recognition of Project</h2>
		</Col>
		   <Col xs={12} md={6}  className="float-right" >
			
			<p >
			The project has received great feedback from both the client and media, 
			the company also set up a webpage to highlight the project as one of the examples 
			of digital campaign, more client story of the project can be found in the &nbsp;
			<a href="https://www.icf.com/clients/transportation/wydot" target="_blank" className="wydot-link">case study</a>.
				
				
			</p>
			<blockquote><p>
			There’s a real need for improved safety on the I-80 corridor through Wyoming. 
			We know that we’re not going to be able to stop every crash from happening with 
			this technology, but we do hope to reduce the numbers.”
			</p>
					 <span>&mdash;Ali Ragan, Communications Officer, WYDOT</span>
					 
					 </blockquote>		
					
			</Col>
			<Col xs={12} md={6} className="float-left">
				<img src="./assets/img/wydot/recognition.png" alt="recognition" class="img-fluid right-img"/>
			</Col>
			
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default Wydot;