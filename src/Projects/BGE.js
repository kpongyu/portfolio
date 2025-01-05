import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class bge extends Component {

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

								<img src="./assets/img/bge/logo-bge.svg" className="project-logo" alt="BGE logo"/>
							<h1>BGE Smart Energy ReBranding</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Designer, Information Architect</p>
							<p className="mb-0"><strong>Duration</strong>: 2 Years</p>
							<p><strong>Deliverables</strong>: <a href="https://bgesmartenergy.com/" target="_blank">bgesmartenergy.com</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/bge/bge-hero-alt.webp" 
							src="./assets/img/bge/bge-hero.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>





		
	<section className=""  >
		<Container>
			 <h2 className="mt-5">ReBranding to match the BGE design language</h2>
			<Row className="vcenter mt-4" >
			
			<Col xs={12} md={4} className="float-right" >
			
			 <p >
				Following Exelon's (BGE's parent company) rollout of new brand guidelines and design language, we undertook a comprehensive redesign of the BGE Smart Energy website. This initiative went beyond just visual updates - it gave us an opportunity to completely reimagine the site's information architecture to enhance user experience. A key part of this project involved integrating BGE's standalone savings portal (bgesavings.com) into the main Smart Energy website while maintaining consistent branding. The before and after images demonstrate how we transformed the site's look and feel to align with Exelon's new design system.
				</p>
		
			
					 
			
			 </Col>
			 <Col xs={6} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/old-design-alt.webp" src="./assets/img/bge/old-design.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Old Design</p>
			 </Col>
			  <Col xs={6} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/new-design-alt.webp" src="./assets/img/bge/new-design.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>New Design</p>
			 </Col>
			
			 
			 </Row>
			 </Container>
			 </section>

<section className="section2"  >
		<Container>
			 			<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Templates for different page levels, and new site structure</h2>
			 <p >
			Our first priority was establishing a scalable template system to handle the site's hundreds of pages efficiently. Rather than designing each page individually, we created three core template types. Level-2 templates serve as category landing pages for our main sections: "For My Home", "For My Business", and "Service Providers". Level-3 templates are designed for topic-focused pages within each category, featuring a distinctive energy wave in the hero section to visually represent different subject areas. Level-4 templates are optimized for text-heavy, information-based content - these can connect directly to level-2 pages or nest under level-3 topics, depending on whether the content is primarily informational text or rich media like images and videos.
			 </p>

			 <p>Once the templates were established, we developed a comprehensive site map organizing all pages into their respective categories and defining their template levels. This structured approach enabled us to efficiently plan our image library and catalog the required UI components like cards and other elements. Rather than creating individual mockups for every page, we delivered a streamlined package consisting of the site architecture, reusable page templates, and a complete asset library that developers could implement systematically. The whole process was done within an agile process with developers, and to make sure we didn't miss any page or components, and new components and sections are designed as needed.</p>

			
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/new-level-2-alt.webp" src="./assets/img/bge/new-level-2.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>New Level 2 Template</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/new-level-3-alt.webp" src="./assets/img/bge/new-level-3.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>New Level 3 Template</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/new-level-4-alt.webp" src="./assets/img/bge/new-level-4.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>New Level 4 Template</p>
			 </Col>

			 <Col xs={12} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/sitemap-alt.webp" src="./assets/img/bge/sitemap.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Part of the Site Map Structure</p>
			 </Col>
			 
			 </Row>
		
			
		</Container>
	</section>
   



	<section className=""  >
		<Container>
			 <h2 className="mt-5">An Annual Magazine for BGE</h2>
			<Row className="vcenter mt-4" >
			
			<Col xs={12} md={4} className="float-right" >
			
		<p>
			Each year, we also worked on creating a <a href="https://bge.com/magazine" target="_blank">magazine for BGE</a>, both in print and digital. 
			We implemented a very different design for the digital version compared to the BGE website, making it resemble the <a href="https://bgesmartenergy.com/magazine/issue1/docs/BGE_Lifestyle_Magazine_issue_1.pdf" target="_blank">print version of the BGE magazine</a>, with more flexible layout and diverse structure. 
			We also included various interactive elements throughout the sections, making the digital version more engaging and interactive. The BGE Magazine is a great example of how we can create a consistent experience across different mediums, 
			it also being awarded by <a href="https://enter.amcpros.com/hermes/entry/bges-the-efficient-home-magazine-8/" target="_blank">Hermes Creative Awards</a> and <a href="https://enter.amcpros.com/marcom/entry/the-efficient-home-magazine-issue-2-6/" target="_blank">Marcom Awards</a>.
		</p>
		
			
					 
			
			 </Col>
			 <Col xs={6} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/magazine-digital-alt.webp" src="./assets/img/bge/magazine-digital.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>BGE Magazine Digital</p>
			 </Col>
			  <Col xs={6} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/bge/magazine-print-alt.webp" src="./assets/img/bge/magazine-print.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>BGE Magazine Print</p>
			 </Col>
			
			 
			 </Row>
			 </Container>
			 </section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default bge;