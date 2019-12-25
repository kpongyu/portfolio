import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Mymic.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Preloader from '../appshell/Preloader/Preloader';





class Mymic extends Component {

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

        <div>
{this.state.spinner ? <Preloader/> : true}
        <Row className="cd-header mymic-header">
    <video id="background-video" loop autoPlay playsInline className="mymic-title-video">
                <source src="./assets/img/mymic/demo.mp4" type="video/mp4" />
               
    </video>        
	<div>
    <img src="./assets/img/mymic/mymic.png" className="project-logo mymic-logo" alt="amazon logo"/>
    <h1>	Mobile Card System Design</h1>
		<p className="amazon-header">
			<strong>My Role</strong>: User Experience Designer, Visual Designer<br/>
			<strong>Duration</strong>: 3 Months<br/>
			
		</p>
        
		</div>
	
		
		</Row>

		<section className="section cd-fixed-background mymic-fixed-bg">
		<Row className="cd-content shadow-box">
		
			<h2 className="white-title">A device to help correct physical therapy gestures</h2>
			<p className="white-title">
			There are several exsiting problems in current physical therapy trainings, based on our interview from the PT Department of UofM,
			first, the therapy materials currently are mostly static and not digitalized, it's hard for trainers to follow from hard-copies. 
			Also, when taking the traings at home, there is no timely feedbacks and trainers often don't know if they are practicing in the right way.
			And it's common for trainers to be demotivated after training by themselves after a few months.
			</p>
			<p className="white-title">
			Inspired by the mataphor of mirror, we tried to use sensors to measure the current gesture of trainers, 
			tracking the gestures of the trainer and compare it to the correct gesture, and provide timely feedbacks to the trainers.
			</p>
			<p className="white-title">
			As a start, we created a device to track the basic gestures of the trainer using Shoulder75 exercise as an example. 
			The device is made up of Lilypad, accelerometers, LED, and Buzzer. The Lilypad can get the 3D location information 
			from the accelerometers, and send signals to the computer to check if the gesture is correct compares 
			to our demos. The LED and Buzzer then receive the feedback from the computer and make signals to the user. 
			The device is easy to make, without much cost.
			</p>
		</Row>
	</section>

   
		<section className="section1 section mymic-section">
    <Container>
		<Row className="vcenter" >
		   <Col xs={12} md={6} >
			<h2>The mapping between gesture, device, and interface</h2>
			<p>
			The system is a combination between gesture, device, and interface, 
			the trainer can get multiple feedbacks through the system, 
			they can see the difference between their current gesture and the demo gesture directly through the comparison on the screen. 
			When there is a difference between the demo and current gesture, the LED bulb on that part of the body would flash and the 
			buzzer will vibrate, which provides additional feedbacks for the trainer to learn and correct the gestures.

			</p>
			</Col>
			<Col xs={12} md={6} className="section-media-container">
			<img src="./assets/img/mymic/usecases.png" alt="user-journey" className="img-fluid section-image"/>
			</Col>
		</Row>
		</Container>
	    </section>
		

		<section className="section1 section mymic-section">
    <Container>
		<Row className="vcenter" >
		   <Col xs={12} md={6} >
			<h2>A gamification system to guide through the training process</h2>
			<p>
			When it comes to the training process, the system provides a gamification system to help trainer keep motivated. 
			There are 3 highlights of the system:
			<ul>
				<li>Feedback, instead of entertaining, is the most important factor towards the system since trainer can reflect the training persona to themselves.</li>
				<li>The system combined short-term, immediate feedback with the long-term feedback to reflect the statistical progress during the training process.</li>
				<li>The training is separated into different stages, focus on different training part, to avoid repeat.</li>
			</ul>

			</p>
			</Col>
			<Col xs={12} md={6} className="section-media-container">
			<img src="./assets/img/mymic/system.png" alt="user-journey" className="img-fluid section-image"/>
			</Col>
		</Row>
		</Container>
	    </section>



  







    </div>
		
	
      
      )
    }
  }
  
  export default Mymic;