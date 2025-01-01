import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import '../css/style.css';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class Amazon extends Component {

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

        <div>
  {this.state.spinner ? <Preloader/> : true}
	
        <Row className="hero-section d-flex position-relative align-items-center">
				<Container>
					<Row>
						<div className="col-12 col-md-6 hero-content">
							<img src="./assets/img/amazon/amazon_logo.webp" className="project-logo" alt="amazon logo"/>
							<h1>Designing a mobile card system for Amazon</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: User Experience Designer, Visual Designer</p>
							<p><strong>Duration</strong>: 3 Months</p>
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadComponent effect="blur" height="100%" width="100%" placeholderSrc="./assets/img/amazon/poster.webp">
							<video id="background-video" loop autoPlay playsInline className="title-video" poster="./assets/img/amazon/poster.webp">
								<source src="./assets/img/amazon/amazon.mp4" type="video/mp4" />
							</video>        
						</LazyLoadComponent>
					</div>
				</div>

		</Row>
	


		



   
		<section className="section1 section">
    <Container>
		<Row className="vcenter" >
		   <Col xs={12} md={6} >
			<h2>A card system based on customer behavior</h2>
			<p>While interning at Amazon, I contributed to the design of a card-based system for the company's mobile app 
				in order to encourage customers to discover and interact with more Amazon services and products, increase engagement, 
				and spend more time on the platform.</p>
			<p>I began by conducting interviews with various stakeholders, including project managers, customers, and developers, 
				to determine the content and structure of the card system. Through this process, we identified three key points:</p>
			<ul>
				<li>Customers have certain preferences for what they would like to see and use in their daily lives based on their surroundings.</li>
				<li>The order in which cards are presented is important, as customers generally prefer to see the most pressing and important items first.</li>
				<li>The system should be able to adapt and learn from customers' unique preferences.</li>
				
			</ul>
			</Col>
			<Col xs={12} md={6} className="section-media-container">
			<LazyLoadImage effect="blur" alt="user-journey" placeholderSrc="./assets/img/amazon/user-journey-alt.webp" src="./assets/img/amazon/user-journey.webp" className="img-fluid right-img" />
			
			</Col>
		</Row>
		</Container>
	    </section>
		

      <section className="section2 section" >
      <Container>
		<Row className="vcenter" >
    <Col xs={12} md={8} >
			<h2>The evolution of comparison card</h2>
			<p>The comparison card exemplifies the full design process, from the initial idea to user testing. 
				The image below illustrates the transformation of the card from an abstract idea to a refined 
				final product, including the call-to-action field and minor style adjustments to reflect different 
				states, as well as providing immediate feedback to users when they interact with the card. You can 
				experiment with the prototype to see how it functions with users.</p>
			
			 <LazyLoadImage effect="blur" alt="past versions" placeholderSrc="./assets/img/amazon/past-alt.webp" src="./assets/img/amazon/past.webp" className="img-fluid right-img" />
			</Col>
      <Col xs={12} md={4} >
		  	<LazyLoadComponent effect="blur" height="320" width="600">
	  <Iframe url="./assets/img/amazon/compare.html"
        width="320"
        height="600"
        id="myId"
        className="GPFrame"
        display="initial"
        position="relative"
		
		/>
		</LazyLoadComponent>
			</Col>
		</Row>
    </Container>
	</section>




  <section className="section cd-fixed-background amazon-fixed-bg" style={{backgroundImage: `url(require(".assets/img/amazon/img-4.webp"))`}}>
		<Row className="cd-content shadow-box">
		
			<h2 className="white-title">A scalable system to generate cards</h2>
			<p className="white-title">During my internship, I created a dozen types of cards at various stages of development. These cards were sorted into six main categories (time, location, social, events, status, and surroundings) to align with the context of the users and their behavior patterns, and can be utilized in various circumstances.
			</p>
			<blockquote className="white-title">
				"You demonstrated an ability to Think Big and generate a large number of unique and interesting card 
        concepts. You particularly impressed me with your ability to turn your ideas into scalable systems. 
        A particularly abstract concept which you were able to componentize and organize into a simple framework."
				<br/><span>&mdash;David Cole, Principle UX Lead, Amazon Homepage</span>
			</blockquote>
		
		</Row>
	</section>







    </div>
		
	
      
      )
    }
  }
  
  export default Amazon;