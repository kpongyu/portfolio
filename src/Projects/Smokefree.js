import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import $ from 'jquery';
import './Smokefree.css';
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

			  <section className="smokefree-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/smokefree/smokefree-header-alt.jpg" src="./assets/img/smokefree/smokefree-header.jpg" className="hero-bg" />
		<Container>
       
        
	<div className="smokefree-header-content ">
    <img src="./assets/img/smokefree/smokefree-logo.png" className="project-logo" alt="seed logo"/>
    <h1>Smokefree QuitGuide App</h1>
		<p >
		<strong>My Role</strong>: Interaction Designer, React-Native Developer<br/>
			<strong>Duration</strong>: 3 Years<br/>
			<strong>Deliverable</strong>: <br/>
			<a className="header-link" href="https://smokefree.gov/" target="_blank">smokefree.gov</a><br/>
			<a className="header-link" href="https://smokefree.gov/tools-tips/apps/quitguide" target="_blank">Smokefree QuitGuide App</a><br/>
			
		</p>
        
		</div>
	
		
		
		</Container>
		</section>


		<section className="smokefree-fixed-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >The World Largest Quit Smoking Platform for multiple audience</h2>
		</Col>
		   <Col xs={12} md={7}  className="float-right" >
			
			<p >
			Smokefree.gov is largest quit smoking platform sponsored by National Cancer Institute, 
			based on the demographic of audience, the website provides typical solutions 
			for different audience to quite smoking. We made a side-wise redesign during the year 2017 
			to re-organized the site content strategies, when we focused on 4 different stages from the 
			"journey" of user quit smoking, namely "I want to quit", "my quit day", "I recently quit", 
			and "staying quit", and include different tips and content to help assist the journey in different
			stages. After figuring out the "Smokefree Journey", we started to think about creating an app that 
			can help the user to keep track of the journey, since website is more of a portal of information, not 
			a personalized tracker, and this is where the idea of QuitGuide app came into being.				
			</p>
		
					
			</Col>
			<Col xs={12} md={5} className="float-left">
							  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/smokefree/smokefree-desktop-alt.png" src="./assets/img/smokefree/smokefree-desktop.png" className="img-fluid" />
			</Col>
			
			</Row>
		</Container>

		</section>
		

		
		<section className="smokefree-bg section information-flow" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12} md={12}>
			<h2>The Design of Smokefree Journey</h2>
			<p>We designed the journey of the QuitGuide App by following the different stages we defined on our website, to concrete the concept of "journey", we used 
			many metaphors inside the app to emphasis the idea. As the information flow shows below, the main screen of the app shows a mountainous background, with the 
			color scheme reflecting the time of the day, which helps bring back the user to the journey and relate the journey to the everyday life. We also included a 
			milestones based journey screen with a path to the Smokefree Day with milestones on the path, that added the awarding system with the journey, and this journey 
			to the destination serves as the main string that links all the features together inside the app, which is rather easy for the user to follow and understanding. 
			</p>
			<p>With the journey setup, we are able to bring all the content and features we currently have inside the app. For instance, we added the two main call-to-action 
				buttons on the home screen to help track whether the user is smokefree or not each day, and based on the feedback, we provided the user with personalized challenges,
				tips, and inspirations. The journey is pushed forward through the number of days that the user kept smokefree, plus the challenges and tips they followed when they 
				smoked during the time. We also included the Quiting Tutorials and emotion records to help track and improve the efficiency of the journey.
			</p>
			
			<LazyLoadImage effect="blur" alt="other content type" placeholderSrc="./assets/img/smmokefree/information-flow-alt.png" src="./assets/img/smokefree/information-flow.png" className="img-fluid image-within-content" />
			</Col>
			
			</Row>
		</Container>

		</section>


		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		   <Col xs={12}>
			<h2>A further definition of the user flow with different use cases</h2>
			<p>Once the main user flow is defined, we took a step further to define the different use cases and behaviors for each screen inside the journey.
				Below is the example we defined for the initial onboarding screens for the app. This way we can identify the specific use cases, such as what 
				would happen when the user hit smokefree button in less of a day, how the screen would look like in different time span of the day, those cases
				can be omit when the main journey is defined, but is important to look into when we start the developing process.
			</p>
			
			
			</Col>
			<Col xs={12}>
							  <LazyLoadImage effect="blur" alt="UUser Behavior" placeholderSrc="./assets/img/smokefree/user-behavior-alt.jpg" src="./assets/img/smokefree/user-behavior.jpg" className="img-fluid" />
				
			</Col>
			</Row>
		</Container>

		</section>



		<section className="smokefree-bg section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		
		</Col>
		   <Col xs={12} md={5}>
							  <h2>Smokelyzer Testing Flow Design</h2>
			<p>Another cool feature included inside the app is the Smokelyzer Testing, which is something only the mobile app can achieve, compare to the 
			   website, that user with Smokelyzer can link to the app through BlueTooth and see the testing results, which can act as a 
				proof of smokefree days and is currently under testing as an add-on feature. We used illustration styles to help guide the user through the process,
				which can help highlight the gestures or actions to take and matches well with the rest of the app, and we simplified the process into 3 steps to 
				avoid confusing the user, and always leave a secondary step to take if the user encountered some issue during the process.

			</p>
			
			
			
			</Col>
			<Col xs={12} md={7}>
			 <LazyLoadImage effect="blur" alt="Smokelyzer Screens" placeholderSrc="./assets/img/smokefree/smokelyzer-alt.png" src="./assets/img/smokefree/smokelyzer.png" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>









			  <section className="future-section section" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2>Future: A cross-device platform?</h2>
		</Col>
		   <Col xs={12} md={5}>
			
			<p>What would be the next step to futher integrate the Smokefree platforms? The most inspiring idea is to create a platform that 
				goes beyond any specific devices, so that the user can keep track of their Smokefree Journey not only through web or app, but 
				whenever they got access to the internet. Also, social networking can be another key feature to consider about, we usually highlight
				specific success stories through social media, but a better idea is for people with the same goal to encourage each other and make the 
				smokefree journey not lonely any more. There are lots of meaningful conversation goes behind the scene and the platform would be much 
				more than a website or an app in the future.
			</p>
			
		
			
			</Col>
			<Col xs={12} md={7}>
							  <LazyLoadImage effect="blur" alt="Smokefree NRT Campaign" placeholderSrc="./assets/img/smokefree/future-alt.jpg" src="./assets/img/smokefree/future.jpg" className="img-fluid" />

			</Col>
			</Row>
		</Container>

		</section>





    </section>
		
	
      
      )
    }
  }
  
  export default CivicLab;