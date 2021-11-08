import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Covid.css';
import './Projects.css';
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
			  <section className="covid-header cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/covid/covid-header-alt.jpg" src="./assets/img/covid/covid-header.jpg" className="hero-bg" />
		<Container>
       
        
	<div className="covid-header-content ">
    <img src="./assets/img/covid/covid.png" className="project-logo covid-logo" alt="NIH logo"/>
    <h1>NIH COVID-19 Clinical Guidelines</h1>
	<p >
		<strong>My Role</strong>: Web Developer, Interaction Designer<br />
		<strong>Duration</strong>: 1 Year<br />
		<strong>Deliverable</strong>: &nbsp;
		<a className="header-link" href="https://www.covid19treatmentguidelines.nih.gov/" target="_blank">COVID-19 Treatment Guidelines
</a>

							</p>
       <p className="credit">Photo Credit: NIAID-RML</p>
		</div>
	
		
		
		</Container>
		</section>

		
	<section className="covid-section"  >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Up-to-date Guidelines to conquer the Pandemic </h2>
		<p >
			I'm proud to work as a web designer to help design the Clinical Guidelines website for NIH to provide the most up-to-date
			information in related to treatment, medicine, and guidance to our frontline medical workers. It's a fast-pace project with 
			lots of uncertainty during our design and developing process, since the Pandemic situation is ever-changing, and the treatments
			and content are never determined. 
			 </p>
		</Col>
			<Col xs={12} md={5}  className="float-right" >
			
			
					 
			 <p >
			 We start the website framework from the USWDS Web Standard Library that is used across agencies, and designed it as in a "manuscript" approach,
			 which is still the case by the end of 2020, which provide the user with a sidebar that listed all different topics,
			 and user can jump between different topics using the side-nav, which is a fast approach when the content is limited, however, as there are additional 
			 content added and categories (like Medincine, Treatment, Best Practice, etc.) formed, we are moving torwards a topic-oriented way to organize the information,
			 the image on the right side is one Homepage approach we are currently working on, which can better help user to find the most useful information and topics of interests
			 when the content has been accumulated.
			 </p>
			 </Col>
			 <Col xs={12} md={7} className="float-left">
				<LazyLoadImage effect="blur" alt="Guideline Homepage" placeholderSrc="./assets/img/covid/home-alt.png" src="./assets/img/covid/home.png" className="img-fluid right-img" />
				
				 <p className="label">Figure 1: Manuscript Approach and Topic-Oriented Approach</p>
			 </Col>
			 
			 </Row>
		
			 <Row className="vcenter" >
		<Col xs={12}>
		<h2 >A highly Adaptive Navigation System to handle content expansion</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		   
			<p >
			With the anticipation of expanding content and categories, at the beginning of our design of the website,
			we took the navigation and searchability of content into account, also, since a majority of site users are 
			using tablet and mobile devices, we design to make sure the content accessibility remains high in mobile 
			experience as well. Figure 2 shows how the mobile navigation experience works between different levels of navigation 
			items, we tried to avoid using indent to display sub-categories since there might be a dozen of sub-items inside one nav-item, and 
			there could be a few levels deep in navigation, instead, we direct the user into a brand-new level with only the parent level
			nav-item plus the child items inside, with the back button on the top to go back to the parent level, which makes it easier for users
			to focus on the current level while include approaches to go back. We also split the child-nav link from the current nav-item through an 
			arrow button, which when user click on the nav-title part it goes to its own page, and when click the arrow it goes to child nav list, which is 
			one example how we cope with the content navigation challenge.
				
				
			</p>

		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			 <LazyLoadImage effect="blur" alt="Mobile Navigation" placeholderSrc="./assets/img/covid/navigation-alt.png" src="./assets/img/covid/navigation.png" className="img-fluid right-img" />
		
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
			The website has been used and referred to by over a million US users and over 5 millions page views since it launched in late April, and since it launched,
			it has been widely shared and reported by highly ranked organizations such as <a href="https://www.nih.gov/news-events/news-releases/expert-us-panel-develops-nih-treatment-guidelines-covid-19" target="_blank" className="covid-link">National Institutes of Health</a>, 
			&nbsp;<a href="https://www.aha.org/news/headline/2020-04-21-nih-panel-releases-covid-19-treatment-guidelines" target="_blank" className="covid-link">American Hospital Association (AHA)</a>,  &nbsp; and news media such as The New York Times, Forbes, AXIOS, Politico, etc.
			The Guideline will continue to grow and better organized in 2021 to better serve the community and medical workers.
			
				
				
			</p>
	
					
			</Col>
			
			</Row>
			<Row>
			<Col xs={12} md={6} className="float-left">
				 <LazyLoadImage effect="blur" alt="recognition" placeholderSrc="./assets/img/covid/news1-alt.png" src="./assets/img/covid/news1.png" className="img-fluid right-img" />
			</Col>
			<Col xs={12} md={6} >
							  <LazyLoadImage effect="blur" alt="recognition" placeholderSrc="./assets/img/covid/news-alt.png" src="./assets/img/covid/news.png" className="img-fluid right-img" />
			</Col>
			<Col xs={12}>
			<p className="label" style={{textAlign: 'center'}}>Figure 3: News Reports on the launching of the website</p>
			</Col>
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default Covid;