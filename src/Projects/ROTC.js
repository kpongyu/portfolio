import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './ROTC.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';





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
        <Row className="rotc-header">
        
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
			<p>We start by interviewing our client, who are not satisfied with the past version of website,
            but not sure how to make it more inviting. After looking through the website, we found the problem
            is not based on the contents, but the way they present the contents.</p>
			<p >The previous design is much more like a blog than a introduction website, which cannot reach the goal for them to recruit more rookies. So we decide to change the
            structure, put a large cool photo at the first glance, using more images to present what the life would be like as a wolverine battalian, not just through words.</p>
			</Col>
			<Col xs={12} md={5}>
				<img src="./assets/img/rotc/rotc-wireframe.png" alt="user-journey" class="img-fluid right-img"/>
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
			
                    After complete wireframing the website structure, we started with designing the Homepage, since
                    the homepage contains most visual elements and can lead the design of the whole website.We use a darker color palette with shade color, while making the content and font color bright and clear. The primary colors are steel and maize.
                   
                    
				
				
			</p>
					
			
			</Col>
			<Col xs={12} md={5} className="float-left">
				<img src="./assets/img/rotc/rotc-visual.png" alt="user-journey" class="img-fluid right-img"/>
			</Col>
			
			</Row>
		</Container>

		</section>
		

		<section class="rotc-img-3"  >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
 		 <h2 >The construction of different pages</h2>
		
	 
			<p>
			There are three major templates for the design of ROTC page, including the Homepage, the Content page,
			and the Form. We use three cards on the homepage to present the major sections of the website, using the
			overlay effect to present the descriptions. For content page, we use sidebar to represent the different sections
			inside each section. For form, we separate the form into three different parts, instead of presenting the whole
			form at first place.
			</p>
		</Col> 
		   
		
			<div className="image-row">
			<div className="one-third-img">
			<img src="./assets/img/rotc/rotc-1.png" alt="past version" className="img-fluid"/>
			</div>
			<div className="one-third-img">
			<img src="./assets/img/rotc/rotc-2.png" alt="past version" className="img-fluid"/>
			</div>
			<div className="one-third-img">
			<img src="./assets/img/rotc/rotc-3.png" alt="past version" className="img-fluid"/>
			</div>
			</div>
		
		</Row>
		</Container>
	</section>
 
 
	<section class="rotc-img-3">
	<Container>
	<Row className="vcenter" >
	<Col xs={12}>
			There are three major templates for the design of ROTC page, including the Homepage, the Content page,
			and the Form. We use three cards on the homepage to present the major sections of the website, using the
			overlay effect to present the descriptions. For content page, we use sidebar to represent the different sections
			inside each section. For form, we separate the form into three different parts, instead of presenting the whole
			form at first place.
	</Col>
		  
	<Col xs={12}>
	<img src="./assets/img/rotc/rotc-responsive.png" alt="responsive" class="img-fluid"/>
			</Col>
			</Row>
			</Container>
	</section>



















    </section>
		
	
      
      )
    }
  }
  
  export default ROTC;