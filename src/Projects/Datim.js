import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './Datim.css';
import './Projects.css';
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
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/datim/datim-header-alt.jpg" src="./assets/img/datim/datim-header.jpg" className="hero-bg" />
		<Container>
       
        
	<div className="datim-header-content ">
    <img src="./assets/img/datim/datim-logo.png" className="project-logo" alt="seed logo"/>
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
		<h2 >A System used by a number of different users</h2>
		</Col>
		   <Col xs={12} md={5}  className="float-right" >
		 
			<p >
			We are aimed to create a system for a range of different users from PEPFAR to look for data records
			from 3 different data source, namely DATIM, PDH, and MOH data. User are supposed to check the information of 
			the Indicators and Data Elements from the system, based on the MER Guidance each year, to calculate the data
			they collected and see if everything is good. We defined 3 different types of user after several rounds of interviews,
			namely Data Managers, solution architects, and PEPFAR staffs. Data Managers are the users that are supposed to submit data 
			and they need to find the right codelists and indicators from the system to validate the data before submit them. Solution 
			Architects are the users that need to maintain the system, they need to understand how indicators and calculations have changed
			during the time, and spot the difference between the different systems to see if there is anything wrong in formula. Pepfar staff 
			are focusing on the mapping between the indicators and data elements are correct, and make sure the MER guidance is correctly implemented.
				
			</p>
		
					
			</Col>
			<Col xs={12} md={7} className="float-left">
			<LazyLoadImage effect="blur" placeholderSrc="./assets/img/datim/datim-personas-alt.png" src="./assets/img/datim/datim-personas.png" className="img-fluid right-img" />

			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>Split persona to individual goals and tasks</h2>
			<p>A major task for us to split the personas to find the common goals each of them will do, 
			and interpret the goals into different sub-tasks. Since each sub-task is atomic enough, we can quickly find out the information and elements that needed 
			to complete this sub-task. For example, the graph below is the division of the solution architect. From interviews we conclude the 3 goals of this role, create 
			official reports that need to calculate, analysis the different results between DATIM and PDH data, and review the official reports and see a discrepancy in totals.
			then we defined the sub-tasks for each goal, like to create the official reports to calculate, a solution architect needs to find the formulas, then align MOH and PDH data,
			and track the linkage in the end. Based on the sub-tasks, we can finally define the metadata needed for the tasks, which is the foundation for us to create layout.
				 </p>
		
			</Col>
			<Col xs={12} md={12}>
			<LazyLoadImage effect="blur" alt="Datim User Tasks" placeholderSrc="./assets/img/datim/datim-user-tasks-alt.png" src="./assets/img/datim/datim-user-tasks.png" className="img-fluid right-img" />
			</Col>
			</Row>
		</Container>

		</section>


		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={6}>
			<h2>A selectable collapsing table to host data elements</h2>
			<p>We created a selectable collapsing table to host data elements. User can filter the data elements through filters on the right site,
			including source, fiscal year and type as the primary ones, while user can implement more filters through the more filters link, 
			For data elements, we put the data element name, UID to the collapsing header, since those are the most frequently used information
			the users need. in the collapsing body, we put the description and disaggregations inside, for the formula, since solution architects have
			claimed it's hard to read sometimes, we put the human readable format and UID format options inside. </p>

			<p>User can select multiple data elements to either download the data elements in different formats, and compare the selected data elements.
			There are several different types of data elements user can download, and user can compare the data elements based on the sources, including 
			DATIM, PDH and MOH. </p>
			
			</Col>
			<Col xs={12} mdPull={8} md={6}>
			 <LazyLoadImage effect="blur" alt="Datim Data Elements" placeholderSrc="./assets/img/datim/datim-dataelements-alt.jpg" src="./assets/img/datim/datim-dataelements.jpg" className="img-fluid right-img" />

			</Col>
			</Row>
		</Container>

		</section>



		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Compare Data Elements across different sources</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>The comparison function is one of the most important function that users needed. "Alignment" is one of the key feature,
				which present the same data element in different sources in the same line. We created the comparison panel to realize the 
				function. The columns of the comparison panel is decided by checking the comparison button sources, it can either be DATIM itself,
				or DATIM and one or two other sources. The comparison panel is divided through different rows, each row represents one data element 
				in DATIM, since there are 1:1 or 1:0, 1:many relationships between the DATIM data element and the PDF, MOH data elements related, each 
				row might contain several data elements for PDH and MOH.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
				<LazyLoadImage effect="blur" alt="datim Comparison Panel" placeholderSrc="./assets/img/datim/datim-comparison-alt.jpg" src="./assets/img/datim/datim-comparison.jpg" className="img-fluid right-img" />

			</Col>
			</Row>
		</Container>

		</section>









		<section className="datim-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Link the Indicators with the data elements related</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>We also created the indicators page to present the up-to-date indicators. One big request the users have is to display
				the related data elements when user selected one indicator, therefore we can combine the data elements and indicators 
				in a better format. Since there are only a fixed number of indicators out there, we divided them into different groups
				for user to find them. When click on the indicator, we present the indicator definations and the data elements related 
				on the right side. The data elements only includes the ones that related to this indicator, and in the details tab we 
				split the indicator details in different collapsed boxes to reduce the length of the page.
			</p>
			
			</Col>
			<Col xs={12} md={7}>
			<LazyLoadImage effect="blur" alt="ddatim Indicators" placeholderSrc="./assets/img/datim/datim-indicators-alt.jpg" src="./assets/img/datim/datim-indicators.jpg" className="img-fluid right-img" />
			
			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;