import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Wydot.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


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
			  <section className="wydot-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/wydot/wydot-header-alt.jpg" src="./assets/img/wydot/wydot-header.jpg" className="hero-bg" />
		<Container>
       
        
	<div className="wydot-header-content ">
    <img src="./assets/img/wydot/wydot.png" className="project-logo wydot-logo" alt="seed logo"/>
    <h1>WYDOT Connected Vehicle Pilot Project</h1>
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
			I am responsible for the design and development of the website for the Wyoming Department of 
			Transportation's (WYDOT) Connected Vehicle Pilot campaign. This campaign is aimed at promoting 
			the connected vehicle project, which involves the installation of a sensor-based system on Highway 
			80 in Wyoming to allow vehicles to connect with the control center and each other. The campaign materials 
			include social media posts, videos, infographics, and the website. The connected vehicle project is one 
			of three pilot projects in the country.
			 </p>
					 
			 <p >
			The project involved a thorough discussion on the information architecture and how to present all of the 
			information to the public. As a result, we created an infographic to guide the logical sequence of the project. 
			This infographic begins by discussing the current challenges on the highway and the consequences they have caused. 
			It then explains how the Connected Vehicle Pilot project can address these challenges and how vehicles and utilities 
			can implement the necessary changes. For the website, we modified the sequence to prioritize the solutions and their 
			effects, and to provide a space for events and news updates.
			 </p>
			 </Col>
			 <Col xs={12} md={5} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/wydot/infographic-alt.png" src="./assets/img/wydot/infographic.png" className="img-fluid" />

			 </Col>
			 
			 </Row>
		
			 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >Web Development and Micro-interaction</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		   
			<p >
			As the major developer of the website, I used the Bootstrap grid system and added various micro-interactions 
			to make the website more engaging and visually appealing. The hero image rotates in a gradient manner to maintain 
			a cool visual effect on the website, and we also implemented a rotating transition as the onboarding animation. 
			For other sections of the website, we created a filtering feature to categorize different materials and keep the page 
			organized. On the research subpage, we utilized a card-based grid system and added a 3D transition effect to the cards, 
			allowing users to easily flip through and view the details. A demo of the research subpage is shown as follows:
				
				
			</p>

		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			<LazyLoadComponent effect="blur"  placeholderSrc="./assets/img/wydot/wydot-poster.jpg">
				<video loop autoPlay className="responsive-video" poster="./assets/img/wydot/wydot-poster.jpg" >
                <source src="./assets/img/wydot/micro-interaction.mp4" type="video/mp4" />
               
    		</video> 
			</LazyLoadComponent>
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
			The project has received positive feedback from both the client and media. The company has also created a webpage to showcase the project as a successful example of a digital campaign. Additional client stories about the project can be found in the &nbsp;
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
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/wydot/recognition-alt.png" src="./assets/img/wydot/recognition.png" className="img-fluid" />
				
			</Col>
			
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default Wydot;