import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



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
			  <Row className="civiclab-header cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/civiclab/bg-header-alt.jpg" src="./assets/img/civiclab/bg-header.jpg" className="hero-bg" />
	<div className="rotc-header-content">
    <img src="./assets/img/civiclab/civiclab-logo.png" className="project-logo civiclab-logo" alt="civiclab logo"/>
    <h1>Chicago TIF Viewer Development</h1>
		<p >
		<strong>My Role</strong>: Web Developer, Data Manipulator<br/>
			<strong>Duration</strong>: 2 Months<br/>
			<strong>Delierable</strong>: <a href="http://www.tifreports.com/tif-viewer/"  target="_blank" className="header-link">TIF Viewer</a>
			
		</p>
        
		</div>
	
		
		</Row>

		<section className="section civiclab-section1" >
		<Container>
		<Row className="vcenter" >
		<Iframe url="//www.tifreports.com/chicagotif/index.php?mydata=4"
        width="100%"
        height="690px"
        id="myId"
        className="civiclabFrame"
        display="initial"
        position="relative"/>
		</Row>
		</Container>

		</section>

   



		<section className="civiclab-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Develop Process and Geo-data visualization</h2>
		</Col>
		   <Col xs={12} md={7}  className="float-right" >
			
			<p >
		We decided to use Google Maps API to visualize our data, including ward boundaries, TIF areas, and individual projects on the same map. 
		The first step was to create Geojson files for the data. Geojson is a suitable data structure for drawing polygons onto Google Maps. 
		However, while the ward data was already in Geojson form, the other data provided by the client was not. Therefore, we wrote a Python 
		script to parse the GSI file and convert it into Geojson format. I then imported the resulting three Geojson files as three separate data layers on Google Maps.
				
				
			</p>
			<blockquote><p>Your work to bring the TIF Illuminator to life was amazing and we will be building on 
                     this work to show civic groups, tax payers and funders what we are trying to accomplish. 
                     I wish all good fortune in your continued studies and career journey!</p>
					 <span>&mdash;Tom Tresser, Co-Founder of Civiclab</span>
					 
					 </blockquote>		
					
			</Col>
			<Col xs={12} md={5} className="float-left">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/civiclab-alt/civiclab-photo.jpg" src="./assets/img/civiclab/civiclab-photo.jpg" className="img-fluid" />
				
			</Col>
			
			</Row>
		</Container>

		</section>
		

		


















    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;