import React, { Component, style } from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import './Socalren.css';
import './Projects.css';
import ReactDOM from 'react-dom';
import Iframe from 'react-iframe';
import $ from 'jquery';
import Lottie from 'react-lottie';
import Preloader from '../appshell/Preloader/Preloader';
import * as financingData from "../../public/assets/lottie/financing.json";
import * as publicAgenciesData from "../../public/assets/lottie/publicAgencies.json";
import * as residentialData from "../../public/assets/lottie/residential.json";
import * as workforceData from "../../public/assets/lottie/workforce.json";
import * as fuzzymuzzyData from "../../public/assets/lottie/fuzzy-muzzy.json";
import * as lavenderData from "../../public/assets/lottie/lavender.json";
import * as gingerData from "../../public/assets/lottie/ginger.json";
import * as spikeData from "../../public/assets/lottie/spike.json";
import * as specsterData from "../../public/assets/lottie/specster.json";
import { LazyLoadImage, LazyLoadComponent } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

class Socalren extends Component {


	
		

	handleLoad() {
		$('.preloader').addClass('active');
	
		setTimeout(function() {
		  $('.preloader').hide();
		}, 2500);
	  }

	constructor(props) {
		super(props);
		this.state = {spinner: true};
		this.state = {
			financingisStopped: true, financingisPaused: true, 
			publicAgenciesisStopped: true, publicAgenciesisPaused: true, 
			residentialisStopped: true, residentialisPaused: true, 
			workforceisStopped: true, workforceisPaused: true, 
			speed: 1};
	  
	  }
	  componentDidMount(){
		window.addEventListener('load', this.handleLoad);
		this.setState({
			speed: 1
		  })
	  }
  
    render() {

		const fuzzyMuzzyOptions = {
			loop: true,
			autoplay: true,
			animationData: fuzzymuzzyData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			},
		}

		const lavenderOptions = {
			loop: true,
			autoplay: true,
			animationData: lavenderData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			},
		}

		const gingerOptions = {
			loop: true,
			autoplay: true,
			animationData: gingerData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			},
		}

		const spikeOptions = {
			loop: true,
			autoplay: true,
			animationData: spikeData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			},
		}

		const specsterOptions = {
			loop: true,
			autoplay: true,
			animationData: specsterData,
			rendererSettings: {
				preserveAspectRatio: 'xMidYMid slice'
			},
		}

		const financingOptions = {
			loop: false,
			autoplay: true, 
			animationData: financingData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const publicAgenciesOptions = {
			loop: false,
			autoplay: true, 
			animationData: publicAgenciesData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const residentialOptions = {
			loop: false,
			autoplay: true, 
			animationData: residentialData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
		const workforceOptions = {
			loop: false,
			autoplay: true, 
			animationData: workforceData,
			rendererSettings: {
			  preserveAspectRatio: 'xMidYMid slice'
			},
		  };
	
		setTimeout(() => {
			this.setState({ spinner: false });
		  }, 1000);


      return (

        <section>
{this.state.spinner ? <Preloader/> : true}
			  <Row className="socalren-header  cd-header">
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/socalren/socalren-header-alt.webp" src="./assets/img/socalren/socalren-header.webp" className="hero-bg" />
	<div className="socalren-header-content">
    <img src="./assets/img/socalren/socalren-logo.webp" className="socalren-logo" alt="socalren logo"/>
    <h1>SocalREN and Energy Monsters</h1>
		<p >
		<strong>My Role</strong>: Interaction Designer, Front-end Developer<br/>
			<strong>Duration</strong>: 3 years<br/>
			<strong>Delierable</strong>: <a href="https://socalren.org/"  target="_blank" className="header-link">socalren.org</a>
						 , <a href="https://energymonsters.fun/" target="_blank" className="header-link">energymonsters.fun</a>
			
		</p>
        
		</div>
	
		
		</Row>

   



		<section className="section socalren-section" >
		<Container>
		<Row className="vcenter" >
		
		   <Col xs={12} md={7}  className="float-right" >
		   <h2 >Visual Branding Establishment</h2>
			<p >
			Southern California Regional Energy Network (SoCalREN) teamed up with ICF to develop a new branding strategy to promote the organization and 
			reach a wider audience. SoCalREN is focusing on four main programs: residential consumers, multifamily units, financing sectors, and public agencies. 
			To visually represent these programs, we chose the regional flower Echeveria as the basis for our color palette and selected four colors from its 
			natural photos to symbolize each program.
				
				
			</p>
			<img src="./assets/img/socalren/color-palette.webp" alt="color palette" className="img-fluid right-img image-within-content socalren-content-image"/>
					
			</Col>
			<Col xs={12} md={5} className="float-left">
				<LazyLoadImage effect="blur" alt="user-journey" placeholderSrc="./assets/img/socalren/branding-alt.webp" src="./assets/img/socalren/branding.webp" className="img-fluid" />
				
			</Col>
			
			</Row>
		</Container>

		</section>
		

		<section className="section socalren-section-2" >
		<Container>
		<Row className="vcenter" >
		<Col xs={12}>
		<h2 >Mobile-First Design Approach and Web Development</h2>
		</Col>
						  <Col xs={12} md={8} className="float-left">
							  <LazyLoadImage effect="blur" alt="mobile interaction" placeholderSrc="./assets/img/socalren/mobile-alt.webp" src="./assets/img/socalren/mobile.webp" className="img-fluid" />


						  </Col>
		   <Col xs={12} md={4}  className="float-right" >
		   
			<p >
			Our first web-based task was to create a Drupal-based website for SoCalREN using the established theme. 
			We began the web development process with a mobile-first approach, since the four main projects are the 
			primary call-to-actions on the homepage. We incorporated the color patterns and used program-specific colors 
			for active states and shades of relevant icons and components. When we first developed the site, we had very 
			limited content, but the color-themed framework allowed the account team to easily organize and categorize content 
			from the Drupal backend. Now, several years later, the site has grown significantly without requiring major structural changes, 
			thanks to the strong foundation we established at the beginning.
			
				
				
			</p>

		
			
					
			</Col>

			<Col xs={12}>
							  <p >

			 To improve user interaction, we designed four cards with Lottie-based animations that are inspired by piano keys. 
			 When a user hovers over them, there is a simple micro-interaction. These cards remain at the top of the mobile screen as 
			 the user scrolls down, providing easy access to the different programs. You can try interacting with the elements below to see how it works.


								 



							  </p>
			</Col>
			
			<Col xs={12} className="animatedIconsContainer">
			<div className="animatedIcons"  
			onMouseEnter={() => this.setState({ financingisPaused: false, financingisStopped: false })}  
			onMouseLeave={() => this.setState({ financingisPaused: true, financingisStopped: true})}>
				<Lottie options={financingOptions}
              height={150}
              width={150}
              isStopped={this.state.financingisStopped}
              isPaused={this.state.financingisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>


			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({publicAgenciesisPaused: false, publicAgenciesisStopped: false })}  
			onMouseLeave={() => this.setState({ publicAgenciesisPaused: true, publicAgenciesisStopped: true})}>
				<Lottie options={publicAgenciesOptions}
              height={150}
              width={150}
              isStopped={this.state.publicAgenciesisStopped}
              isPaused={this.state.publicAgenciesisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({ residentialisPaused: false, residentialisStopped: false })}  
			onMouseLeave={() => this.setState({ residentialisPaused: true, residentialisStopped: true})}>
				<Lottie options={residentialOptions}
              height={150}
              width={150}
              isStopped={this.state.residentialisStopped}
              isPaused={this.state.residentialisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			   <div className="animatedIcons"  
			onMouseEnter={() => this.setState({ workforceisPaused: false, workforceisStopped: false })}  
			onMouseLeave={() => this.setState({ workforceisPaused: true, workforceisStopped: true})}>
				<Lottie options={workforceOptions}
              height={150}
              width={150}
              isStopped={this.state.workforceisStopped}
              isPaused={this.state.workforceisPaused}
              speed={this.state.speed}
             
             
              />
			   </div>
			</Col>
			</Row>
		</Container>

		</section>



			  <section className="section socalren-section" >
				  <Container>
					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h2 >Energy Monsters and Kits4Kids</h2>
						  </Col>
						  <Col xs={12} md={8} className="float-left">
							  <LazyLoadComponent effect="blur" placeholderSrc="./assets/img/socalren/monster-alt.webp">
								  <video loop autoPlay className="responsive-video" poster="./assets/img/socalren/monster-alt.webp" >
									  <source src="./assets/img/socalren/monsters.mp4" type="video/mp4" />

								  </video>
							  </LazyLoadComponent>


						  </Col>
						  <Col xs={12} md={4} className="float-right" >

							  <p >
								A year later, we resumed work on a new project called Kits4Kids, which aims to educate kids about energy-saving tips through gamified materials. 
								We created several Energy Monsters to serve as guides for kids to learn about energy conservation. The website we created serves as a portal 
								for kids to access different games, each of which features an Energy Monster in need of help, animated using Lottie. Kids can start a game by 
								clicking on a call-to-action button or navigate to different monsters and games using the top or side menus. Here is an introduction to the Monsters and games:



							  </p>




						  </Col>
						</Row>

					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Fuzzy Muzzy</h3>
						  </Col>
						
						  <Col xs={12} md={7} className="float-right" >

							  <p >
								Fuzzy Muzzy is the main character among the monsters and will introduce kids to all of his friends. The game associated with Fuzzy Muzzy is an item-match game in which kids must place items in the correct spots.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html" target="_blank">
							  <LazyLoadImage effect="blur" alt="fuzzy muzzy game" placeholderSrc="./assets/img/socalren/fuzzy-muzzy-game-alt.webp" src="./assets/img/socalren/fuzzy-muzzy-game.webp" className="img-fluid" />
								</a>

						  </Col>
						  <Col xs={12} md={5} className="float-left">
							  <Lottie options={fuzzyMuzzyOptions}
								  height={400}
								  width={400}

								  speed={this.state.speed}


							  />


						  </Col>
					  </Row>

					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Lavender</h3>
						  </Col>

						  <Col xs={12} md={7} className="float-right" >

							  <p >
								 Lavender is the second energy monster and is associated with a card-match game that teaches kids about common renewable and nonrenewable energies in daily life.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Lavender_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="lavender game" placeholderSrc="./assets/img/socalren/lavender-game-alt.webp" src="./assets/img/socalren/lavender-game.webp" className="img-fluid" />
</a>

						  </Col>
						  <Col xs={12} md={5} className="float-left">
							  <Lottie options={lavenderOptions}
								  height={400}
								  width={400}

								  speed={this.state.speed}


							  />


						  </Col>
					  </Row>


					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Ginger</h3>
						  </Col>

						  <Col xs={12} md={7} className="float-right" >

							  <p >
								  Ginger is featured in a game called Energy Facts. In this game, kids roll a dice to move Ginger along a path. When they answer an energy fact question correctly, Ginger moves forward.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Ginger_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="ginger game" placeholderSrc="./assets/img/socalren/ginger-game-alt.webp" src="./assets/img/socalren/ginger-game.webp" className="img-fluid" />
</a>

						  </Col>
						  <Col xs={12} md={5} className="float-left">
							  <Lottie options={gingerOptions}
								  height={400}
								  width={400}

								  speed={this.state.speed}


							  />


						  </Col>
					  </Row>

					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Spike</h3>
						  </Col>

						  <Col xs={12} md={7} className="float-right" >

							  <p >
								Spike travels around the city and encounters different types of transportation. He can earn points by choosing eco-friendly options and avoid those that are energy-intensive.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Spike_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="spike game" placeholderSrc="./assets/img/socalren/spike-game-alt.webp" src="./assets/img/socalren/spike-game.webp" className="img-fluid" />
</a>

						  </Col>
						  <Col xs={12} md={5} className="float-left">
							  <Lottie options={spikeOptions}
								  height={400}
								  width={400}

								  speed={this.state.speed}


							  />


						  </Col>
					  </Row>

					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Specster</h3>
						  </Col>

						  <Col xs={12} md={7} className="float-right" >

							  <p >
								Specster is learning about energy-related terms and trying to complete an energy crossword puzzle. Hints are provided to help kids fill in the crossword with energy-related terms.	  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Specster_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="specster game" placeholderSrc="./assets/img/socalren/specster-game-alt.webp" src="./assets/img/socalren/specster-game.webp" className="img-fluid" />
</a>

						  </Col>
						  <Col xs={12} md={5} className="float-left">
							  <Lottie options={specsterOptions}
								  height={400}
								  width={400}

								  speed={this.state.speed}


							  />


						  </Col>
					  </Row>


					  <p className="mt-5">
					EnergyMonsters.fun is an extension of the SoCalREN project that aims to educate kids and teachers about energy conservation. 
					It not only serves as an information hub, but also as a game center specifically designed for kids. This project gave me the 
					opportunity to work with e-learning game developers and motion graphics specialists, and to utilize the Lottie animation 
					library to bring the monsters to life. This website is unique in comparison to others because of these interactive and animated features.	  </p>

						  

				  </Container>

			  </section>






	







    </section>
		
	
      
      )
    }
  }
  
  export default Socalren;