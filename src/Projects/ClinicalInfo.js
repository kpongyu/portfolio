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
								<p>The HIV.gov has launched the clinicalInfo website this year, which serves as a hub to combine the Clinical Guidelines, Drug
								Database and Glossary resources of HIV.gov which previously is splited, we are in charge of the design effort and has created
								a brandnew design pattern for the web components and elements to be used in the hub. Besides the website, previously HIV.gov
								has 3 splited mobile applications, ClinicalInfo Guidelines, Glossary and Drug Database which has quite different user experience
								and design, and I was assigned to create a new application with the updated ClinicalInfo design guidelines and merge the 3 apps
								into one to provide an unified user experience to the users.
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
								<h2>Finding the patterns through functionalities and merge apps into one</h2>
								<p>We started the process through analysis the current user flow in 3 different apps, although the design and styling of the
								apps are different, the major functionalities are similar, they are all served as a tool for the user to search the related
								chapters of guidelines, drug information, and glossary instructions, therefore the three apps can be merged into 3 tabs in our tabbar
								so the user can easily switch between each other. Besides the content, there are some common functions that are shared, such as
								taking a note, put a bookmark, alone with the set an alarm function to take the drug, which we put it inside a float action button which
								is always within reach to the users. With this structure, we simplified the 3 different apps into 3 major libraries plus 3 shared functions,
								and created an interaction map to outline the new application interactions based on the user flows, below is part of our interaction map that
								highlighted the Guideline section, with the user flows outlined to show how the screens interact between each other.
								</p>
							</Col>
							<Col xs={12}>
								<LazyLoadImage effect="blur" alt="ClinicalInfo interaction map" placeholderSrc="./assets/img/clinicalInfo/wireframe-alt.jpg" src="./assets/img/clinicalInfo/wireframe.jpg" className="img-fluid right-img" />
							
								<p className="label">Figure 2: ClinicalInfo Mobile App Interaction Map (Guideline Section)</p>
							</Col>

							<Col xs={12} >
								<h2>Apply new design patterns into application framework</h2>
								<p>After sorting out the user flow, the next step for us is to apply the design styles of the ClinicalInfo website into our application,
								there are some patterns we can easily inherit from the web, such as the color, font, and some icons, but when it comes to design patterns,
								they are quite different. On the website, we can easily create a large table and list all the items with filters always on the sidebar, but
								we won't have that much space on a mobile device, and we always want to make the searching experience as intuitive as possible. To handle
								the issues, we included a list of mobile patterns into our application, we put the filters on the top of the lists, and use a lightbox overlay for user
								to apply different filters, which make the application cleaner on the surface, besides, when the list is long, like the Drug Database list in Figure 3,
								we applied an alphabetical navigation to the right of the list so the user can easily juming to the spot near their target. We also made use of the floating action buttons
								when it comes to pages with long content, for users to quickly conduct the common actions (like take notes, jump to another section, etc.) quickly when they skimming the content.
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

								<p>We also defined a set of micro-interactions on certain screens to help improve the user experience of the application,
								the searching interaction the video present is one example of it, we always try to only display the useful information on
								the limited space we have, and hide the unnecessary part from the space, we also worked on the transition between different
								stages of the action to make the experience as smooth and easy as possible. By the end of the design process, we also generated
								a pattern library specific for the new application, to define the different components, iconset, buttons, as well as the different states of
								each component. The application is currently under development, and will be available on both Android and iOS system next year.
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