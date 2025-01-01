import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class fatherhood extends Component {

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

								<img src="./assets/img/fatherhood/fatherhood-logo.webp" className="project-logo" alt="fatherhood logo"/>
							<h1>Fatherhood.gov and Dad Joke Widget</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Developer, Interaction Designer</p>
							<p className="mb-0"><strong>Duration</strong>: 4 Years</p>
							<p><strong>Deliverables</strong>: <a href="https://fatherhood.gov/" target="_blank">fatherhood.gov</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/fatherhood/fatherhood-hero-alt.webp" 
							src="./assets/img/fatherhood/fatherhood-hero.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>





		
	<section className="fatherhood-section"  >
		<Container>
			<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Revitalizing the Fatherhood.gov Homepage: A Redesign Journey</h2>
			 <p >
			Our team has been working on the web design of Fatherhood.gov for a number of years. In 2018, 
			we began a comprehensive web redesign task and created the first version of the design. We utilized 
			the Homepage as a dashboard for the users, allowing them to quickly explore the main functions within 
			the site, by making each main section a card and listing them in a grid. We used the selected theme 
			colors and added a faded background image in half of the cards to add more interests to the cards. 
			However, as the site grew and more content were added, the team realized that it was far from enough 
			to only list the key functions of the site on the Homepage. Therefore, in 2022, we resumed the redesign 
			of the site and made several layout and content changes to improve the usability of the homepage. 
			We reduced the size of the hero area to make the highlighted section occupy half of the page instead of 
			full width, and also changed the highlighted area to a slider to make it possible to include several 
			different highlighted pieces. This layout made it possible for us to include the announcements and latest 
			news in the top section, making them easier to find. In the content section, instead of having the key 
			function cards covering the majority of space, we reduced the size of the cards and made them in a single row.
			We also brought up event banners, library topics and categories, as well as social media updates behind the cards,
			 making the homepage more engaging and easier for the user to discover. Additionally, instead of just translating 
			 the homepage language, we created a Spanish page following a similar pattern as the homepage, but containing 
			 selected content for Spanish readers, this also presents the scalability of the page template.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/homepage-v1-alt.webp" src="./assets/img/fatherhood/homepage-v1.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Version 1</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/homepage-v2-alt.webp" src="./assets/img/fatherhood/homepage-v2.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Version 2</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/homepage-spanish-alt.webp" src="./assets/img/fatherhood/homepage-spanish.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Homepage Spanish Version</p>
			 </Col>
			 
			 </Row>


			 			<Row className="vcenter" >
			
			<Col xs={12} className="float-right" >
			 <h2 >Interactive Dad Joke Widget: Enhancing User Engagement</h2>
			 <p >
			We developed an interactive widget called the "Dad Joke" for our client. The purpose of this widget is to generate 
			jokes for dads to share with their family and also allows users to submit their own dad jokes for feedback. We designed 
			it similar to a music player to make it easy for users to interact with it in a focused space. Users can keep clicking the 
			"see another joke" button to view more jokes while remaining on the same page. The initial version was well-received, but some 
			feedback suggested that users would like to guess the answers before they are displayed. To address this feedback, we implemented 
			a "scratch-off" feature where the answer is hidden until the user clicks on the area, mimicking a scratch-off game to reveal the 
			answer of the dad joke. This added an element of interactivity and excitement to the widget as users can guess the answers before 
			revealing them and makes the widget more engaging as it encourages users to actively participate in the joke-telling experience. 
			Additionally, we updated the overall layout of the page by removing the sidebar and placing the widget prominently, making it easy 
			for users to discover and play with it.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/dad-joke-v1-alt.webp" src="./assets/img/fatherhood/dad-joke-v1.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Dad Joke Original Concept</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/dad-joke-v2-before-alt.webp" src="./assets/img/fatherhood/dad-joke-v2-before.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Dad Joke New Concept: Before Scratch</p>
			 </Col>
			  <Col xs={12} md={4} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/dad-joke-v2-after-alt.webp" src="./assets/img/fatherhood/dad-joke-v2-after.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Dad Joke New Concept: After Scratch</p>
			 </Col>
			 
			 </Row>
		
			<Row className="vcenter" >
				<Col xs={12}>
					 <h2 >Enhancing the Dad Jokes Experience with a Chatbot Feature</h2>
				</Col>
				
			<Col xs={12} md={6} className="float-right" >
		
			 <p >
			After creating the Dad Jokes Landing page, we aimed to expand the dad jokes service beyond just 
			the landing page. One idea we came up with was to create a chatbot that can deliver dad jokes 
			to users on demand. The chatbot can be accessed through a floating button at the bottom right 
			of the page. The current version of the chatbot allows users to select "Tell me a joke" or 
			"More Dad Jokes". When "Tell me a Joke" is selected, the chatbot will provide a dad joke from 
			our database and offer a link to one of our other resources. Selecting "More Dad Jokes" will 
			direct the user to our dad jokes page where they can submit their own jokes.
			 This feature not only provides something for users to do while they are on the page, but it can 
			 also be embedded on other websites to promote our resources and services.
			 </p>

			
					 
			
			 </Col>
			 <Col xs={12} md={6} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/dadjoke-bot-alt.webp" src="./assets/img/fatherhood/dadjoke-bot.webp" className="img-fluid" />
				<p className="label" style={{textAlign: 'center'}}>Dad Joke Chatbot</p>
			 </Col>
			 
			 
			 </Row>
		</Container>
	</section>
   



		<section className="fatherhood-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Dad Jokes Widget Successfully Boosts Government Website</h2>
		</Col>
		   <Col xs={12} md={6}  className="float-right" >
			
			<p >
		

			The "Dad Jokes" widget, which was recently launched as part of a webpage redesign, has been a success and has garnered media attention. Business Insiders has <a href="https://www.businessinsider.com/dad-joke-page-fatherhood-government-icf-nfrc-2021-7" target="_blank" className="fatherhood-link">written an article</a> about the widget, highlighting its ability to increase usage of the government website and make it more user-friendly for daily use.
				
				
			</p>
			<blockquote><p>
			

			"Something like jokes automatically get people's attention. It's fun, it's light, it's shareable."
			</p>
					 <span>&mdash;Eugene Schneeberg, senior fatherhood and families specialist at ICF.</span>
					 
					 </blockquote>		
					
			</Col>
			<Col xs={12} md={6} className="float-left">
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/fatherhood/report-alt.webp" src="./assets/img/fatherhood/report.webp" className="img-fluid" />
				
			</Col>
			
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default fatherhood;