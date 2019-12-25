import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './Smokefree.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';




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
<section className="smokefree-header">
		<Container>
       
        
	<div className="smokefree-header-content ">
    <img src="./assets/img/smokefree/smokefree-logo.png" className="project-logo" alt="seed logo"/>
    <h1>Smokefree Web System</h1>
		<p >
		<strong>My Role</strong>: Web Developer, Web Designer<br/>
			<strong>Duration</strong>: 1 Year<br/>
			<strong>Deliverable</strong>: <br/>
			<a className="header-link" href="https://smokefree.gov/" target="_blank">smokefree.gov</a><br/>
			<a className="header-link" href="https://smokefree.gov/lgbt-and-smoking" target="_blank">Smokefree LGBT Campaign</a><br/>
			<a className="header-link" href="https://smokefree.gov/quit" target="_blank">Smokefree QuitDay Campaign</a><br/>
			<a className="header-link" href="https://women.smokefree.gov/tools-tips-vet/quit-for-good-with-nrt" target="_blank">Nicotine Replacement Therapy</a>
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="smokefree-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >The World Largest Quit Smoking Platform for multiple audience</h2>
		</Col>
		   <Col xs={12} md={7}  className="float-right" >
			
			<p >
			Smokefree.gov is largest quit smoking platform sponsored by National Cancer Institute, 
			based on the demographic of audience, the website provides typical solutions 
			for different audience to quite smoking. We collected data during the year of 2015 to 2016 
			to analysis how different campaign works and what public impression received during 
			the time, which provides us the insights on how the redesign of website should go to 
			help better reach out to different group of users. I am the web designer and developer in both
			the main website redesign and a few sub-campaign webpages and web applications.
				
			</p>
		
					
			</Col>
			<Col xs={12} md={5} className="float-left">
				<img src="./assets/img/smokefree/data.jpg" alt="user-journey" class="img-fluid right-img"/>
			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={7}>
			<h2>The Redesign of Smokefree Main Website</h2>
			<p>We went through a <a href="https://www.icf.com/resources/case-studies/2016/the-lean-volte-approach" target="_blank">Volte process</a> 
			&nbsp;to come up with design approaches for Smokefree Main Site. In my design solution, I used general images of potential 
			audience to represent the four major stages we want to highlight. On the content part, 
			instead of just list title of articles, I created the newsletter type of layout to provide user 
			a better reading and exploring experience. For the quiz, quote, and other content types besides articles, 
			instead of split them from the main flow of content, I insert them inside the flow, to help keep the content 
			interesting and provide breathe time in the information flow.</p>
			<p>The Smokefree Website is driven by Drupal, in addition to create the Homepage Design, we also created other
			content types for different types of webpages, below are the design of Article page content type and Quiz Page content type:</p>
			<p>The current Main Site design follows some design elements of my design solution, especially the article flows, you can check the <a href="https://women.smokefree.gov/" target="_blank">current Smokefree Main Site here</a>.</p>
			<img src="./assets/img/smokefree/initial-other.png" alt="other content type" class="img-fluid right-img image-within-content"/>
			</Col>
			<Col xs={12} mdPull={8} md={5}>
				<img src="./assets/img/smokefree/version1.jpg" alt="Homepage Redesign" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>


		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={7}>
			<h2>The LGBT Sub-page Design and development</h2>
			<p>We make the design of each sub domain to follow different design patterns since the audience 
			have different preference and characteristics. For the Smokefree LGBT Sub page I helped design and developed,
			we used a very colorful theme with strokes to emphasis the vivid and diverse aspects of the group. Which is 
			quite different from the traditional government website that looks official and not engaging to the audience.
			We also included social media and chatbot inside to help keep contact during the journey of quitting smoking. </p>
			<p>
				The Sub-page is developed through React.js, we made the React.js as a module to be embedded inside the Drupal8
				back-end system, and created a new blank node to host the sub-page. I am the developer of the React App and realized
				the linkage between the web application, back-end system, and chatbot service.
			</p>
			<p>The current LGBT Sub-page can be checked <a href="https://smokefree.gov/lgbt-and-smoking" target="_blank">here</a>.</p>
			
			</Col>
			<Col xs={12} mdPull={8} md={5}>
				<img src="./assets/img/smokefree/smokefree-lgbt.png" alt="LGBT Subpage" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>



		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Same Page, different Content based on audience</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>I also design and developed the QuitDay Campaign page, it's also developed through React.js and embedded inside 
			the Drupal 8 back-end as a module. When user comes from different domain, the content of the campaign page will be 
			altered based on where the user comes from, the image shows how the page would look like when the user comes from
			smokefree main website, smokefree women sub-page, and smokefree teen sub-page. While the page shares the same structure
			and code.</p>
			
			<p>The QuitDay Campaign page can be checked <a href="https://smokefree.gov/quit" target="_blank">here</a>.</p>
			
			</Col>
			<Col xs={12} md={7}>
				<img src="./assets/img/smokefree/quit-campaign.jpg" alt="Smokefree Quit Campaign" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>









		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Dynamic widgets inside pages</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>Besides creating single sub-pages, I also design and developed a few dynamic web widgets that embedded inside 
			the Smokefree pages, the NRT (Nicotine Replacement Therapy) web widget is one of them. It's also developed from React.js,
			and included as one section of the NRT page, when user select different Nicotine Replacement, the chances of quiting, along with the 
			fact sheets and the personas facial expression will change to reflect how big a chance the user can stay quit smoking.</p>
			
			<p>The NRT web widget can be checked <a href="https://women.smokefree.gov/tools-tips-vet/quit-for-good-with-nrt" target="_blank">here</a>.</p>
			
			</Col>
			<Col xs={12} md={7}>
				<img src="./assets/img/smokefree/nrt-cases.jpg" alt="Smokefree Quit Campaign" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;