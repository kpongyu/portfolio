import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import '../css/style.css';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class COSWD extends Component {
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

								<img src="./assets/img/coswd/coswd-site-logo.png" className="project-logo larger-project-logo" alt="COSWD logo"/>
							<h1>NIH COSWD Website</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Designer, Front-end Developer</p>
							<p className="mb-0"><strong>Duration</strong>: 2 Years</p>
							<p><strong>Delierable</strong>: <a href="https://www.icfcreative.com/2023/COSWD/40645/index.html"  target="_blank" className="header-link">COSWD Website</a>
						 , <a href="https://www.icfcreative.com/2024/COSWD-year-end/index.html" target="_blank" className="header-link">COSWD Year Review</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/coswd/coswd-hero-alt.webp" 
							src="./assets/img/coswd/coswd-hero.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>





		

		
		<section className="coswd-bg section information-flow" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>Visual Moodboard and theme development</h2>
			<p>We collaborated with our brand designer, who has deep familiarity with the client's visual history, to craft a unique branding strategy for the website. Opting against using actual photographs
				 due to the difficulty in encompassing all diversity dimensions and the lack of high-quality researcher images, we leaned into illustration styles. This creative pivot led to intriguing concepts
				  such as "bubble-head," featuring head-shaped designs within multicolored dialogue bubbles, and "silhouette faces," where overlapping facial contours create negative spaces for textual content. 
				  Concurrently, we designated a unique color to each website goal — Build, Disseminate, Act, and Stay Involved — serving as visual cues. By synthesizing these elements, we devised two distinct, 
				  interactive concepts for the client's consideration.
			</p>
			
			
			<div><LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/coswd/coswd-moodboard-alt.webp" src="./assets/img/coswd/coswd-moodboard.webp" className="img-fluid image-within-content" /></div>
			<p className="label">Figure: COSWD Mood Board</p>
			</Col>

			 <Col xs={12} md={6}>
			<LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/coswd/coswd-concept-1-alt.webp" src="./assets/img/coswd/coswd-concept-1.webp" className="img-fluid image-within-content" />
			<p className="label">Figure: COSWD Concept 1</p>
			 </Col>

			<Col xs={12} md={6}>
			<LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/coswd/coswd-concept-2-alt.webp" src="./assets/img/coswd/coswd-concept-2.webp" className="img-fluid image-within-content" />
			<p className="label">Figure: COSWD Concept 2</p>
			 </Col>



			
			</Row>
		</Container>

		</section>



				  <section className="future-section section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>The “Bubbles” Concept</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>In our collaborative journey with the Chief Officer for Scientific Workforce Diversity (COSWD) at NIH, we embraced a creative pivot, adopting the "Bubbles" concept for the website's design ethos. Moving away from literal representations, we let free-form bubbles become the visual anchors, overlapping and coalescing on the webpage, much like diverse ideas in scientific discourse.
			</p>

				
			<p>This design metamorphosis birthed bubble-themed section templates, infusing the site with a sense of fluidity and openness, encouraging users to delve deeper. The bubbles, with their varying sizes and intersections, created a canvas for micro-interactions, enhancing user engagement through visual cues. Their watercolor-like blending fashioned an artistic parallel to the diversity in science, suggesting unity in variety.


			</p>

			<p>
				This approach wasn't merely about aesthetics; it was a strategic embodiment of the site's core principles. The interplay of shapes and colors on the screen mirrored the collaborative and inclusive spirit of scientific exploration, turning each webpage into a subtle nod to the harmonious diversity the COSWD promotes. With this, we didn't just design a site; we visually articulated the intricate dance of science's many faces.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
					<LazyLoadComponent effect="blur" placeholderSrc="./assets/img/coswd/coswd-poster.webp">
									
								
									<video loop autoPlay className="responsive-video" >
									<source src="./assets/img/coswd/coswd-bubbles.mp4" type="video/mp4" />
									</video>
									
								</LazyLoadComponent>
								<p className="label">Video: COSWD Bubbles Concept</p>

			</Col>
			</Row>


					<Row className="vcenter" >
		<Col xs={12}>
		<h2>The “Elephant in the Dark” Concept</h2>
		</Col>
		   <Col xs={12} md={6}>
			
			<p>Another concept we developed for the COSWD website is the "Elephant in the Dark" concept. This concept is inspired by the idea of an elephant in the dark, which serves as a metaphor for the complexity of the scientific landscape.
			The "Building the Evidence", "Disseminating the Evidence", and "Acting on the Evidence" procedures are analogous to the elephant's trunk, legs, and tail, collectively composing COSWD's general concept that "Great Minds Think Differently".
			</p>
			<p>In the internal Year Review landing page, we illustrated the elephant in the dark, with the trunk, legs, and tail representing the three procedures in different sections and zoomed in when user scrolling to the secton, after scrolling through the achievements for each procedure, the page zooms out to the elephant in the dark. Here is a <a href="https://www.icfcreative.com/2024/COSWD-year-end/index.html" target="_blank" className="header-link">demo page</a> of the idea.
			
			</p>
			
		
			
			</Col>
			<Col xs={12} md={6}>
					<LazyLoadComponent effect="blur" placeholderSrc="./assets/img/coswd/year-end-poster.webp">
									
								
									<video loop autoPlay className="responsive-video" >
									<source src="./assets/img/coswd/year-review-concept.mp4" type="video/mp4" />
									</video>
									
								</LazyLoadComponent>
								<p className="label">Video: Elephant in the Dark Concept</p>

			</Col>
			</Row>

		<Row>
			<Col xs={12} md={6}>
				<LazyLoadImage effect="blur" alt="Year Review Landing" placeholderSrc="./assets/img/coswd/year-review-1-alt.webp" src="./assets/img/coswd/year-review-1.webp" className="img-fluid image-within-content" />
				<p className="label">Figure: Year Review Landing</p>
			</Col>
			<Col xs={12} md={6}>
				<LazyLoadImage effect="blur" alt="Year Review Section" placeholderSrc="./assets/img/coswd/year-review-2-alt.webp" src="./assets/img/coswd/year-review-2.webp" className="img-fluid image-within-content" />
				<p className="label">Figure: Year Review Section</p>
			</Col>
		</Row>
		</Container>

		</section>




		<section className="coswd-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12}>
			<h2>A New Look of the Website</h2>
			<p>We seamlessly integrated the foundational themes of USWDS with our unique, brand-inspired bubble-based sections, yielding a harmonious design synergy for the COSWD website. Our customized sections, particularly the dual-bubble overlapping template and the rounded, three-column layout that elegantly transitions into tabs for mobile interfaces, maintain not only the aesthetic consistency of the site but also ensure it meets the stringent accessibility standards stipulated by the USWDS guidelines.
			</p>
			<p>
				This deliberate fusion of design elements transcends conventional structure, offering users an engaging experience while navigating through various focuses within the site. The resulting interface is not merely a compliance-checking platform but a visually cohesive and interactive space that encapsulates the diversity and inclusivity ethos of scientific discourse, encouraging exploration and continued engagement.
			</p>
			
			
			</Col>
				 <Col xs={12} md={6}>
			<LazyLoadImage effect="blur" alt="COSWD Homepage" placeholderSrc="./assets/img/coswd/coswd-homepage-alt.webp" src="./assets/img/coswd/coswd-homepage.webp" className="img-fluid image-within-content" />
			<p className="label">Figure: COSWD Homepage</p>
			 </Col>

			<Col xs={12} md={6}>
			<LazyLoadImage effect="blur" alt="COSWD Act Page" placeholderSrc="./assets/img/coswd/coswd-actpage-alt.webp" src="./assets/img/coswd/coswd-actpage.webp" className="img-fluid image-within-content" />
			<p className="label">Figure: COSWD Act Page</p>
			 </Col>
			</Row>
		</Container>

		</section>













	




    </section>
		
	
      
      )
    }
  }
  
  export default COSWD;