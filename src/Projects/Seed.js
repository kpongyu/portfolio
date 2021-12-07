import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './ROTC.css';
import './Seed.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class Seed extends Component {
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
		<section className="seed-header cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/seed-bg-alt.jpg" src="./assets/img/seed/seed-bg.jpg" className="hero-bg" />
		<Container>


					 
       
        
	<div className="seed-header-content ">
    <img src="./assets/img/seed/logo.png" className="project-logo seed-logo" alt="seed logo"/>
    <h1>Seed Application Design</h1>
		<p >
		<strong>My Role</strong>: UX Designer, Product Designer<br/>
			<strong>Duration</strong>: 3 Months<br/>
			<strong>Client</strong>: <a className="header-link" href="http://chi2015.acm.org/" target="_blank">2015 CHI Conference</a>
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>

		<section className="seed-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={8} >
			<h2>International Students face Culture Shock when studying abroad.</h2>
			<p>Everyone face some kinds of culture shock when changing the environment, this also applies 
			for international students who left their home country to study abroad, we interviewed 15 international 
			students studying in UofM and 5 American students who has studied abroad and found three major challenges 
			for them to handle the culture shock, we found there are a variety of topics foreign students want to learn 
			more about, some interested in professional communications, some interested in daily entertainment topics.
			Also, the demands to learn shifts from stage to stage, and there is a gap between what they want to know and what they need to know.</p>
			</Col>
			<Col xs={12} md={4}>
				<LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/storyboard-alt.png" src="./assets/img/seed/storyboard.png" alt="user-journey" class="img-fluid right-img" />
			
			</Col>
			</Row>
		</Container>

		</section>

   
		<section className="seed-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={6}>
			<h2>The gamification system and storyline</h2>
			<p>We use "seed" as the metaphor for students' culture knowledge, and developed a gamification system to mimic 
			students development of their cultural knowledge. The growth of students' cultural knowledge is like the growth 
			of a "culture tree", students can develop their knowledge in different aspects and topics, just like different 
			branches of the tree. The input of knowledge is like water to the tree. Students can finially planted their unique 
			culture tree after practice and their personal selections.</p>
			</Col>
			<Col xs={12} mdPull={8} md={6}>
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/system-alt.png" src="./assets/img/seed/system.png" alt="Seed App User Story" class="img-fluid right-img" />
			</Col>
			</Row>
		</Container>

		</section>

		<section className="seed-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} >
			<h2>International Students face Culture Shock when studying abroad.</h2>
			<p>Everyone face some kinds of culture shock when changing the environment, this also applies 
			for international students who left their home country to study abroad, we interviewed 15 international 
			students studying in UofM and 5 American students who has studied abroad and found three major challenges 
			for them to handle the culture shock, we found there are a variety of topics foreign students want to learn 
			more about, some interested in professional communications, some interested in daily entertainment topics.
			Also, the demands to learn shifts from stage to stage, and there is a gap between what they want to know and what they need to know.</p>
			</Col>
						
			</Row>

					  <div className="image-row">
						  <div className="one-third-img">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/seed-main-alt.png" src="./assets/img/seed/seed-main.png" className="img-fluid" />
						  </div>
						  <div className="one-third-img">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/seed-challenges-alt.png" src="./assets/img/seed/seed-challenges.png" className="img-fluid" />
						  </div>
						  <div className="one-third-img">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/seed/seed-garden-alt.png" src="./assets/img/seed/seed-garden.png" className="img-fluid" />
						  </div>
					  </div>
		</Container>

		</section>
	
		

	

		<section className="section seed-fixed-bg-2" >
		<Container>
		<Row className="vcenter" >
		<Iframe url="https://icfi.invisionapp.com/share/RHTOF2G576Z#/214496655_Welcome"
        width="438"
        height="930"
        id="myId"
        className="civiclabFrame"
        display="initial"
        position="relative"/>
		</Row>
		</Container>

		</section>











    </section>
		
	
      
      )
    }
  }
  
  export default Seed;