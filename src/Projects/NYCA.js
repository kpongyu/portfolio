import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class NYCA extends Component {

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

								<img src="./assets/img/NYCA/NYCA-logo.svg" className="project-logo smaller-project-logo" alt="NYCA logo"/>
							<h1>NYCA Accelerator Web Design</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Designer, Front-end Developer</p>
							<p className="mb-0"><strong>Duration</strong>: 2 Years</p>
							<p><strong>Delierable</strong>: <a href="https://accelerator.nyc/"  target="_blank" className="header-link">accelerator.nyc</a>
						 , <a href="https://accelerator.nyc/building-energy-snapshot" target="_blank" className="header-link">building energy snapshot</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/NYCA/NYCA-hero-alt.webp" 
							src="./assets/img/NYCA/NYCA-hero.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>










		
	<section className="NYCA-section"  >
		<Container>
		<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >A campaign to promote the construction of environmentally friendly buildings in New York City</h2>
			 <p >
			Our group has been selected to create a website for the "Building Action NYC" campaign,
			&nbsp;<a href="https://www.nyc.gov/office-of-the-mayor/news/238-22/mayor-adams-launches-campaign-promote-green-buildings-establish-nyc-national-leader-in#/0" target="_blank">launched by New York City Mayor Adams  </a> 
			  on April 22, 2022. The website will serve as a hub for building owners to access free support 
			to reduce carbon emissions, lower costs, and comply with local laws. It will also provide applications 
			for building owners to find services and contractors to improve energy efficiency, as well as tools to 
			estimate the efficiency level of their buildings and potential solutions to make improvements.
			 </p>

			 <p>
			Our group began by creating a unique brand for the website, utilizing a green-black theme to 
			emphasize the modernism of New York City after implementing energy efficiency improvements and 
			promoting green energy. We explored several onboarding concepts, featuring beautifully designed New 
			York City buildings to showcase the city's culture. We ultimately selected the second concept, which 
			features a grand view of a New York City street and includes a range of different building types. 
			Additionally, we added interactive elements, such as parallax effects, to the hero section to enhance 
			user engagement. You can experience the full onboarding interaction on the updated NYC Accelerator website.
			 </p>
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/homepage-interaction-option1-alt.webp" src="./assets/img/NYCA/homepage-interaction-option1.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Onboarding Concept 1</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/homepage-interaction-option2-alt.webp" src="./assets/img/NYCA/homepage-interaction-option2.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Onboarding Concept 2</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/homepage-interaction-option3-alt.webp" src="./assets/img/NYCA/homepage-interaction-option3.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Onboarding Concept 3</p>
			 </Col>
			 
			 </Row>
		
			 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >Templates created for various types of pages</h2>
		</Col>
		   <Col xs={12}  className="float-right" >
		   
			<p >
			We used Drupal as the back-end CMS system to host the site, and based on the site structure, we created page templates 
			for the Level-2 pages and Level-3 pages. The Level-2 page also contains a hero image taken from New York City that can 
			reflect the content of the page and level-3 pages are using a more generic hero section as the content management team 
			can quickly generate a level-3 page when needed. There are some specific pages created that are different from the generic sub-pages. 
			One of them is a page template specifically created for the  <a href="https://accelerator.nyc/building-action" target="_blank">Building Action NYC</a>,  this covers the specific materials related to the campaign. Another unique page is the  
			<a href="https://accelerator.nyc/contractor" target="_blank">  Find Contractor page</a>, this page acts more like a library for user to filter and 
			find the contractor needed for the services they want, which we moved the filters to the top to draw attentions and make the page more intergrated 
			across different screen sizes, this way content management team can easily maintain the website and users can easily navigate and find the information they need.
				
			</p>

		
					
			</Col>
					 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/nyca-homepage-alt.webp" src="./assets/img/NYCA/nyca-homepage.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>NYCA Homepage</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/nyca-campaign-page-alt.webp" src="./assets/img/NYCA/nyca-campaign-page.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>NYCA Campaign Page</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/nyca-find-contractor-page-alt.webp" src="./assets/img/NYCA/nyca-find-contractor-page.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>NYCA Find Contractor Page</p>
			 </Col>
			
			</Row>
		

					 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >Interactive map of NYC to explore building energy efficiency via color-coding</h2>
		</Col>
		   <Col xs={12}  className="float-right" >
		   
			<p >

			We also developed a <a href="https://accelerator.nyc/building-energy-snapshot" target="_blank">building selection</a> feature for building owners, it's a geo-based building selection tool, 
			which allows them to search for the buildings they own and see the current energy efficiency and potential improvements. The idea for this tool comes from the concept of providing a simple 
			and easy way for building owners to access the information about their buildings' energy performance. We started with a basic MapBox-based widget that pins the building the user searched for and 
			provides the relevant information accordingly. However, we soon realized that the map itself does not provide any additional information, so we decided to adapt to a colored map concept to color 
			the buildings inside the map that reflects their energy levels.
			
				
			</p>

			<p>By doing this, the user will not only see their own building's energy status, but also explore the ones around it 
				in the community and get further information on the overall status of the communities. This tool provides the users 
				with a more comprehensive and interactive way of understanding the energy performance of the buildings in their community.
				 Additionally, we moved the information from a pop-up to the sidebar space, and included a scrollable container to keep the 
				 interface more integrated. This tool is very different from the existing list-based examples and is a good geo-visualization 
				 example in industry, it provides a new way for building owners to explore and understand the energy performance of their buildings 
				 and the surrounding community.</p>

		
					
			</Col>
					 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/building-selecting-tool-v1-alt.webp" src="./assets/img/NYCA/building-selecting-tool-v1.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Building Selection Tool Version 1</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/building-selecting-tool-v2-alt.webp" src="./assets/img/NYCA/building-selecting-tool-v2.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Building Selection Tool Version 2</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/NYCA/building-selecting-tool-v3-alt.webp" src="./assets/img/NYCA/building-selecting-tool-v3.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Building Selection Tool Version 3</p>
			 </Col>
			
			</Row>
		
	
		</Container>
	</section>
   



		<section className="NYCA-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		
		</Col>
		   <Col xs={12} md={6}  className="float-right" >
			<h2 > A Step towards Carbon Neutrality for New York City</h2>
			<p >

				The NYCA project is a key aspect of the company's efforts to assist New York City in <a href="https://www.icf.com/clients/energy/decarbonization-pathways-nyc#" target="_blank" className="NYCA-link">achieving carbon neutrality by 2050</a>. 
				Since its launch, the website has become the leading resource for building energy efficiency information and its design concept has been widely adopted in city materials. 
				In a video, Mayor Adams highlighted a new focus of the campaign, Local Law 97, which we also included <a href="https://accelerator.nyc/LL97" className="NYCA-link" target='_blank'>a page</a> on the website to further explain the topic.



	
				
				
			</p>
				
					
			</Col>
			<Col xs={12} md={6} className="float-left">

				<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/jneGFCKxo5w"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope;"
    allowfullscreen></iframe>
</div>
			
			</Col>
			
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default NYCA;