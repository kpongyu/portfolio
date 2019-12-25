import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './Amazon.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';




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
        <Row className="cd-header">
    <video id="background-video" loop autoPlay playsInline className="title-video">
                <source src="./assets/img/amazon/amazon.mp4" type="video/mp4" />
               
    </video>        
	<div>
    <img src="./assets/img/amazon/amazon_logo.png" className="project-logo" alt="amazon logo"/>
    <h1>	Mobile Card System Design</h1>
		<p className="amazon-header">
			<strong>My Role</strong>: User Experience Designer, Visual Designer<br/>
			<strong>Duration</strong>: 3 Months<br/>
			
		</p>
        
		</div>
	
		
		</Row>



   
		<section className="section1 section">
    <Container>
		<Row className="vcenter" >
		   <Col xs={12} md={6} >
			<h2>I structured a customer behavior based card system</h2>
			<p>I helped design a card-based system for Amazon's mobile website to encourage customers to explore more Amazon services and products, make more engagements and spend more time on it.</p>
			<p>I started by interviewing different stakeholders, including project managers, customers, and developers to see what should we put into the card system and what the structure of the system would be like, we came up with 3 keypoints in the end</p>
			<ul>
				<li>There is a pattern of what customers would like to see and use during people's daily lives.</li>
				<li>The sequence of cards are critial, people would like to see the most urgent and important items at the very beginning.</li>
				<li>The system should have the learnablity to be adapted to customer's unique preference.</li>
				
			</ul>
			</Col>
			<Col xs={12} md={6} className="section-media-container">
			<img src="./assets/img/amazon/user-journey.png" alt="user-journey" className="img-fluid section-image"/>
			</Col>
		</Row>
		</Container>
	    </section>
		

      <section className="section2 section" >
      <Container>
		<Row className="vcenter" >
    <Col xs={12} md={8} >
			<h2>The evolution of comparison card</h2>
			<p>The comparison card is a typical example which goes through the whole design circle from brainstorming to user testing. The image below presents how the card evolutes
			from a abstract idea to a polished card, you can play with the prototype to see how it interact with the user.</p>
			<img src="./assets/img/amazon/past.png" alt="past version" className="img-fluid"/>
			
			</Col>
      <Col xs={12} md={4} >
	  <Iframe url="./assets/img/amazon/compare.html"
        width="320"
        height="600"
        id="myId"
        className="GPFrame"
        display="initial"
        position="relative"/>
			</Col>
		</Row>
    </Container>
	</section>




  <section className="section cd-fixed-background amazon-fixed-bg" style={{backgroundImage: `url(require(".assets/img/amazon/img-4.jpg"))`}}>
		<Row className="cd-content shadow-box">
		
			<h2 className="white-title">A scalable system to generate cards</h2>
			<p className="white-title">Hundreds of different types of cards are generated during my internship, and in different stages. 
			Six major catagories (time, location, social, events, status, and surroundings) are generated to match the card to the context of the users.
			</p>
			<blockquote className="white-title"><p>
				"You demonstrated an ability to Think Big and generate a large number of unique and interesting card 
        concepts. You particularly impressed me with your ability to turn your ideas into scalable systems. 
        A particularly abstract concept which you were able to componentize and organize into a simple framework."</p>
				<span>&mdash;David Cole, Principle UX Lead, Amazon Homepage</span>
			</blockquote>
		
		</Row>
	</section>







    </div>
		
	
      
      )
    }
  }
  
  export default Amazon;