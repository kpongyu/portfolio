import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './Smokefree.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class CivicLab extends Component {
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

			  <section className="smokefree-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/smokefree/smokefree-header-alt.webp" src="./assets/img/smokefree/smokefree-header.webp" className="hero-bg" />
		<Container>
       
        
	<div className="smokefree-header-content ">
    <img src="./assets/img/smokefree/smokefree-logo.webp" className="project-logo" alt="seed logo"/>
    <h1>Smokefree QuitGuide App</h1>
		<p >
		<strong>My Role</strong>: Interaction Designer, React-Native Developer<br/>
			<strong>Duration</strong>: 3 Years<br/>
			<strong>Deliverable</strong>: <br/>
			<a className="header-link" href="https://smokefree.gov/" target="_blank">smokefree.gov</a><br/>
			<a className="header-link" href="https://smokefree.gov/tools-tips/apps/quitguide" target="_blank">Smokefree QuitGuide App</a><br/>
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="smokefree-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >The largest quitting smoking platform for a diverse audience</h2>
		</Col>
		   <Col xs={12} md={7}  className="float-right" >
			
			<p >
			Smokefree.gov is the largest quit smoking platform sponsored by the National Cancer Institute. 
			It caters to a diverse audience and provides various solutions for quitting smoking. In 2017, 
			we redesigned the website to focus on four stages of the quitting process: "I want to quit," 
			"my quit day," "I recently quit," and "staying quit." We also added tips and resources to help 
			users during each stage. After considering the needs of users during the quitting journey, 
			we decided to create the QuitGuide app to serve as a personalized tracker in addition to the 
			information-based website.			
			</p>
		
					
			</Col>
			<Col xs={12} md={5} className="float-left">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/smokefree/smokefree-desktop-alt.webp" src="./assets/img/smokefree/smokefree-desktop.webp" className="img-fluid" />
			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="smokefree-bg section information-flow" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>A mobile app designed for the Smokefree journey.</h2>
			<p>We designed the QuitGuide app to follow the stages of the quitting journey outlined on our website. To emphasize the concept of a journey,
				 we used various metaphors within the app. The main screen of the app features a mountainous background that changes color to reflect the 
				 time of day, helping users connect the quitting journey with their daily lives. The app also includes a milestones-based journey screen 
				 that shows a path to the Smokefree Day and provides an award system to motivate users. This journey serves as the main thread that ties 
				 all the features of the app together, making it easy for users to understand and follow.
			</p>
			<p>By organizing the app around a journey structure, we were able to incorporate all of our existing content and features. One example is the 
				addition of two main call-to-action buttons on the home screen: "I was smokefree today" and "I smoked today." These allow users to track 
				their smokefree status each day and receive personalized challenges, tips, and inspirations based on their progress. The journey is advanced 
				through smokefree days, challenges completed, and tips followed. We also included quitting tutorials and emotion tracking tools to help users 
				monitor and improve their progress.
			</p>
			
			<LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/smmokefree/information-flow-alt.webp" src="./assets/img/smokefree/information-flow.webp" className="img-fluid image-within-content" />
			</Col>
			
			</Row>
		</Container>

		</section>


		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12}>
			<h2>An explanation of the different screens and their specific uses</h2>
			<p>After defining the main user flow, we further defined the specific behaviors and use cases for each screen within the journey. 
				For example, we outlined the initial onboarding screens for the app and identified specific scenarios such as what happens when 
				the user clicks the "smokefree" button within less than a day or how the screen appears at different times of the day. 
				These details may not be included in the overall journey definition, but they are important to consider during the development process.
			</p>
			
			
			</Col>
			<Col xs={12}>
							  <LazyLoadImage effect="blur" alt="UUser Behavior" placeholderSrc="./assets/img/smokefree/user-behavior-alt.webp" src="./assets/img/smokefree/user-behavior.webp" className="img-fluid" />
				
			</Col>
			</Row>
		</Container>

		</section>



		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		
		</Col>
		   <Col xs={12} md={5}>
							  <h2>Designing the flow for Smokelyzer testing</h2>
			<p>A unique feature of the app is the Smokelyzer testing, which allows users with a Smokelyzer device 
				to connect to the app via Bluetooth and view the testing results. This serves as proof of smokefree 
				days and is currently being tested as an add-on feature. We used illustrated instructions to guide 
				users through the process, which helps emphasize the necessary actions and fits with the overall 
				aesthetic of the app. The process is simplified into three steps to avoid confusion and includes a 
				secondary action for users to take in case of any issues.

			</p>
			
			
			
			</Col>
			<Col xs={12} md={7}>
			 <LazyLoadImage effect="blur" alt="Smokelyzer Screens" placeholderSrc="./assets/img/smokefree/smokelyzer-alt.webp" src="./assets/img/smokefree/smokelyzer.webp" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>









			  <section className="future-section section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Possibility of a cross-device platform in the future</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>Possible next steps for further integrating the Smokefree platforms include creating a cross-device 
				platform that allows users to track their progress on any internet-connected device and adding 
				social networking features to promote community support and interaction among users with similar 
				goals. The platform has the potential to become much more than just a website or app in the future, 
				with meaningful conversations and support taking place behind the scenes.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
							  <LazyLoadImage effect="blur" alt="Smokefree NRT Campaign" placeholderSrc="./assets/img/smokefree/future-alt.webp" src="./assets/img/smokefree/future.webp" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;