import React, { Component, style } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import './ROTC.css'
import './ClinicalInfo.css'
import './Projects.css'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'
import $ from 'jquery'
import Preloader from '../appshell/Preloader/Preloader'
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';


class ClinicalInfo extends Component {
	handleLoad() {
		$('.preloader').addClass('active')

		setTimeout(function () {
			$('.preloader').hide()
		}, 2500)
	}

	constructor(props) {
		super(props)
		this.state = { spinner: true }

	}

	componentDidMount() {
		window.addEventListener('load', this.handleLoad)

	}

	render() {

		setTimeout(() => {
			this.setState({ spinner: false })
		}, 1000)

		return (

			<section>
				{this.state.spinner ? <Preloader /> : true}
				<section className="clinicalInfo-header  cd-header">
					<LazyLoadImage effect="blur" placeholderSrc="./assets/img/clinicalInfo/clinicalInfo-bg-alt.jpg" src="./assets/img/clinicalInfo/clinicalInfo-bg.jpg" className="hero-bg" />
					<Container>


						<div className="clinicalInfo-header-content ">
							<img src="./assets/img/clinicalInfo/logo.png" className="project-logo clinicalInfo-logo" alt="clinicalInfo logo" />
							<h1>ClinicalInfo Application Design</h1>
							<p >
								<strong>My Role</strong>: UX Designer, Product Designer<br />
								<strong>Duration</strong>: 6 Months<br />
								<strong>Client</strong>: <a className="header-link" href="https://clinicalinfo.hiv.gov/en" target="_blank">clinicalinfo.hiv.gov</a><br/>
								<strong>Deliverable</strong>: <a className="header-link" href="https://apps.apple.com/zw/app/clinicalinfo-drug-database/id942509562" target="_blank">Clinical Info App</a>

							</p>

						</div>



					</Container>
				</section>

				<section className="section" >
					<Container>
						<Row className="vcenter" >
							<Col xs={12} md={7} >
								<h2>A hub to combine Clinical Guidelines, Drug Database and Glossary</h2>
								<p>In 2021, HIV.gov launched the ClinicalInfo website, which brings together the Clinical Guidelines, 
									Drug Database, and Glossary resources that were previously separate on HIV.gov. I was in charge of 
									the design effort and created a new design pattern for the web components and elements to be used 
									on the hub. In addition to the website, HIV.gov previously had three separate mobile applications: 
									ClinicalInfo Guidelines, Glossary, and Drug Database. These apps had different user experiences and designs, 
									so I was assigned to create a new application using the updated ClinicalInfo design guidelines and merge 
									the three apps into one to provide a unified user experience for users.
								</p>
							</Col>
							<Col xs={12} md={5}>
								<LazyLoadImage effect="blur" alt="Clinicalinfo Website" placeholderSrc="./assets/img/clinicalInfo/web-alt.jpg" src="./assets/img/clinicalInfo/web.jpg" className="img-fluid right-img" />
							
								<p className="label">Figure 1: Updated ClinicalInfo Website</p>
							</Col>
						</Row>
					</Container>

				</section>


				<section className="clinicalInfo-section1 section" >
					<Container>
						<Row className="vcenter" >
							<Col xs={12} >
								<h2>Identifying patterns in functionality and consolidating multiple apps into one</h2>
								<p>We began the process by analyzing the current user flow in the three different apps. Although the design 
									and styling of the apps differed, their major functionalities were similar. All three apps serve as a 
									tool for users to search for related chapters of guidelines, drug information, and glossary instructions. 
									Therefore, we decided to merge the three apps into three tabs in our tab bar, allowing users to easily switch 
									between them. In addition to the content, there were some common functions shared between the apps, such as the 
									ability to take notes, bookmark items, and set alarms to remind users to take their medication. These functions 
									were placed in a floating action button that is always within reach for users. By simplifying the three different 
									apps into three major libraries plus three shared functions and creating an interaction map based on the user flows, 
									we were able to outline the new application interactions. The following is a part of our interaction map that highlights 
									the Guideline section and shows how the screens interact with each other through the user flows.
								</p>
							</Col>
							<Col xs={12}>
								<LazyLoadImage effect="blur" alt="ClinicalInfo interaction map" placeholderSrc="./assets/img/clinicalInfo/wireframe-alt.jpg" src="./assets/img/clinicalInfo/wireframe.jpg" className="img-fluid right-img" />
							
								<p className="label">Figure 2: ClinicalInfo Mobile App Interaction Map (Guideline Section)</p>
							</Col>

							<Col xs={12} >
								<h2>Implementing new design patterns into the application framework</h2>
								<p>After organizing the user flow, we moved on to the task of incorporating the design styles of the ClinicalInfo website 
									into our application. Some elements, like the color scheme, font, and some icons, were easily transferrable from the 
									website. However, when it came to design patterns, we faced some challenges. On the website, it is easy to create a 
									large table and display a list of items with filters always in the sidebar. However, on a mobile device, we have 
									limited space and want to make the search experience as intuitive as possible. To address this, we included a list of 
									mobile patterns in our application. We placed the filters at the top of the lists and used a lightbox overlay for users to apply 
									different filters, which keeps the surface of the application clean. Additionally, for long lists like the Drug Database list in 
									Figure 3, we added an alphabetical navigation on the right side of the list to allow users to easily jump to a spot near their target. 
									We also made use of floating action buttons on pages with long content to allow users to quickly perform common actions, like taking notes 
									or jumping to another section, while skimming through the content.
								</p>
							</Col>
							<Col xs={12}>
								<LazyLoadImage effect="blur" alt="ClinicalInfo Mobile Mockup" placeholderSrc="./assets/img/clinicalInfo/mockup-alt.png" src="./assets/img/clinicalInfo/mockup.png" className="img-fluid right-img" />
							
								<p className="label">Figure 3: ClinicalInfo Mobile App Mockup (Drug Database Section)</p>
							</Col>
						</Row>
					</Container>

				</section>

				<section className="clinicalInfo-section2 section" >
					<Container>
						<Row className="vcenter" >
							<h2>Pattern Library and Micro-Interactions</h2>
							<Col xs={12} md={8} >

								<p>To further enhance the user experience of the application, we also defined a set of micro-interactions for certain screens. 
									The searching interaction shown in the video is an example of this. We always strive to display only useful information on 
									the limited space available, while hiding unnecessary information. We also focused on the transitions between different stages 
									of an action to make the experience as smooth and easy as possible. At the end of the design process, we created a pattern library 
									specifically for the new application, which outlines the different components, icons, buttons, and states of each component. 
									
								</p>
								<LazyLoadImage effect="blur" alt="ClinicalInfo Mobile App Element Libraries" placeholderSrc="./assets/img/clinicalInfo/elements-alt.png" src="./assets/img/clinicalInfo/elements.png" className="img-fluid right-img" />
							
								<p className="label">Figure 4: ClinicalInfo Mobile App Element Libraries</p>
							</Col>
							<Col xs={12} md={4}>
								<LazyLoadComponent effect="blur" placeholderSrc="./assets/img/clinicalInfo/poster.jpg">
									
								
									<video loop autoPlay className="responsive-video" >
									<source src="./assets/img/clinicalInfo/clinical-Info-Scrolling.mp4" type="video/mp4" />
									</video>
									
								</LazyLoadComponent>
								<p className="label">Video 1: ClinicalInfo Mobile App Micro-Interaction Example</p>
							</Col>
						</Row>
					</Container>

				</section>
















			</section>



		)
	}
}

export default ClinicalInfo