import React, { Component, style } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import $ from 'jquery'
import '../css/style.css';
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


				  <Row className="hero-section d-flex position-relative align-items-center">
				<Container>
					<Row>
						<div className="col-12 col-md-6 hero-content">

								<img src="./assets/img/ncbi-virus/ncbi-virus-logo.webp" className="project-logo" alt="NCBI Virus logo"/>
							<h1>NCBI Virus interactive dashboards</h1>
							<p className="mb-0 mt-4">
								<strong>My Role</strong>: Web Developer, Interaction Designer</p>
							<p className="mb-0"><strong>Duration</strong>: 5 Years</p>
							<p><strong>Deliverables</strong>: <a href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">NCBI Virus Variant Platform</a></p>


							
							
						</div>
					</Row>
				</Container>

				<div className="col-12 hero-image">
					<div className="hero-image-container">
						<LazyLoadImage 
							effect="blur" 
							placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-header-alt.webp" 
							src="./assets/img/ncbi-virus/ncbi-virus-header.webp" 
							className="hero-image-cover"
						/>
					</div>
				</div>

		          </Row>

		


				

				<section className="section ncbi-section-special">

					<Container>
						<Row>
							<Col xs={12}>
								<h2>The Data Hub for scientists to track the virus sequences submitted</h2>
								<p>We began collaborating with NCBI in 2018 to create a data hub for virus information submitted by 
									scientists from around the world. This information is typically submitted to NIH, from scientific organizations and hospitals. 
									The NCBI data is highly valuable for researchers because it allows them to access and analyze data from a variety of sources. 
									Our team is working to provide a user-friendly platform for scientists to access and filter the data, as well as tools for 
									visualization and analysis. Our primary users are scientists, particularly virologists, from academic institutions and 
									scientific organizations. Bioinformaticians and immunologists may also use the platform, but we are not targeting the general public. 
									We started the project by interviewing potential users to understand their needs.
								</p>

								<Tabs defaultActiveKey="primary" id="tab-persona" className="mb-3">
									<Tab eventKey="primary" title="Primary User">
										
										<Row>
											<Col xs={4} md={2}>
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/primary-user-alt.webp" src="./assets/img/ncbi-virus/primary-user.webp" className="img-fluid" />
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
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/secondary-user-alt.webp" src="./assets/img/ncbi-virus/secondary-user.webp" className="img-fluid" />
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
												<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/potential-user-alt.webp" src="./assets/img/ncbi-virus/potential-user.webp" className="img-fluid" />
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
							
								<h2>Host‐Virus Relationship Widget</h2>
								
							</Col>
						</Row>
						<Row>
							
					
			
							<Col xs={12} md={6}>
								<p>
									One feature the team is particularly excited about is the creation of a data visualization widget to help researchers 
									discover relationships between viruses and sequences, particularly host-virus relationships. While the data table is 
									useful for displaying details about individual viruses, it can be difficult for users to identify potential relationships 
									and the distribution of viruses and sequences within a domain.
								</p>

								
								<p>After testing several options such as the Tree Graph and Bubble Graph, we ultimately decided to use a  <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">Sunburst graph</a> 
									to display the virus data. This choice has several advantages compared to other approaches.</p>

								<p>One advantage of the Sunburst graph is that it can display multiple layers at the same time, making 
									it easier for users to move between layers. In our widget, we limited the Sunburst to three layers 
									to help users discover relationships and distribution between sequences, and to make it easier for users 
									to find small sequences by navigating through the layers (compared to the Tree and Bubble maps). We also 
									included a breadcrumb at the top of the Sunburst graph, which allows users to jump outside the current three 
									layers when they are deep in the sequences.</p>

								<p>
									Another advantage of the Sunburst graph is that it has a fixed size, regardless of the size or number of sequences 
									in the current layer. This means that the widget can be used on a mobile device and the graph will not go beyond 
									the screen area.
								</p>

								
								<Row>

								<Col xs={12} md={6}>
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-bubble-map-alt.webp" alt="NCBI Bubble Map" src="./assets/img/ncbi-virus/ncbi-bubble-map.webp" className="right-img img-fluid" />

									<p className="label">Bubble Map approach</p>
								</Col>

								<Col xs={12} md={6}>
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-square-map-alt.webp" alt="NCBI Tree Map" src="./assets/img/ncbi-virus/ncbi-square-map.webp" className="right-img img-fluid" />

										<p className="label">Tree Map approach</p>
									</Col>

								</Row>





							</Col>
							<Col xs={12} md={6}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-alt.webp" alt="NCBI Sunburst Approach" src="./assets/img/ncbi-virus/ncbi-virus-sunburst.webp" className="right-img img-fluid" />
								<p className="label">SunBurst approach</p>
							</Col>

						</Row>

						<Row className="subRow">
							<Col xs={12} md={6} className="float-md-left">
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-2-alt.webp" alt="NCBI Virus SunBurst Interaction" src="./assets/img/ncbi-virus/ncbi-virus-sunburst-2.webp" className="right-img img-fluid" />
								<p className="label">NCBI Virus SunBurst Interaction 1</p>
							</Col>
							<Col xs={12} md={6} className="float-md-right">

								<p>We enhanced the dashboard by adding a host distribution widget next to the taxonomy section, which makes it easier to link the host distribution 
									to the taxonomy of viruses. When a user selects a host, the corresponding virus sequences are highlighted in the same color, and the selected host 
									is also highlighted in the taxonomy. This allows users to easily see the host distribution in the current sequences and the sequences in the next 
									two layers, and to easily navigate between layers using the breadcrumb. Additionally, we added tooltips to display the names of smaller virus sequences 
									that might not have enough space in the graph. These tooltips are triggered when the mouse hovers over the sequence.
								</p>

								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-highlight-alt.webp" alt="NCBI virus highlight" src="./assets/img/ncbi-virus/ncbi-virus-highlight.webp" className="right-img img-fluid" />
								<p className="label">NCBI Virus SunBurst Interaction 2</p>




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
									In response to the SARS-CoV-2 pandemic, our team has developed a data visualization platform called the  <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">SARS-CoV-2 Interactive Dashboard</a>. 
									This platform includes various widgets that enable researchers and individuals to analyze trends in submitted SARS-CoV-2 sequence data. 
									The inspiration for this tool came from a similar tool created by the JHU, but our version focuses on submitted sequences rather than COVID cases. 
									The SARS-CoV-2 Interactive Dashboard currently has two widgets: the Geographic Distribution widget (Geo Widget) and the Collection-Release Time widget 
									(Time Widget). These widgets can be used to analyze and understand the distribution and collection and release times of SARS-CoV-2 sequences, respectively.
								</p>
								<p>
									The Geo Widget, Time Widget, and Statistic banner on the SARS-CoV-2 Interactive Dashboard all work together in an interactive manner. When a user selects data 
									points based on their geographic location, the Time Widget and Statistic banner update to display data from the selected location over a given time period, 
									in addition to showing metadata in a popup bubble. Similarly, when a user filters a time period using the handlers in the Time Widget, the Geo Widget updates 
									to show data that matches the selection. To improve usability, we have implemented a consistent color-coding system that reflects the different states of data 
									points across widgets. The default state is shown in teal, excluded points are displayed in light-gray, and selected points are shown in orange. 
									This color-coding system helps users quickly identify selected data points and reduces the learning curve.
								</p>
								
							
							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/iteration-3-alt.webp" src="./assets/img/ncbi-virus/iteration-3.webp" className="img-fluid right-img" />
								</a>
								<p className="label">SARS-CoV-2 Dashboard Visualization</p>
							</Col>
							
							

							{/* <Col xs={12} md={6}>
								<p >

									In addition to being used for SARS-CoV-2, the dashboard can also be utilized to display data for other viruses. For example, 
									when the Monkeypox virus gained popularity in 2022, we were able to quickly create a similar dashboard to showcase the sequence 
									data we had collected. This process only took a few sprints as much of the infrastructure for the dashboard was already in place. 
									We are currently conducting usability testing on the scalable dashboard with the aim of being able to apply this approach to all 
									virus types, in order to efficiently present data through the most effective visualizations.
								</p>
								
							
							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/dashboard-visualization-selected-alt.webp" src="./assets/img/ncbi-virus/dashboard-visualization-selected.webp" className="img-fluid right-img" />
								<p className="label">Monkeypox Data Dashboard</p>
								</a>
								
							</Col> */}
						</Row>

					


					



					</Container>
				</section>
			






				<section className="section ncbi-section1" >
					<Container>
						<Row >
							<Col>
							
								<h2>SARS-CoV-2 Lineage-Mutation Viewer</h2>
								
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={6} className="float-right" >
								<h4>Standalone Lineage Viewer</h4>
								<p >
									As the SARS-CoV-2 pandemic has continued, attention has shifted from just collecting viral sequences to examining the various 
									variants and lineages of the submitted sequences. By visualizing the different lineages, it becomes easier to identify the ones 
									that are spreading rapidly and gaining popularity, which can help scientists understand the latest trends in SARS-CoV-2 variants 
									and target emerging threats.
								</p>

								<p>
									In the interface we created, each lineage is represented as a card that is placed in the sidebar field. The user can either search 
									for or browse through the different lineage cards to view basic statistics and the defining mutations, as well as their categories. 
									On the main panel, the user can see statistics and a line/area chart showing the trend of lineages over the past 6 months, as well as 
									the geographical distribution of the lineages.
								</p>

								<p>
									We also included various interactive features within the chart to help the user easily locate and learn more about the lineages they are interested in. 
									For example, the user can hover over an area of the chart to see the name of the lineage, click on the area to view a standalone trend chart of the lineage 
									over the past few months, and click on the name of the lineage to select it. This will cause both the area chart and the geographic distribution chart to 
									respond accordingly.
									The most recent dashboard can be found at: <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/activ/" target="_blank">ncbi.nlm.nih.gov/activ/</a>
								</p>

								<Col xs={12}>
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/area-chart-alt.webp" alt="NCBI Bubble Map" src="./assets/img/ncbi-virus/area-chart.webp" className="right-img img-fluid" />

									<p className="label">Area Chart Interactions</p>
								</Col>


							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/activ/" target="_blank">
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/standalone-lineage-alt.webp" alt="NCBI Virus DataTable" src="./assets/img/ncbi-virus/standalone-lineage.webp" className="img-fluid" />
									<p className="label">Standalone Lineage Dashboard</p>
								</a>
								
							</Col>

					
			
							{/* <Col xs={12} md={6}>
								<h4>Standalone Mutation Viewer</h4>

								
								<p>
									In an effort to further our understanding of the cause of variants, we developed a dashboard for mutations in addition 
									to the one we had previously created for lineages. This interface was designed using a block-based layout that included a 
									lineage map and visualizations based on the location of mutations. The lineage map, which is always present in the first column, 
									displays the lineage structure and all mutations occurring based on their locations. The remaining columns contain visualization 
									widgets for the mutations, which are also aligned with the location of the mutations to assist with navigation. At the top of the main panel, 
									we implemented a block-based navigation system that allows the user to turn visualization types on and off, rearrange the order of the visualizations, 
									and create a layout that best meets their needs. Our initial idea for the visualization widgets includes displaying the percentage of release, 
									therapies that are effective against the mutations, and trends over the past few months. The sidebar includes filters that can be applied to 
									all mutations to help the user narrow down their search to specific mutations or geographic regions and time periods.
								</p>

								
							





							</Col> */}
							{/* <Col xs={12} md={6}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/mutation-viewer-alt.webp" alt="NCBI Mutation Viewer" src="./assets/img/ncbi-virus/mutation-viewer.webp" className="img-fluid" />
								<p className="label">Standalone Mutation Viewer</p>
							</Col> */}

						</Row>

						{/* <Row className="subRow">
							<Col xs={12} md={6}>
								<h4>Combination Lineage-Mutation Viewer</h4>

								
								<p>
								As a result of some changes in the project structure and to facilitate better integration, 
								we have started moving towards combining the lineage viewer and mutation viewer in a single, 
								integrated dashboard. This will enable the user to switch more easily between lineage and mutation 
								information and eliminate the duplication of filters used in both sections. In the latest layout, 
								the user can switch between searching for lineages and searching for mutations in a general search 
								area at the top of the page, and the content will adjust accordingly, with visualization widgets and 
								lineage cards displayed when the user searches for lineages and mutation visualizations and tables shown 
								when searching for mutations. While there may not be a significant visual difference, this represents a 
								more streamlined and robust product compared to the previous version.
									
								</p>

								
							





							</Col>
							<Col xs={12} md={6}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/combination-dashboard-alt.webp" alt="NCBI Lineage-Mutation Viewer" src="./assets/img/ncbi-virus/combination-dashboard.webp" className="img-fluid" />
								<p className="label">Combined Lineage-Mutation Viewer</p>
							</Col>

						</Row> */}






						<Row>
							<Col xs={12}>
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/chart-interactions-alt.webp" alt="interactions between the different views of visualizations based on the selection" src="./assets/img/ncbi-virus/chart-interactions.webp" className="img-fluid" />
								<p className="label">Figure: interactions between the different views of visualizations based on the selection</p>
							</Col>
						</Row>


						</Container>
						</section>

						<section className="section ncbi-section-special">
							<Container>
						<Row className="subRow">
							<Col xs={12}>
								<h2>Build an integrated web application</h2>

								
								<p>
								As the pandemic draws to a close, we have embarked on integrating the SARS-CoV-2-centric application with our primary application, 
								extending its utility to other viruses that pique researchers' interest. This comprehensive endeavor commenced with a thorough revamp 
								of the lineage and mutation viewer, ensuring its alignment with the primary application and enhancing its responsiveness across various devices.
								</p>

								<p>
								What we come up with is a unified interface with a navigation that drives the user to 4 different views for the SARS-CoV-2 data: Tabular, Visualization, Lineage, and Mutation.
								In tabular view, the user can read the detailed submitted data provided in tabular format. In visualization view, we present the submitted data through the geographic and time-based widgets we previously created,
								and we embedded the lineage and mutation viewer in the same navigation bar and make the whole interface integrated as a whole. We also made adjustments to the page layout, styles, and components to make sure the transition is as smooth as possible when switching between views.
								</p>

								<p>Furthermore, this interface provides opportunities to extend functionality to other viruses, which helps users easily read data and generate quick visualizations for any viruses they are interested in.
									Right now, when users search for a different virus, the system generates navigation including tabular and visualization views for that specific virus. For certain viruses such as Monkeypox or Influenza, the interface also modifies to represent specific functions based on user needs, including the genus group, assembly, and more.
									To summarize, this system is robust and flexible, and it can be easily adjusted to support user needs and handle outbreak or emerging situations.
								</p>
								



							


							



							</Col>
							<Col xs={6} md={3}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-1-tabular-alt.webp" alt="Tabular view showing integrated lineage and mutation data" src="./assets/img/ncbi-virus/ncbi-1-tabular.webp" className="img-fluid" />
								<p className="label">Tabular view of integrated data</p>
							</Col>
							<Col xs={6} md={3}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-2-visualization-alt.webp" alt="Visualization view showing data trends" src="./assets/img/ncbi-virus/ncbi-2-visualization.webp" className="img-fluid" />
								<p className="label">Visualization of data trends</p>
							</Col>
							<Col xs={6} md={3}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-3-lineage-alt.webp" alt="Lineage view showing variant relationships" src="./assets/img/ncbi-virus/ncbi-3-lineage.webp" className="img-fluid" />
								<p className="label">Lineage relationship view</p>
							</Col>
							<Col xs={6} md={3}>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-4-mutation-alt.webp" alt="Mutation view showing variant changes" src="./assets/img/ncbi-virus/ncbi-4-mutation.webp" className="img-fluid" />
								<p className="label">Mutation analysis view</p>
							</Col>

						</Row>
						</Container>
						</section>


					<section className="section ncbi-section1" >
						<Container>
								<h2 >Work Recognition</h2>

								<Row>
									<Col xs={12} md={9}>

									<p>The Interactive Dashboard has been highlighted through NCBI's blog, Twitter, and other social media platforms since its release, particularly during the pandemic. In 2020, NCBI published a <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2020/12/03/sars-cov-2-dashboard/" target="_blank" className="ncbi-header-link">blog post</a> about the initial release of the dashboard, 
									which came at the peak of the pandemic and provided scientists with a crucial tool to access SARS-CoV-2-related data. In 2022, NCBI published another <a href="https://ncbiinsights.ncbi.nlm.nih.gov/2022/04/20/sars-cov-2-variants-overview/" target="_blank" className="ncbi-header-link">blog post</a> introducing the Variant Viewer and Mutation Viewer,
									which was timely as COVID-19 variants became the focus of the research community. Throughout the pandemic, the development of this tool closely followed the evolving needs of researchers, providing essential resources for monitoring and controlling the spread of the virus.</p>

									<p>I was fortunate to be part of the team that developed the Interactive Dashboard, which received recognition from NCBI. I was awarded a Certificate of Appreciation from NLM acknowledging my "Outstanding Collaboration, Dedication, and Commitment to the NLM Mission." 
										We are grateful that our collaborative effort helped support virus research during the pandemic and contributed to NLM's mission of enabling biomedical discovery and promoting public health.</p>
									</Col>
									<Col xs={12} md={3}>
									<LazyLoadImage effect="blur" alt="NLM Certification" src="./assets/img/ncbi-virus/NLM-certification.webp" className="img-fluid" />
									<p className="label">NLM Certificate of Appreciation</p>
									</Col>
								</Row>

							




						

					</Container>

				</section>

			















			</section>



		)
	}
}

export default NCBIVirus