import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './DTE.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class dte extends Component {

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
			  <section className="dte-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/dte-hero-alt.jpg" src="./assets/img/dte/dte-hero.jpg" className="hero-bg" />
		<Container>
       
        
	<div className="dte-header-content ">
    <img src="./assets/img/dte/dte-logo-update.png" className="project-logo dte-logo" alt="DTE logo"/>
    <h1>Online Intake Tool Redesign</h1>
		<p >
		<strong>My Role</strong>: Web Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 5 Months<br/>
			<strong>Client</strong>: <a  href="https://rebates.dteenergy.com/Rebate/Eligibility/Check/c8b73b23-1c05-4ce2-aa00-6dffd3226e13" target="_blank">rebates.dteeneergy.com</a>
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>

		
	<section className="dte-section"  >
		<Container>
		<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Redesigning the Three User Flows for DTE Rebate Selection</h2>
			 <p >
			We collaborated with DTE to redesign the interface and user flow for selecting rebates that are applicable to customers. The rebates available 
			to a user depend on various factors such as whether they are a DTE customer, the type of fuel they use, and the type of building they live in. 
			Additionally, the way in which a user discovers rebates also plays a role. For example, some users may come directly to the rebate page after logging in, 
			in which case the system has already checked their criteria and the rebate should be automatically available for them to apply (Approach 3). 
			Other users may select a broad category of rebates, such as insulation, but still need to select from sub-categories before starting the application process (Approach 2). 
			And, some users may not know which rebates they may qualify for, so we allow them to provide their current criteria and then provide them with the applicable rebates, 
			which might be multiple (Approach 1). To accommodate these different user flows, we created a landing page for the three approaches and began the redesign process from there.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/access-1-alt.jpg" src="./assets/img/dte/access-1.jpg" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Rebate Selection Approach 1</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/access-2-alt.jpg" src="./assets/img/dte/access-2.jpg" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Rebate Selection Approach 2</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/access-3-alt.jpg" src="./assets/img/dte/access-3.jpg" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Rebate Selection Approach 3</p>
			 </Col>
			 
			 </Row>
		
		<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Designing a User Flow for Selecting Multiple Eligible Rebates</h2>
			 <p >
		We focused on creating a user flow that allows customers to select multiple rebates. Users will land on 
		the page when they choose "All Rebates" in the main page or select "get more rebates" after applying for one rebate. 
		The landing page is divided into two parts: the first step/part asks the user to provide basic criteria such as their fuel type,
		 building type, etc. The second part displays applicable rebates in a card layout and updates based on the user's input in the first part. 
		 If a user has already applied for one rebate or is in the process of applying for a rebate and goes back to the landing page, the first step 
		 will be locked to avoid conflicting criteria. After the user selects the rebate they want to apply for, they will go through a five-step process 
		 to provide their information and supporting materials for the application. We have included a few check points throughout the process to ensure 
		 that the user double-checks their input and that we don't lose their progress. The user can return to apply for more rebates after completing the 
		 application and can review their application progress. They can apply for more rebates that fall under the same criteria but cannot change the criteria 
		 they previously provided.




			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/multi-path-alt.png" src="./assets/img/dte/multi-path.png" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Key Screens for Multiple Rebates Path</p>
			 </Col>
			
			 
			 </Row>		



			 <Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Designing a User Flow for Selecting a Single Eligible Rebate</h2>
			 <p >
		When it comes to the Single Rebate Path, the user will arrive at this state by selecting a specific rebate or type of rebate 
		from a dedicated rebate page. If it is for a specific rebate, we only need to check the user's eligibility and the landing page will 
		only contain the first part. However, if it is a type of rebate such as insulation, the user will still need to pick which sub-rebate 
		they want to apply for, so the second part of the landing page will still be present but will only include rebates that fall within the 
		category of the selected rebate. In both cases, we won't have to worry about additional sub-categories after the user passes the landing page. 
		The user can then proceed to a similar five-step process to provide their information and supporting materials and apply for more rebates that 
		are applicable after submitting their application for the current rebate.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/single-path-alt.png" src="./assets/img/dte/single-path.png" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Key Screens for Single Rebate Path</p>
			 </Col>
			
			 
			 </Row>		


			<Row className="vcenter" >
			
			<Col xs={12} md={6} className="float-right" >
			 <h2 >Creating a Pattern Library for Consistent Web Design: Outcome of OIT Tool Redesign</h2>

			 <p>One of the most significant accomplishments that was achieved during the redesign process of the OIT tool, was the development of a comprehensive pattern library 
				for the client. This library serves as a valuable resource for creating consistent and efficient web design across different pages within the client's website. 
				The pattern library is a collection of reusable design elements, such as layout, typography, color schemes, and interactions, that can be easily implemented in 
				various parts of the website. By using these patterns, we were able to save a significant amount of time in the design and development process, while also ensuring 
				that the website is cohesive and visually pleasing.</p>
			 <p >
			An example of how this pattern library was used to improve the user experience is the  <a href="https://dte-fac.icfwebservices.com/?_ga=2.34361889.1252677729.1673744453-772873392.1673744453&_gl=1*154d8qz*_ga*NzcyODczMzkyLjE2NzM3NDQ0NTM.*_ga_J2R5W9DWE4*MTY3Mzc0NzQyOC4yLjAuMTY3Mzc0NzQyOC4wLjAuMA..">Energy Efficiency Directory </a>
			we created for the client. This directory has a layout and style that is closely aligned with the OIT tool, and the user can easily select contractors based on criteria provided. 
			By utilizing the pattern library, we were able to create a directory that is intuitive and user-friendly, and it also blends seamlessly with the rest of the website. 
			This pattern library not only helped us to create a better user experience but also helped the client to maintain consistency across their website. 
			This is a great achievement for the client as it will help them to save time and resources in the future, by using similar patterns for other web pages within the same client, 
			which will also make it consistent across different pages.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={6} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/dte/eed-alt.jpg" src="./assets/img/dte/eed.jpg" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Energy Efficiency Directory</p>
			 </Col>
			
			 
			 </Row>		
	
	
		</Container>
	</section>
   




		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default dte;