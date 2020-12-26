import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './NCBIVirus.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import Preloader from '../appshell/Preloader/Preloader';




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
<section className="ncbiVirus-header">
		<Container>
       
        
	<div className="ncbiVirus-header-content ">
    <img src="./assets/img/ncbi-virus/ncbi-virus-logo.png" className="ncbi-project-logo" alt="ncbi virus logo"/>
    <h1>NCBI Virus Variant Data Visualization</h1>
		<p >
		<strong>My Role</strong>: Web Developer, Designer<br/>
			<strong>Duration</strong>: 1 Year<br/>
			<strong>Deliverable</strong>: <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">NCBI Virus Variant Platform</a><br/>
		
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="section ncbi-section1" >
		<Container>
		<Row className="vcenter" >
	
		   <Col xs={12} md={6}  className="float-right" >
		   <h2 >Angular Driven platform to search virus through sequence or name</h2>
			<p >
			We worked closely with the NCBI Virus Variant team to created the Angular Driven Virus searching
			platform that researchers can search the related virus that they might interested in based on 
			virus name or sequence. We used the Angular Data-Table to fetch the data from NCBI API and displays
			the virus information through the data table. User can expand the data table to see additional details
			of the virus, and apply additional filters on the search result. I worked as the designer and front-end
			developer to help created the layout and make it responsive through different devices.
			</p>

			<p>
			One feature the team really want to realize is to create a data visualization widget in front of the 
			researchers for them to DISCOVER the virus and sequence they might be interested in. The data table is 
			good to display virus details, but it's hard for user to DISCOVER potential relationships between different
			virus and sequence, and the DISTRIBUTION of virus and sequence inside the domain. Based on this discussion,
			we explored quite a few different approaches and finally ends in the SunBurst graph that serves our purpose best.	
			</p>
		
					
			</Col>
			<Col xs={12} md={6} className="float-left">
			<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">
				<img src="./assets/img/ncbi-virus/table.png" alt="user-journey" class="img-fluid right-img"/>
			</a>
			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="ncbiVirus-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={6}>
			<h2>Initial Idea&mdash;Bubble Map</h2>
			<p>Our initial idea is to create Bubble Map, which made each category/sequence as bubbles. When a category contains additional
				categories, the first level categories will be displayed inside the larger bubble. User can click on the outside bubble to 
				dive deep into the inside categories and the larger bubble will become the new container.
			</p>
			<p>However, there are quite a few drawbacks of this approach that made us desert this idea in the final:</p>
			<ul>
				<li>First drawback is there are hundreds and thousands of sequences and categories we want to display, there are 
					lots of categories which has so few sequence for us to display it as a bubble, therefore in the mockup they are 
					combined together and used a number to show how many sequence are actually out there. Which definatelly is not
					a good approach for user to discover and explore sequences.
				</li>
				<li>
					It's hard to make good use of the space. The size of the bubble map largely depends on the number of 
					sequences in the current domain, and the size of the bubbles varied a lot. It's really hard for us to 
					make sure the bubbles are in the right size and displays the most information. 
				</li>
			</ul>
		     <p>After designing different use cases, we feel the bubble map is not a good approach to display a large sum of data 
				 and it's really hard for user to interact with the smaller sequences, we gave up this approach in the end.
			 </p>
			</Col>
			<Col xs={12} mdPull={8} md={6}>
				<img src="./assets/img/ncbi-virus/ncbi-bubble-map.jpg" alt="NCBI Bubble Map" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>


		<section className="ncbiVirus-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} mdPush={4} md={6}>
			<h2>The Tree Map and the Data Dashboard</h2>
			<p>We moved to the tree map as our second approach to the problem. Compare to Bubble Map, tree map is fixed
			in size, so even if the number of sequence is not big in some categories, it will still contains the full space,
			which patially solved the spacing problem and made it easier to develop. However, it still cannot solve the problem 
			when some sequences are too small to be clicked on, and for the smaller squares, it's hard to display the information 
			neither. We started developing this approach for a while, an additional problem we encoutered is we cannot guarantee 
			the sequence numbers are always good to form a square shape. the calculation can be very difficult. Therefore we finally 
			didn't go this approach, but it's one step forward compare to the bubble map. </p>
			<p>Another thing we started to think about is to make the visualization part not just a graphic, but a widget based dashboard 
			that each widget can interact with each other and present user a more comprehensive understanding of the sequence they selected.
			We made the visualization the taxonomy widget, and put a host distribution widget corresponding to it, when user select one host,
			the sequencs that shared this host will be highlighted, with the number of sequence displays below. The host is listed in a bar 
			graph, when user selected one host, the virus distribution will also listed besides it. We also included a Geographic distribution
			widget on the top. Although the widget dashboard is not totally adapted since when there are so many widget, it can also increase
			the complexity of the widget, it opens a door for us to make the visualization more comprehensive.
			</p>
			
			
			</Col>
			<Col xs={12} mdPull={8} md={6}>
				<img src="./assets/img/ncbi-virus/ncbi-square-map.jpg" alt="ncbi tree map" class="img-fluid right-img"/>
			</Col>
			</Row>
		</Container>

		</section>



		<section className="ncbiVirus-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		
		</Col>
		   <Col xs={12} md={6}>
		   <h2>Final Approach&mdash;Sunburst graph</h2>
			<p>As you can find through the <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">published website</a>&nbsp; 
			 we finally decided to use Sunburst graph to display the virus data. Comparing to the Bubble Map and the Tree Map, there are quite a few advantages to 
			use the Sunburst map for this challenge.	</p>

			<ul>
				<li>The Sunburst can display a few different layers at the same time, which makes the user easier to move back and forth between different layers.
				In our widget we limited the Sunburst to display 3 different layers. To provide user accessibility to 3 layers not only helps user to DISCOVER the 
				relationship between different sequences and to see the distribution of the host they selected, but make it easier for user to check the sequence that 
				are small, they can first check the layer that contains the targeted sequence, then the sequence can get more space to be displayed.
				We also included a breadcrumb on the top of the sunburst graph, which makes it possibile for user to jump outside from the 3 present layers when they dive deep 
				into the sequences.
				</li>
				<li>
				The Sunburst graph also has a fixed size, no matter how small or how large the current sequence is, how many sequences the current sequence contains, the size 
				can remain the same, it is also one of the reason why we set the limitation of layers to be 3, so it won't go beyond the area. You can even play with the widget 
				through a mobile device.
				</li>
			</ul>
			
		
			
		
			
			</Col>
			<Col xs={12} md={6}>
				<img src="./assets/img/ncbi-virus/ncbi-virus-sunburst.png" alt="ncbi virus sunburst" class="img-fluid right-img"/>
			</Col>
			
			</Row>

			<Row className="subRow">
			<Col xs={12} md={6} className="float-md-left">
				<img src="./assets/img/ncbi-virus/ncbi-virus-sunburst-2.png" alt="ncbi virus sunburst" class="img-fluid right-img"/>
			</Col>
			<Col xs={12} md={6} className="float-md-right">
		  
			<p>We also improved the dashboard idea to make it easier to link between the host distribution and the taxonomy of viruses.
			We reduced the number of widget at the stage and moved the host distribution side by side with the taxonomy. When user select 
			one host, the virus sequences that contain this host will be highlighted, while the selected host will also be highlighted in 
			the same color. For host that has a smaller number in the bar graph, we make both the bar and the sequence name clickable. We also
			slightly change the background color of the selected host to emphasis it. In this case, user can easily spot the host distribution in the 
			current sequences and the sequences in the next 2 layers. and user can quickly jump back and forth between different layers through the breadcrumb.
			Morever, to help solve the issue that there is no space to display the name of some smaller virus sequence, we introduced the tooltips which will 
			display when the mouse hover on the sequence, which enhanced the usability of the tool.  
			</p>

			
			<img src="./assets/img/ncbi-virus/ncbi-virus-highlight.png" alt="ncbi virus highlight" class="img-fluid right-img"/>
		
			
		
			
			</Col>
			
			</Row>
		</Container>

		</section>









		





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;