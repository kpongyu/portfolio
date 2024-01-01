import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './CB.css';
import './Projects.css';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class CB extends Component {
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

			  <section className="cb-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/cb/cb-hero-alt.webp" src="./assets/img/cb/cb-hero.webp" className="hero-bg" />
		<Container>
       
        
	<div className="cb-header-content ">
    <img src="./assets/img/cb/cb-logo.webp" className="project-logo" alt="seed logo"/>
    <h1 className='mt-4'>Children's Bureau <br/>Collaborative Site</h1>
		<p >
		<strong>My Role</strong>: Interaction Designer<br/>
			<strong>Duration</strong>: 2 Years<br/>
			<strong>Deliverable</strong>: <br/>
			<a className="header-link" href="https://capacity.childwelfare.gov/" target="_blank">capacity.childwelfare.gov</a><br/>
		
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="cb-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Background</h2>
		</Col>
		   <Col xs={12}  className="float-right" >
			
			<p >
			We were leading the redesign of The Children's Bureau's Child Welfare Capacity Building Collaborative website. 
			This website assists public child welfare agencies, Tribes, and courts in enhancing and mobilizing the human 
			and organizational resources necessary to comply with Federal standards and requirements. It aims to improve 
			child welfare practices and administration and achieve safety, permanency, and well-being outcomes for children, youth, and families.
		
			</p>

				<p >
			The website is structured around three primary centers/focuses:
			</p>
			<ul>
				<li><strong>The Center for States</strong>, which supports the effective initiation and sustainment of change and innovation.</li>
				<li><strong>The Center for Tribes</strong>, dedicated to strengthening Tribal child and family systems and services.</li>
				<li><strong>The Center for Courts</strong>, engaged in improvement work by partnering with child welfare agencies to optimize the services provided to children and families.</li>
			</ul>

				<p >
			Our goal in redesigning the website was to establish it as a hub that consolidates resources and events while categorizing them intuitively for different audiences.
			 This approach ensures that users can navigate seamlessly and access the information most relevant to their needs and interests.
			</p>
		
					
			</Col>
			<Col xs={12} md={5} className="float-left">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/cb/cb-desktop-alt.webp" src="./assets/img/cb/cb-desktop.webp" className="img-fluid" />
			</Col>
			
			</Row>
		</Container>

		</section>


			<section className="cb-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		
		</Col>
		   <Col xs={12} md={7}>
							  <h2>Wireframe and Color delegation to each center</h2>
			<p>We developed the homepage wireframe, prominently featuring a dedicated section listing the three 
				distinct centers immediately following the introduction. This section provides users with direct 
				links to different parts of the website. However, we recognized that the site structure alone does 
				not fully facilitate user navigation, underscoring the need for visual enhancements.

			</p>

				<p>Addressing the visual aspect of the site, we were mindful to comply with the United States Web Design 
					System (USWDS) standards and the Administration for Children and Families (ACF) color palette. Despite 
					these requirements, we identified an opportunity to further enhance navigation by employing secondary 
					colors specific to each center. Consequently, we devised a unique color scheme for each center, applying 
					these colors to relevant components as visual indicators. This strategic use of color not only adheres to the 
					necessary guidelines but also serves to intuitively guide users through the site, promoting an efficient and 
					user-friendly experience.

			</p>
			
			
			
			</Col>
			<Col xs={12} md={5}>
			 <LazyLoadImage effect="blur" alt="CB Wireframe" placeholderSrc="./assets/img/cb/cb-wireframe-alt.webp" src="./assets/img/cb/cb-wireframe.webp" className="img-fluid" />
  			<p className="label">Figure: wireframe with specific section for each center</p>
			</Col>

			<Col xs={12}>
				<LazyLoadImage effect="blur" alt="Color Mapping" placeholderSrc="./assets/img/cb/cb-color-mapping-alt.webp" src="./assets/img/cb/cb-color-mapping.webp" className="img-fluid image-within-content" />
				<p className="label">Figure: visual mapping for the centers</p>
			</Col>
			</Row>
		</Container>

		</section>
		

		
		<section className="cb-bg section information-flow" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>Visual Design and patterns</h2>
			<p>Having established a specific color mapping, we further innovated by creating distinctive design patterns, 
				rendering the website's layout more recognizable and unique to The Children's Bureau's Child Welfare Capacity 
				Building Collaborative. We skillfully utilized diagonal patterns within various sections, applying different hues 
				from the color palette assigned to each center, thereby reinforcing their individual identities.
			</p>
			<p>This comprehensive aesthetic strategy transforms the site's overall look and feel, deviating from the conventional ambiance 
				of standard government websites. The result is a unique and engaging interface that is not only pleasing to the eye but also 
				enhances user interaction and experience. By intertwining functionality with a fresh visual approach, we've ensured that the 
				website is both a valuable resource and a pleasant platform for its users.
			</p>
			
			<LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/cb/cb-layout-alt.webp" src="./assets/img/cb/cb-layout.webp" className="img-fluid image-within-content" />
			<p className="label">Figure: Patterns implemented in different center layouts</p>
			</Col>
			
			</Row>
		</Container>

		</section>






	









			  <section className="future-section section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Recognition and Awards</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>The website is well-received by the client and has awarded the honor of the <a href="https://www.google.com/url?q=https://enter.marcomawards.com/entry/child-welfare-capacity-building-collaborative-website-a-service-for-the-childrens-bureau/&sa=D&source=editors&ust=1704151539397063&usg=AOvVaw2ncXDCcr5ATevdMZkTYDQS" target='_blank'>Platinum Award</a> in the category of Digital Media – Website – 
				Government and the Golden Award in the category Digital Media – Website – Redesign. These are remarkable accomplishments and should be 
				celebrated. Our work this year not only brought a new user friendly website with vital information and resources to the child welfare field, 
				but has brought noteworthy recognition to ICF and the Children’s Bureau.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
							  <LazyLoadImage effect="blur" alt="CB Award" placeholderSrc="./assets/img/cb/cb-award-alt.webp" src="./assets/img/cb/cb-award.webp" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CB;