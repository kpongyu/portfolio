import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class repatriation extends Component {

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

  <Row className="hero-section d-flex position-relative align-items-center">
				<Container>
					<Row>
						<div className="col-12 col-md-6 hero-content">

								<img src="./assets/img/repatriation/repatriation-logo.svg" className="project-logo" alt="ACF Repatriation logo"/>
							<h1>ACF Repatriation Technical Assistance Center</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Designer</p>
							<p className="mb-0"><strong>Duration</strong>: 2 Years</p>
							<p><strong>Deliverables</strong>: <a href="https://repatriation.acf.gov/" target="_blank">repatriation.acf.gov</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/repatriation/repatriation-hero-alt.webp" 
							src="./assets/img/repatriation/repatriation-hero.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>





		
	<section className=""  >
		<Container>
			<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >A website for two different audiences</h2>
			 <p >
			The ACF Repatriation Technical Assistance Center website serves two distinct audiences. For state Repatriation Coordinators, it provides comprehensive training and technical assistance to help them effectively support repatriation programs. 
			The site offers trusted, up-to-date resources that clearly explain the repatriation process, enabling coordinators to collaborate, manage cases, and navigate policy challenges with confidence. 
			For the general public, particularly repatriates themselves, the site serves as an accessible information hub. Through carefully curated knowledge resources on the public-facing pages, individuals can easily understand the OHSEPR repatriation process and next steps. 
			The site started with the aim to empower both coordinators and repatriates, ensuring coordinators have the tools they need to help others while making repatriates feel supported and informed throughout their journey.

			 </p>

			 <p>Our design process began with creating mood boards to establish distinct yet appropriate tones for our two target audiences. 
				For state coordinators, we focused on conveying professionalism and support through themes of empathy, organization, attention to detail, resilience, and compassion. 
				For repatriates, we crafted a more personal tone centered around hope, healing, empowerment, respect, and connection to home. 
				We carefully selected colors from the ACF brand palette to visually distinguish these two experiences while maintaining consistency. 
				The mood boards also included curated image collections that would resonate with each audience's unique needs and perspectives.</p>

			
					 
			
			 </Col>
			 <Col xs={12} md={6} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/mood-board-coordinator-alt.webp" src="./assets/img/repatriation/mood-board-coordinator.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Mood Board for Coordinators</p>
			 </Col>
			  <Col xs={12} md={6} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/mood-board-repatriate-alt.webp" src="./assets/img/repatriation/mood-board-repatriate.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Mood Board for Repatriates</p>
			 </Col>
			
			 
			 </Row>
			 </Container>
			 </section>

<section className="section2"  >
		<Container>
			 			<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Evolving the Homepage Design through the Changing Focus</h2>
			 <p >
			After finalizing our design direction, we began developing the homepage with inspiration from Uber's multi-audience approach. Like Uber's site that seamlessly serves drivers, riders, and Uber Eats customers through tabbed navigation with audience-specific hero images and content, our initial design featured separate tabs for coordinators and repatriates, each with tailored visuals and information.

			However, as content development progressed, we discovered a significant imbalance between the two audience needs. We realized our primary focus needed to be on coordinators, specifically driving them to register for training courses. This insight led us through several design iterations, ultimately landing on a streamlined approach that prioritizes registration and contact information at the top. The main website functions are organized in clear sections below, while a dedicated information box guides repatriates to relevant external resources.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/homepage-version1-alt.webp" src="./assets/img/repatriation/homepage-version1.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Version 1</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/homepage-version2-alt.webp" src="./assets/img/repatriation/homepage-version2.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Version 2</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/homepage-version3-alt.webp" src="./assets/img/repatriation/homepage-version3.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Version 3</p>
			 </Col>
			 
			 </Row>
		
			
		</Container>
	</section>
   



		<section className="fatherhood-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Public Experience and Login Experience</h2>
			 <p >
			The website features two distinct user experiences based on authentication status. The public-facing experience provides visitors with a general overview of available trainings, resources, and frequently asked questions. While non-authenticated users can access some training content, the full course management functionality is restricted.

			Upon logging in, users gain access to an enhanced experience with personalized profiles that track completed courses and provide comprehensive access to all resources and training materials. This dual-path approach, though focused on coordinator needs, required us to design two versions of each page template - one for public access and another for authenticated users.

			The authenticated experience includes a dedicated learning management system where users can register for courses, explore available content, and monitor their training progress over time.

			 </p>

			
			
					 
			
			 </Col>
			 <Col xs={10} className="pt-2 float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/public-path-alt.webp" src="./assets/img/repatriation/public-path.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Public Path</p>
			 </Col>
			  <Col xs={12} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/repatriation/login-path-alt.webp" src="./assets/img/repatriation/login-path.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Login Path</p>
			 </Col>
			
			 
			 </Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default repatriation;