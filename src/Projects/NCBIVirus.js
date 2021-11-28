import React, { Component, style } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import $ from 'jquery'
import './Projects.css'
import "./NCBIVirus.css"
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'
import Preloader from '../appshell/Preloader/Preloader'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class NCBIVirus extends Component {
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
				<section className="ncbiVirus-header cd-header">
					<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-header-alt.jpg" src="./assets/img/ncbi-virus/ncbi-virus-header.jpg" className="hero-bg" />
				
					<Container>


						<div className="ncbiVirus-header-content ">
							
							<img src="./assets/img/ncbi-virus/ncbi-virus-logo.png" className="ncbi-project-logo" alt="ncbi virus logo" />
							<h1>NCBI SARS-CoV-2 interactive dashboard</h1>
							<p >
								<strong>My Role</strong>: Web Developer, Interaction Designer<br />
								<strong>Duration</strong>: 3 Years<br />
								<strong>Deliverables</strong>: <br/>
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">NCBI Virus Variant Platform</a><br />
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">SARS-CoV-2 interactive dashboard</a><br />
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/activ" target="_blank">SARS-CoV-2 ACTIV dashboard</a>

							</p>

						</div>



					</Container>
				</section>

				<div className="banner-border" />

				<section className="section ncbi-section-special">

					<Container>
						<Row>
							<Col xs={12}>
								<h2>The Data Hub for scientists to track the virus sequences submitted</h2>
								<p>We started working with NCBI stuff memebers on a data hub for the virus information submitted by scientists from all over the world in 2018.
								to publish scientific articles related to virus, it is required for scientists to submit the information of the virus of their studies to NIH, 
								scientific organizations and hospitals also routinely submit the related information. Since NCBI obtains the data all together, it is very valuable 
								for the researchers to get access to the data from all over the world and conduct additional researches, and we are working with the team to provide 
								a data hub for the scientists to access and filter the data, as well as providing useful visualization tools for the scientists to make analysis.

								</p>
								<p>We started the project from interviewing a list of potential users and understanding who are our targeted users and what their needs are. Just as I stated before, the primary users are the 
									scientists, in particular virologist, that are either acadamic faculty members or postdocs or from scientific organizations, the bioinformatician
									and immunologist can be the secondary users, there might be some curiousity from the public out there but they are not our targeted users.

								</p>

								<Tabs defaultActiveKey="primary" id="tab-persona" className="mb-3">
									<Tab eventKey="primary" title="Primary User">
										
										<Row>
											<Col xs={4} md={2}>
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/primary-user-alt.jpg" src="./assets/img/ncbi-virus/primary-user.jpg" className="img-fluid" />
											</Col>
											<Col xs={8} md={10} className="mt-3">
												<h4 className="mb-2">David Melcher, PhD in Biochemistry</h4>
												<Row>
												<Col xs={12} md={6}>
												<p><strong>Research professor in Molecular Biology and Biochemistry department.</strong></p>
												<p>Leading research projects, teaching, attending scientific meetings, administrative tasks. Does not code, no computational biology experience.</p>
												</Col>
												<Col xs={12} md={6}>
													<p><strong>Goals:</strong></p>
													<ul>
														<li>New virus discovery, sequence analysis</li>
														<li>Protein analysis to discover their functions</li>
														<li>Virus ecology research (virus‐host interaction)</li>
													</ul>
												</Col>
												</Row>
											</Col>
													
										</Row>
									</Tab>
									<Tab eventKey="secondary" title="Secondary User">
										<Row>
											<Col xs={4} md={2}>
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/secondary-user-alt.jpg" src="./assets/img/ncbi-virus/secondary-user.jpg" className="img-fluid" />
											</Col>
											<Col xs={8} md={10} className="mt-3">
												<h4 className="mb-2">Lesley Long, Ph.D. in Immunology and Cellular Biology</h4>
												<Row>
													<Col xs={12} md={6}>
														<p><strong>Staff Scientist at The New Biotech Company</strong></p>
														<p>Leads a small team. Interested in the host response to viral infection. Specialize in a particular tissue‐system or cell type, and in particular kind of virus.
															Experienced in various lab techniques. Not very experienced with computer technology.</p>
													</Col>
													<Col xs={12} md={6}>
														<p><strong>Goals:</strong></p>
														<ul>
															<li>To have up to date information on my virus of interest regarding its genetic and sequence profile.</li>
															<li>To see what’s known about host‐virus protein interactions</li>
															
														</ul>
													</Col>
												</Row>
											</Col>

										</Row>
									</Tab>
									<Tab eventKey="potential" title="Potential User">
										<Row>
											<Col xs={4} md={2}>
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/potential-user-alt.jpg" src="./assets/img/ncbi-virus/potential-user.jpg" className="img-fluid" />
											</Col>
											<Col xs={8} md={10} className="mt-3">
												<h4 className="mb-2">Riley Smith, undergrad in Biology</h4>
												<Row>
													<Col xs={12} md={6}>
														<p><strong>Part‐time employee at university help desk as part of work‐study program.</strong></p>
														<p>Learn more about viruses. Pass university classes. Very comfortable with technology in general.</p>
													</Col>
													<Col xs={12} md={6}>
														<p><strong>Goals:</strong></p>
														<ul>
															<li>Pass exams. Secure of summer internship</li>
															<li>Identify job opportunities</li>
															
														</ul>
													</Col>
												</Row>
											</Col>

										</Row>
									</Tab>
								</Tabs>

								
							</Col>
							</Row>
							</Container>
				</section>





				<section className="section ncbi-section1" >
					<Container>
						<Row >
							<Col>
							
								<h2>The Design of the Sequence Table and Host‐Virus interactions</h2>
								
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={6} className="float-right" >
								
								<p >
									To start with, we created a table-based Angular Driven framework for the users to search the related virus that they might interested in based on
									virus name or sequence. We used the Angular Data-Table to fetch the data from NCBI API and displays
									the virus information through the data table. User can expand the data table to see additional details
									of the virus, and apply additional filters on the search result. 
								</p>

								<p>
									One feature the team really want to realize is to create a data visualization widget in front of the
									researchers for them to DISCOVER the virus and sequence they might be interested in, especially the Host-Virus relationship. 
									The data table is
									good to display virus details, but it's hard for user to DISCOVER potential relationships between different
									virus and sequence, and the DISTRIBUTION of virus and sequence inside the domain. 
								</p>


							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/table-alt.jpg" alt="NCBI Virus DataTable" src="./assets/img/ncbi-virus/table.jpg" className="img-fluid" />
								</a>
								<p className="label">NCBI Virus DataTable</p>
							</Col>

					
			
							<Col xs={12} md={6}>
								<h4>Different Approaches for Host-Virus Widget</h4>
								<p>We finally decided to use  <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">Sunburst graph</a> to display the virus data after testing a few different options like the Tree Graph and Bubble Graph. 
								There are quite a few advantages to
									use the Sunburst map for this challenge compare to other approaches.	</p>

								<ul>
									<li>The Sunburst can display a few different layers at the same time, which makes the user easier to move back and forth between different layers.
										In our widget we limited the Sunburst to display 3 different layers, which helps user to DISCOVER the belonging
										relationship and distribution between different sequences, and make it easier for user to check the sequence that
										are small by navigate through the route (compare to Bubble and Tree maps).
										We also included a breadcrumb on the top of the sunburst graph, which makes it possibile for user to jump outside from the 3 present layers when they dive deep
										into the sequences. 
									</li>
									<li>
										The Sunburst graph also has a fixed size, no matter how small or how large the current sequence is, how many sequences the current sequence contains, the size
										can remain the same and it won't go beyond the area. You can even play with the widget through a mobile device as a result.
									</li>
								</ul>

								<Row>

								<Col xs={12} md={6}>
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-bubble-map-alt.jpg" alt="NCBI Bubble Map" src="./assets/img/ncbi-virus/ncbi-bubble-map.jpg" className="right-img img-fluid" />

									<p className="label">Bubble Map approach</p>
								</Col>

								<Col xs={12} md={6}>
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-square-map-alt.jpg" alt="NCBI Tree Map" src="./assets/img/ncbi-virus/ncbi-square-map.jpg" className="right-img img-fluid" />

										<p className="label">Tree Map approach</p>
									</Col>

								</Row>





							</Col>
							<Col xs={12} md={6}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-alt.jpg" alt="NCBI Sunburst Approach" src="./assets/img/ncbi-virus/ncbi-virus-sunburst.jpg" className="right-img img-fluid" />
								<p className="label">SunBurst approach</p>
							</Col>

						</Row>

						<Row className="subRow">
							<Col xs={12} md={6} className="float-md-left">
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-2-alt.jpg" alt="NCBI Virus SunBurst Interaction" src="./assets/img/ncbi-virus/ncbi-virus-sunburst-2.jpg" className="right-img img-fluid" />
								<p className="label">Figure 11: NCBI Virus SunBurst Interaction 1</p>
							</Col>
							<Col xs={12} md={6} className="float-md-right">

								<p>We also improved the dashboard idea to make it easier to link between the host distribution and the taxonomy of viruses through a host distribution widget next to the taxonomy. When user select
									one host, the virus sequences that contain this host will be highlighted, while the selected host will also be highlighted in
									the same color. In this case, user can easily spot the host distribution in the
									current sequences and the sequences in the next 2 layers. and user can quickly jump back and forth between different layers through the breadcrumb.
									Morever, to help solve the issue that there is no space to display the name of some smaller virus sequence, we added tooltips which will
									display when the mouse hover on the sequence.
								</p>

								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-highlight-alt.jpg" alt="NCBI virus highlight" src="./assets/img/ncbi-virus/ncbi-virus-highlight.jpg" className="right-img img-fluid" />
								<p className="label">Figure 12: NCBI Virus SunBurst Interaction 2</p>




							</Col>

						</Row>
					</Container>

				</section>

















				<section className="section ncbi-section-special">

					<Container>
						<Row>
							<Col xs={12}>
							
								<h2>SARS-CoV-2 Interactive Dashboard</h2>
							</Col>
						</Row>


						<Row>
							<Col xs={12} md={6}>
								<p >
									Since the SARS-CoV-2 Pandemic breakout, our team has shift our focus on building a data-visualization platform with different widgets 
									that can help the researchers and people make fully use of the sequence data submitted and anaylsis the trend of the SARS-CoV-2 sequences. The idea 
									comes from the similar tool created by the JHU, but instead of COVID cases, we are focusing on sequences. The current version of
									 <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">SARS-CoV-2 Interactive Dashboard</a>
								includes two widgets, the Geographic Distribution widget (Geo Widget) and Collection-Release Time widget (Time Widget).
								</p>
								<p>
									The Geo Widget and Time Widget, combined with the Statistic banner on the top, are interactive as a whole. When user selected data points through
									Geo location, besides the popup bubble showing the metadata, the Time Widget and the Statistic Data will update to reflect the data from the selected Geo-location through the time period.
									Similarly, when user use the handlers to filter a time period, the Geographic bubble will react based on the data that matches the selection. Design-wise, we developed a consistent color-code 
									to reflect the different states across different widgets, the default state is always in default tael color, the excluded section or points are in light-gray color, 
									and the selected ones are in an orange color,  this helpes the user to quickly identify the selected points across widgets and shortened the learning curve.
								</p>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/interaction-alt.png" src="./assets/img/ncbi-virus/interaction.png" className="img-fluid right-img" />
								
								<p className="label">Current SARS-CoV-2 Interactive Flow</p>
							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/current-alt.jpg" src="./assets/img/ncbi-virus/current.jpg" className="img-fluid right-img" />
								</a>
								<p className="label">Current SARS-CoV-2 Interactive Dashboard</p>
							</Col>
						</Row>




						<Row>
							<Col xs={12} className="sub-section">

								<h3>A MVP Design Process to define one widget at a time</h3>
								<p>Since the pandemic situation is ever-changing, and there is an urgent need to present the data in front of
								the researchers and public as soon as possible, the design process of the SARS-CoV-2 platform is unique,
								which we used a MVP (Minimum Viable Product) process to build the platform, one widget at a time and add feature or functions in an iterative process.
								</p>
								
								<p>Below are the mockups of the key stages in each MVP process, the initial stage of the Dashboard is super straightforward,
								with only the widgets that is most needed, in the next rounds, we included the statistics and modified the interface layout.
								In future rounds, we are also working on Variant viewer widgets, we defined the interactions between different widgets in each state but kept the consistency of colors and states,
								the framework is robust and also opens the door for us to apply the platform to additional viruses such as HIV.
								

								</p>

								<div className="image-row">
									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/round-1-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/round-1.jpg" className="img-fluid" />
									
										<p className="label">SARS-CoV-2 Interactive Dashboard Key Stage</p>
									</div>
								
									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/round-3-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/round-3.jpg" className="img-fluid" />
										<p className="label">SARS-CoV-2 Interactive Dashboard Key Stage</p>
									</div>

									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/iteration-3-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/iteration-3.jpg" className="img-fluid" />
										<p className="label">SARS-CoV-2 Interactive Dashboard Key Stage</p>
									</div>
								</div>

							</Col>
						</Row>

						<Row>
							<Col xs={12} className="sub-section">
								<h3>What's Next?</h3>
							</Col>
							<Col xs={12} md={6}>
								<p >
									As the SARS-CoV-2 variants, such as Delta variant, become the major cause of most of the cases, it is crucial for the scientists to detect the dangerous
									variants from the early stage, and keep track of different variants, further than the virus, and what mutations that causes the variants. This is the 
									next stage of the app, and we have built a dashboard named ACTIV dashboard to serve the purpose, some background information can be found <a href="https://www.nih.gov/research-training/medical-research-initiatives/activ">here</a>.
									The current stage of the dashboard can be found <a href="https://www.ncbi.nlm.nih.gov/activ" target="_blank">here</a>.

								</p>
								<p>The current dashboard contains a sidebar for the user to filter different types of variants of interest. On the main panel, we currently created a geo-based map to present 
									how the variant distributed in the US or rest of world. On selecting a data-point on the map, it shows the lineage of the variant in that specific location during the recent
									months. We are working to add additional statistic and data visualization widgets into the dashboard, and the first version is suppposed to be released soon.
								</p>
								

							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/activ" target="_blank">

									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/activ-alt.png" alt="ACTIV board" src="./assets/img/ncbi-virus/activ.png" className="img-fluid" />
								</a>
								<p className="label">ACTIV board under construction</p>
							</Col>
						</Row>


						<Row>
							<Col xs={12} className="sub-section">
								<h3>Work Recognition</h3>
							</Col>
							<Col xs={12} md={6}>
								<p >
									Since the Interactive Dashboard published, it has been recognized by NCBI and has been shared through NCBI's Blog, Twitter, and other social media.
									You can also watch the presentation of our team member Eneida on the Dashboard through <a href="https://youtu.be/od5GPI6o-pw" target="_blank" className="ncbi-header-link">Youtube</a>. The content is
									also shared by a few University Libraries and Medical Research Groups to help scientists to get more accessibility to the published SARS-CoV-2 sequences and conduct the researches.

								</p>
								<blockquote className="twitter-tweet">
									<p lang="en" dir="ltr">Test drive our new <a href="https://twitter.com/hashtag/SARS?src=hash&amp;ref_src=twsrc%5Etfw">#SARS</a>-CoV-2 interactive data dashboard to select and download data based criteria you set!<a href="https://t.co/bTS3Gsdl62">https://t.co/bTS3Gsdl62</a>
									</p>&mdash; NCBI Staff (@NCBI) <a href="https://twitter.com/NCBI/status/1334875874693439489?ref_src=twsrc%5Etfw">December 4, 2020</a></blockquote>
								<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://ncbiinsights.ncbi.nlm.nih.gov/2020/12/03/sars-cov-2-dashboard/" target="_blank">
								
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/blog-alt.jpg" alt="NCBI blog" src="./assets/img/ncbi-virus/blog.jpg" className="img-fluid" />
								</a>
								<p className="label">Figure 6: NCBI Blog on our work</p>
							</Col>
						</Row>




					</Container>
				</section>
			





			















			</section>



		)
	}
}

export default NCBIVirus