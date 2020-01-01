import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Socalren.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Lottie from 'react-lottie';
import Preloader from '../appshell/Preloader/Preloader';
import * as financingData from "../../public/assets/lottie/financing.json";
import * as publicAgenciesData from "../../public/assets/lottie/publicAgencies.json";
import * as residentialData from "../../public/assets/lottie/residential.json";
import * as workforceData from "../../public/assets/lottie/workforce.json";


class Socalren extends Component {


	
		

	handleLoad() {
		$('.preloader').addClass('active');
	
		setTimeout(function() {
		  $('.preloader').hide();
		}, 2500);
	  }

	constructor(props) {
		super(props);
		this.state = {spinner: true};
		this.state = {
			financingisStopped: true, financingisPaused: true, 
			publicAgenciesisStopped: true, publicAgenciesisPaused: true, 
			residentialisStopped: true, residentialisPaused: true, 
			workforceisStopped: true, workforceisPaused: true, 
			speed: 1};
	  
	  }
	  componentDidMount(){
		window.addEventListener('load', this.handleLoad);
		this.setState({
			speed: 1
		  })
	  }
  
    render() {

		const financingOptions = {
			loop: false,
			autoplay: true, 
			animationData: financingData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const publicAgenciesOptions = {
			loop: false,
			autoplay: true, 
			animationData: publicAgenciesData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const residentialOptions = {
			loop: false,
			autoplay: true, 
			animationData: residentialData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const workforceOptions = {
			loop: false,
			autoplay: true, 
			animationData: workforceData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
	
		setTimeout(() => {
			this.setState({ spinner: false });
		  }, 1000);


      return (

        <section>
{this.state.spinner ? <Preloader/> : true}
        <Row className="socalren-header">
        
	<div className="socalren-header-content">
    <img src="./assets/img/socalren/socalren-logo.png" className="socalren-logo" alt="socalren logo"/>
    <h1>Socalren Web Design and Development</h1>
		<p >
		<strong>My Role</strong>: Interaction Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 4 Months<br/>
			<strong>Delierable</strong>: <a href="https://socalren.org/"  target="_blank" className="header-link">socalren.org</a>
			
		</p>
        
		</div>
	
		
		</Row>

   



		<section className="section socalren-section" >
		<Container>
		<Row className="vcenter" >
		
		   <Col xs={12} md={7}  className="float-right" >
		   <h2 >New Visual Branding Establishment</h2>
			<p >
			SoCalREN, namely Southern California Regional Energy Network, worked with ICF to create a digital 
			campaign to broadcast the program and better reach out to their broad audience. There are generally four 
			major audience for the program, the residential consumers, the multifamily units, the financing sectors 
			and the public agencies that need to be included in the website. We selected "Echeveria", which is a regional 
			flower popular in Southern Califorlia, as the basis of our color palette, and selected four colors from the 
			natural photos to represent the different programs of SoCALREN.
				
				
			</p>
			<img src="./assets/img/socalren/color-palette.png" alt="color palette" className="img-fluid right-img image-within-content socalren-content-image"/>
					
			</Col>
			<Col xs={12} md={5} className="float-left">
				<img src="./assets/img/socalren/branding.png" alt="user-journey" className="img-fluid right-img"/>
			</Col>
			
			</Row>
		</Container>

		</section>
		

		<section className="section socalren-section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Mobile-First Design Approach</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		   
			<p >
			We start the web-developing process with mobile screen first, 
			since the four entrances of different projects are the major call-to-action of the homepage, 
			we created four cards and svg animations to interact with the users, the svg animations are simple and action based, 
			we are inspired by the metaphor of piano keys and make the four cards stick on the top of the mobile screen 
			when user scrolls down, so users can always get easy access to different programs.
				
				
			</p>

			<p >
			We implemented lots of micro-interactions to help create a delightful experience for users to 
			explore, we embedded the color patterns within the interactions and use line-based vectors to 
			create the animations, the animations are action-based, will only display when the user hover or touch 
			on the interaction area. To keep it subtle and interesting to explore, I used the 
			svg animations to realize the micro-interactions on the website.
				
				
			</p>
			
					
			</Col>
			<Col xs={12} md={7} className="float-left">
				<img src="./assets/img/socalren/mobile.png" alt="user-journey" className="img-fluid right-img"/>
			
			</Col>
			<Col xs={12} className="animatedIconsContainer">
			<div className="animatedIcons"  
			onMouseEnter={() => this.setState({ financingisPaused: false, financingisStopped: false })}  
			onMouseLeave={() => this.setState({ financingisPaused: true, financingisStopped: true})}>
				<Lottie options={financingOptions}
              height={150}
              width={150}
              isStopped={this.state.financingisStopped}
              isPaused={this.state.financingisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>


			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({publicAgenciesisPaused: false, publicAgenciesisStopped: false })}  
			onMouseLeave={() => this.setState({ publicAgenciesisPaused: true, publicAgenciesisStopped: true})}>
				<Lottie options={publicAgenciesOptions}
              height={150}
              width={150}
              isStopped={this.state.publicAgenciesisStopped}
              isPaused={this.state.publicAgenciesisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({ residentialisPaused: false, residentialisStopped: false })}  
			onMouseLeave={() => this.setState({ residentialisPaused: true, residentialisStopped: true})}>
				<Lottie options={residentialOptions}
              height={150}
              width={150}
              isStopped={this.state.residentialisStopped}
              isPaused={this.state.residentialisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({ workforceisPaused: false, workforceisStopped: false })}  
			onMouseLeave={() => this.setState({ workforceisPaused: true, workforceisStopped: true})}>
				<Lottie options={workforceOptions}
              height={150}
              width={150}
              isStopped={this.state.workforceisStopped}
              isPaused={this.state.workforceisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			</Col>
			</Row>
		</Container>

		</section>



		


		<section className="socalren-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}><h2>Development and deploying into Drupal Environment</h2></Col>
		   <Col xs={12} md={7} >
			
			<p>Following the same design pattern, we designed and developed the desktop 
			view of the interface, during the process, we highlighted the accessibility of the website, 
			as well as the responsive part of the site. We make use of the gradient overlay on the hero-image 
			section to tune-down the photos and create the consistent look and feel of the site, 
			on the form design and development, we created a progressive form submitting process to help guide users while 
			save spacing on different pages.</p>
			<p >We deploying the website using Drupal 8 CMS, we splitted the layout into different 
			functional modules and build the pages by setting up different modules. I worked closely with 
			the Drupal developer on the styling and implementation of the interactions for the modules, 
			and provided design and scripts for additional layout and functions throughout the way. 
			Below are some other content types we created for the website.</p>
			</Col>
			<Col xs={12} md={5}>
				<img src="./assets/img/socalren/socalren.png" alt="user-journey" className="img-fluid right-img"/>
			</Col>
			</Row>


			<Row className="vcenter" >
		
		   
		
			<div className="image-row">
			<div className="one-third-img">
			<img src="./assets/img/socalren/sample-1.png" alt="" className="img-fluid"/>
			</div>
			<div className="one-third-img">
			<img src="./assets/img/socalren/sample-2.png" alt="" className="img-fluid"/>
			</div>
			<div className="one-third-img">
			<img src="./assets/img/socalren/sample-3.png" alt="" className="img-fluid"/>
			</div>
			</div>
		
		</Row>
		</Container>

		</section>



	







    </section>
		
	
      
      )
    }
  }
  
  export default Socalren;