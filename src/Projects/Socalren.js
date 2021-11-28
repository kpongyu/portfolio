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
				  <LazyLoadImage effect="blur" placeholderSrc="./assets/img/socalren/socalren-header-alt.jpg" src="./assets/img/socalren/socalren-header.jpg" className="hero-bg" />
	<div className="socalren-header-content">
    <img src="./assets/img/socalren/socalren-logo.png" className="socalren-logo" alt="socalren logo"/>
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
			SoCalREN, namely Southern California Regional Energy Network, worked with ICF to create a new brand to advertise the program and better reach out to a broader audience. 
			There are generally four major programs we are focusing on, including the residential consumers, the multifamily units, the financing sectors 
			and the public agencies. 
			To help better visually defining the services, we selected "Echeveria", which is a regional 
			flower popular in Southern Califorlia, as the basis of our color palette, and we selected four colors from the 
			natural photos to represent the different programs of SoCALREN.
				
				
			</p>
			<img src="./assets/img/socalren/color-palette.png" alt="color palette" className="img-fluid right-img image-within-content socalren-content-image"/>
					
			</Col>
			<Col xs={12} md={5} className="float-left">
				<LazyLoadImage effect="blur" alt="user-journey" placeholderSrc="./assets/img/socalren/branding-alt.png" src="./assets/img/socalren/branding.png" className="img-fluid" />
				
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
							  <LazyLoadImage effect="blur" alt="mobile interaction" placeholderSrc="./assets/img/socalren/mobile-alt.png" src="./assets/img/socalren/mobile.png" className="img-fluid" />


						  </Col>
		   <Col xs={12} md={4}  className="float-right" >
		   
			<p >
			The first web-based task we have is to create a Drupal based website for SoCalREN that follows the theming created. We start the web-developing process with mobile first approach, 
								  since the four entrances of different projects are the major call-to-action of the homepage,  we embedded the color patterns and assigned the program-based color to 
								  the active states and shades of the relevent icon and components.
								  There are very limited content we have when we first developed the site, but the colored-theme setup a great infraustracture for the account team to organize the
								  content from the Drupal backend, and categorize the materials. Now after a few years since we first setup the site, the framework is still valid and the site and
								  growed a lot without big structural changes, thanks to the framework we created at the very beginning.
			
				
				
			</p>

		
			
					
			</Col>

			<Col xs={12}>
							  <p >

								  Specifically, we created four cards with Lottie-bassed animations to interact with the users, that with simple micro-interaction when the user hover on them,
								  we are inspired by the metaphor of piano keys and make the four cards stick on the top of the mobile screen
								  when user scrolls down, so users can always get easy access to different programs. You can interact with the elements below to see how it works.


								 



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
							  <LazyLoadComponent effect="blur" placeholderSrc="./assets/img/socalren/monster-alt.png">
								  <video loop autoPlay className="responsive-video" poster="./assets/img/socalren/monster-alt.png" >
									  <source src="./assets/img/socalren/monsters.mp4" type="video/mp4" />

								  </video>
							  </LazyLoadComponent>


						  </Col>
						  <Col xs={12} md={4} className="float-right" >

							  <p >
								  We resumed the work this year with a new project called Kits4Kids, which we hope to use gamified materals to 
								  help educate kids with Energy Saving tips, since there are different programs and Energy Kits we want to provide 
								  to the families, we created a few Energy Monsters to work as the guides for the kids to learn Energy-Saving knowledges.
								  Here is the full version of the website we created, which is the portal for the kids to get access to different games,
								  each game we assigned a Energy Monster that needs help, animated by Lottie, the kids can open the game by click on the 
								  call-to-action button or navigate different monsters and games from top or side. The introduction of the Monsters and games
								  are as follows:



							  </p>




						  </Col>
						</Row>

					  <Row className="vcenter" >
						  <Col xs={12}>
							  <h3 className="monster-name">Fuzzy Muzzy</h3>
						  </Col>
						
						  <Col xs={12} md={7} className="float-right" >

							  <p >
								 Fuzzy Muzzy is the main character of the monsters, who will introduce the kids to all the friends, 
								 the game associated with Fuzzy Muzzy is a Item-Match game for the kids to move the right item to 
								 the correct spot.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html" target="_blank">
							  <LazyLoadImage effect="blur" alt="fuzzy muzzy game" placeholderSrc="./assets/img/socalren/fuzzy-muzzy-game-alt.png" src="./assets/img/socalren/fuzzy-muzzy-game.png" className="img-fluid" />
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
								  Lavender is the second energy monster, and is associated with the card match game, which teaches the kids some common reneable and non-reneable energies
								  in the daily life.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Lavender_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="lavender game" placeholderSrc="./assets/img/socalren/lavender-game-alt.png" src="./assets/img/socalren/lavender-game.png" className="img-fluid" />
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
								  Ginger is on the path of Energy Facts, by rolling a dice, Ginger will move to different spots inside the path and can move forward
								  when the kids answers the Energy Fact question correctly.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Ginger_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="ginger game" placeholderSrc="./assets/img/socalren/ginger-game-alt.png" src="./assets/img/socalren/ginger-game.png" className="img-fluid" />
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
								 Spike is travelling around the city and saw differnt types of transportation means, he can collect scores by taking the eco-friendly transportation means
								 and avoid the ones that costs too much energy.



							  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Spike_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="spike game" placeholderSrc="./assets/img/socalren/spike-game-alt.png" src="./assets/img/socalren/spike-game.png" className="img-fluid" />
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
								  Specster is learning energy related teams and try to complete the Energy Crossword, there are some hints provided to find out what
								  energy related terms can be used to fill the crossword.		  </p>
							  <a href="https://energymonsters.fun/full-games/index.html#Specster_page" target="_blank">
							  <LazyLoadImage effect="blur" alt="specster game" placeholderSrc="./assets/img/socalren/specster-game-alt.png" src="./assets/img/socalren/specster-game.png" className="img-fluid" />
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
						 The EnergyMonsters.fun is an enhancement towards the SoCalREN project, it goes beyond an information hub, but a game center specifically serves the kids and teachers to 
						 equip the kids with the energy related knowledge. It is also a project that I got the chance to work with the e-learning game developers and motion graphics, and made full
						 use of Lottie animation library to bring the monsters to live, which is very special compare to other websites.	  </p>

						  

				  </Container>

			  </section>






	







    </section>
		
	
      
      )
    }
  }
  
  export default Socalren;