import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import '../css/style.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
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
		<section className="datim-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/datim/datim-header-alt.webp" src="./assets/img/datim/datim-header.webp" className="hero-bg" />
		<Container>
       
        
	<div className="datim-header-content ">
    <img src="./assets/img/datim/datim-logo.webp" className="project-logo" alt="seed logo"/>
    <h1>PEPFAR DATIM MSP system</h1>
		<p >
		<strong>My Role</strong>: Web Developer, Web Designer<br/>
			<strong>Duration</strong>: 6 months<br/>
			<strong>Prototype</strong>: <a href="https://www.icfcreative.com/2019/datim/v3/index.html" target="_blank" className="link_white">prototype link</a>
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >A system used by multiple agencies</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		 
			<p >
			Our goal is to design a system for PEPFAR users to access data records from three different sources: DATIM, PDH, and MOH data. 
			The system allows users to verify the information for indicators and data elements based on the MER guidance each year, 
			to calculate the data they have collected and ensure everything is correct. After conducting several rounds of interviews, 
			we identified three types of users: Data Managers, Solution Architects, and PEPFAR staff. Data Managers are responsible for 
			submitting data and need to use the system to find the appropriate codelists and indicators to validate the data before submission. 
			Solution Architects are responsible for maintaining the system and need to track how indicators and calculations have changed over time, 
			as well as identifying any discrepancies between the different systems. PEPFAR staff focus on ensuring the mapping between indicators and data 
			elements is correct and that the MER guidance is properly implemented.
			</p>
		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/datim/datim-personas-alt.webp" src="./assets/img/datim/datim-personas.webp" className="img-fluid right-img" />

			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>Divide the persona into specific goals and tasks</h2>
			<p>One of our major tasks was to divide the personas into their common goals and interpret those goals into smaller sub-tasks. 
				These sub-tasks were atomic enough that we could quickly identify the necessary information and elements to complete them. 
				For example, the graph below shows the division of tasks for the Solution Architect persona. From our interviews, we determined 
				that this role had three main goals: creating official reports that require calculations, analyzing the differences between DATIM 
				and PDH data, and reviewing official reports for discrepancies in totals. We then defined sub-tasks for each goal, such as finding 
				formulas and aligning MOH and PDH data to create official reports with calculations. Based on these sub-tasks, we were able to 
				define the metadata needed for each task, which formed the foundation for our layout design.
				 </p>
		
			</Col>
			<Col xs={12} md={12}>
			<LazyLoadImage effect="blur" alt="Datim User Tasks" placeholderSrc="./assets/img/datim/datim-user-tasks-alt.webp" src="./assets/img/datim/datim-user-tasks.webp" className="img-fluid right-img" />
			</Col>
			</Row>
		</Container>

		</section>


		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={6}>
			<h2>A collapsible table for displaying data elements</h2>
			<p>We developed a collapsible table to host data elements, which can be filtered using options on the right side such as source, 
				fiscal year, and type. Additional filters can be accessed through a "more filters" link. The most frequently used information, 
				such as the data element name and UID, are placed in the collapsing header. The description and disaggregations are located in 
				the collapsing body, and the formula is provided in both human-readable and UID formats to improve readability.</p>

			<p>Users can choose multiple data elements to download in various formats or to compare. The available types of data elements to download
				 include options from sources such as DATIM, PDH, and MOH. Users can compare data elements based on these sources. </p>
			
			</Col>
			<Col xs={12} mdPull={8} md={6}>
			 <LazyLoadImage effect="blur" alt="Datim Data Elements" placeholderSrc="./assets/img/datim/datim-dataelements-alt.webp" src="./assets/img/datim/datim-dataelements.webp" className="img-fluid right-img" />

			</Col>
			</Row>
		</Container>

		</section>



		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Comparing data elements from different sources</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>The comparison function is a highly requested feature by users. One key aspect is "alignment," which displays the same data element from different sources on the same line. To implement this, we created the comparison panel. The columns of the comparison panel are determined by the selected sources for comparison, which can be DATIM alone or DATIM alongside one or two other sources. The comparison panel is divided into rows, with each row representing a data element in DATIM. Depending on the relationship (1:1, 1:0, 1:many) between the DATIM data element and the related PDH and MOH data elements, a single row may contain multiple data elements from PDH and MOH.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
				<LazyLoadImage effect="blur" alt="datim Comparison Panel" placeholderSrc="./assets/img/datim/datim-comparison-alt.webp" src="./assets/img/datim/datim-comparison.webp" className="img-fluid right-img" />

			</Col>
			</Row>
		</Container>

		</section>









		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Linking indicators to related data elements</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>We also created an indicators page to present the most current indicators. A common request from users was to display related data 
				elements when an indicator is selected, so we combined data elements and indicators in a more organized format. As there is a limited 
				number of indicators, we grouped them for easier navigation. When an indicator is clicked, the definition and related data elements 
				are displayed on the right side. The data elements displayed are specific to the selected indicator, and in the details tab, we divided 
				the indicator details into collapsible boxes to reduce the length of the page.
			</p>
			
			</Col>
			<Col xs={12} md={7}>
			<LazyLoadImage effect="blur" alt="ddatim Indicators" placeholderSrc="./assets/img/datim/datim-indicators-alt.webp" src="./assets/img/datim/datim-indicators.webp" className="img-fluid right-img" />
			
			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;