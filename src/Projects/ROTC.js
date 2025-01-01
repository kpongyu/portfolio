import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';




class ROTC extends Component {
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
			  <Row className="rotc-header cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/front_photo_bg-alt.jpg" src="./assets/img/rotc/front_photo_bg.jpg" className="hero-bg" />
	<div className="rotc-header-content">
    <img src="./assets/img/rotc/rotc-logo.png" className="project-logo rotc-logo" alt="rotc logo"/>
    <h1>	Michigan ROTC Website Design</h1>
		<p >
		<strong>My Role</strong>: Web Designer, Web Developer<br/>
			<strong>Duration</strong>: 3 Months<br/>
			<strong>Delierable</strong>: <a className="header-link" href="http://www.army.rotc.umich.edu/" target="_blank">Michigan ROTC</a>
			
		</p>
        
		</div>
	
		
		</Row>

		<section className="rotc-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={7} >
			<h2>Wireframe and Restruction</h2>
			<p>We began the process by speaking with our client, who expressed dissatisfaction with the previous version of their website but were unsure of how to improve it. Upon examining the website, 
				we discovered that the issue was not with the actual content, but rather with its presentation.</p>
			<p >The previous design resembled a blog more than an introduction website, which did not help the client achieve their goal of recruiting new members. As a result, we decided to revamp the 
				structure of the website by featuring a large, visually striking photo at the top and incorporating more images to illustrate what life in the Wolverine Battalion is like, rather than just relying on text.</p>
			</Col>
			<Col xs={12} md={5}>
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-wireframe-alt.jpg" src="./assets/img/rotc/rotc-wireframe.jpg" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>

   



		<section className="rotc-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
			
		   <Col xs={12} md={7}  className="float-right" >
			<h2 >Color Palette and Homepage Design</h2>
			<p >
			After creating a wireframe for the website's structure, we began designing the homepage, as it contains 
			many visual elements and serves as the foundation for the design of the entire website. We used a dark color 
			palette with shaded colors, and paired it with bright and clear content and font colors. The primary colors 
			we chose were steel and maize.
			</p>
					
			
			</Col>
			<Col xs={12} md={5} className="float-left">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-visual-alt.jpg" src="./assets/img/rotc/rotc-visual.jpg" className="img-fluid" />

			</Col>
			
			</Row>
		</Container>

		</section>
		

		<section class="rotc-img-3"  >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
 		 <h2 >Redesign the other page templates for the website</h2>
		
	 
			<p>
			For the ROTC website, we created three main templates for the design: the homepage, the content page, and the form. On the homepage, 
			we used three cards to highlight the main sections of the website and applied an overlay effect to display descriptions. For the content 
			pages, we employed a sidebar to categorize the different sections within each page. For the form, we divided it into three distinct parts 
			instead of presenting the entire form at once.
			</p>
		</Col> 
		   
		
			<div className="image-row">
			<div className="one-third-img">
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-1-alt.jpg" src="./assets/img/rotc/rotc-1.jpg" className="img-fluid" />
			</div>
			<div className="one-third-img">
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-2-alt.jpg" src="./assets/img/rotc/rotc-2.jpg" className="img-fluid" />
			</div>
			<div className="one-third-img">
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-3-alt.jpg" src="./assets/img/rotc/rotc-3.jpg" className="img-fluid" />
			</div>
			</div>
		
		</Row>
		</Container>
	</section>
 
 
	<section class="rotc-img-3">
	<Container>
	<Row className="vcenter" >
	
	<Col xs={12}>
	 <LazyLoadImage effect="blur" placeholderSrc="./assets/img/rotc/rotc-responsive-alt.png" src="./assets/img/rotc/rotc-responsive.png" className="img-fluid" />

			</Col>
			</Row>
			</Container>
	</section>



















    </section>
		
	
      
      )
    }
  }
  
  export default ROTC;