import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class Covid extends Component {

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

								<img src="./assets/img/covid/covid.webp" className="project-logo smaller-project-logo" style={{width: '5rem'}} alt="COSWD logo"/>
							<h1>NIH COVID-19 Clinical Guidelines</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Developer, Interaction Designer</p>
							<p className="mb-0"><strong>Duration</strong>: 2 Years</p>
							<p><strong>Delierable</strong>: <a href="https://web.archive.org/web/20240731073833/https://www.covid19treatmentguidelines.nih.gov/"  target="_blank" className="header-link">COVID-19 Treatment Guidelines</a>
						</p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/covid/covid-header-alt.webp" 
							src="./assets/img/covid/covid-header.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>




		
	<section className="covid-section"  >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Guidelines for Clinical Management of COVID-19 </h2>
		<p >
		I am proud to work as a web designer on the Clinical Guidelines website for NIH, which provides medical 
		professionals with the latest information on treatment and guidance for COVID-19. This project has been 
		fast-paced and unpredictable due to the constantly changing nature of the pandemic and the uncertain nature 
		of the treatments and content.
			 </p>
		</Col>
			<Col xs={12} md={5}  className="float-right" >
			
			
					 
			 <p >
			We began the website framework using the USWDS Web Standard Library, which is commonly used by agencies. 
			Initially, we designed it in a "manuscript" style, which features a sidebar listing different topics and allows 
			users to jump between them quickly. However, as more content was added and categories like Medicine, Treatment, 
			and Best Practice were created, we have been transitioning towards a topic-oriented organization of the information. 
			The image on the right shows a sample of the new homepage design we are currently working on, which will make 
			it easier for users to find the most relevant and useful information and topics as the content grows.
			 </p>
			 </Col>
			 <Col xs={12} md={7} className="float-left">
				<LazyLoadImage effect="blur" alt="Guideline Homepage" placeholderSrc="./assets/img/covid/home-alt.webp" src="./assets/img/covid/home.webp" className="img-fluid right-img" />
				
				 <p className="label">Figure 1: Manuscript Approach and Topic-Oriented Approach</p>
			 </Col>
			 
			 </Row>
		
			 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >A navigation system that is highly adaptable to handle the expansion of content</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		   
			<p >
			We took into account the potential expansion of content and categories when designing the website, 
			and also made sure that the content remained easily accessible on mobile devices, which are used by 
			the majority of site visitors. Figure 2 shows how the mobile navigation experience works between different 
			levels of navigation items. To avoid overwhelming users with numerous sub-categories displayed through 
			indentation, we direct users to a new level that only displays the parent level nav-item and its child items. 
			The back button at the top allows users to return to the parent level, helping them focus on the current level 
			of navigation. We also split the child-nav links from the current nav-item with an arrow button, which allows 
			users to access the child nav list or go to the nav-item's own page when clicked. This is one example of how we 
			addressed the challenge of navigating through a large amount of content.
				
				
			</p>

		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			 <LazyLoadImage effect="blur" alt="Mobile Navigation" placeholderSrc="./assets/img/covid/navigation-alt.webp" src="./assets/img/covid/navigation.webp" className="img-fluid right-img" />
		
				 <p className="label">Figure 2: Mobile Navigation to adapt to multi-level navigations</p>
               
    		
			</Col>
			
			</Row>
		
		
	
		</Container>
	</section>
   



		<section className="covid-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >A trusted website by millions of medical workers</h2>
		</Col>
		   <Col xs={12}  className="float-right" >
			
			<p >
			Since it was launched, the website has been used by over a million US users and has received over 5 million page views. It has also been widely shared and reported on by organizations such as the <a href="https://www.nih.gov/news-events/news-releases/expert-us-panel-develops-nih-treatment-guidelines-covid-19" target="_blank" className="covid-link">National Institutes of Health</a>, 
			and the &nbsp;<a href="https://www.aha.org/news/headline/2020-04-21-nih-panel-releases-covid-19-treatment-guidelines" target="_blank" className="covid-link">American Hospital Association (AHA)</a>,  &nbsp; as well as news media outlets like the New York Times, Forbes, AXIOS, Politico, etc.
			It has become the primary resource for doctors to consult when treating COVID-19 patients.It has become the primary resource for doctors to consult when treating COVID-19 patients.
			
				
				
			</p>
	
					
			</Col>
			
			</Row>
			<Row>
			<Col xs={12} md={6} className="float-left">
				 <LazyLoadImage effect="blur" alt="recognition" placeholderSrc="./assets/img/covid/news1-alt.webp" src="./assets/img/covid/news1.webp" className="img-fluid right-img" />
			</Col>
			<Col xs={12} md={6} >
							  <LazyLoadImage effect="blur" alt="recognition" placeholderSrc="./assets/img/covid/news-alt.webp" src="./assets/img/covid/news.webp" className="img-fluid right-img" />
			</Col>
			<Col xs={12}>
			<p className="label" style={{textAlign: 'center'}}>Figure 3: News Reports on the launching of the website</p>
			</Col>
			</Row>

				<Row className="mt-4">
									<Col xs={12} md={8} >

									
									<p>I was honored to receive ICF's Team Work in Action Award for my contributions to the website. Through this project, our company demonstrated its capability to develop and maintain high-traffic, well-designed websites during the pandemic emergency. 
										As the primary resource for physicians treating COVID-19 patients throughout the pandemic, the website played a vital role in supporting healthcare workers in their fight against the virus. The success of this project highlighted the importance of clear communication and rapid response during public health crises. Our team's ability to quickly adapt and deliver critical information helped medical professionals stay informed about the latest treatment guidelines and best practices. This experience reinforced my commitment to using technology to make a meaningful impact in healthcare and public health initiatives.
									</p>
									</Col>
									<Col xs={12} md={4}>
									<LazyLoadImage effect="blur" alt="Team Work in Action Award" src="./assets/img/covid/teamwork-in-action-award.webp" className="img-fluid" />
									<p className="label">Team Work in Action Award</p>
									</Col>
								</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default Covid;