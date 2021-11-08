import React, { Component, style } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import $ from 'jquery'
import './NCBIVirus.css'
import './Projects.css'
import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'
import Preloader from '../appshell/Preloader/Preloader'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



class CivicLab extends Component {
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
							<h1>NCBI Virus Variant Data Platform</h1>
							<p >
								<strong>My Role</strong>: Web Developer, Interaction Designer<br />
								<strong>Duration</strong>: 2 Years<br />
								<strong>Deliverable</strong>: <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/" target="_blank">NCBI Virus Variant Platform</a><br />

							</p>

						</div>



					</Container>
				</section>

				<div className="banner-border" />
				<section className="section ncbi-section-special">

					<Container>
						<Row>
							<Col xs={12}>
								<h5>2020 Update</h5>
								<h2>SARS-CoV-2 Interactive Dashboard</h2>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={6}>
								<p >
									Since the SARS-CoV-2 Pandemic breakout, our team has shift our focus on building a data-visualization platform that
									embedded with different widgets that can help the researchers and people who are interested in the sequence data published to
									find interesting patterns and better target the data needed. And so far by the end of year 2020, we have completed the first
								version of <a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">SARS-CoV-2 Interactive Dashboard</a>
								that included two widgets, the Geographic Distribution widget (Geo Widget) and Collection-Release Time widget (Time Widget) (see Figure 2).
								</p>
								<p>
									The Geo Widget and Time Widget, combined with the Statistic banner on the top, are interactive as a whole. When user selected data points through
									Geo location, besides the popup bubble showing the metadata, the Time Widget and the Statistic Data will update to reflect the data from the selected Geo-location.
									Similarly, when user use the handles or selected a time period, the Geographic bubble will expand or shrink based on the data that matches the selection, while Statistic information
									will update at the same time. Designwise, we developed a standard color-code to reflect the different states across different widgets, the default state is always in default tael color,
									the excluded data-points are in light-gray color, and the selected ones are in an orange color, even when it comes to the filter labels that are showing in the statistics bar, which helpes
									the user to quickly notice the selected points in different widget and shorten the learning curve.
								</p>
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/interaction-alt.png" src="./assets/img/ncbi-virus/interaction.png" className="img-fluid right-img" />
								
								<p className="label">Figure 1: Current SARS-CoV-2 Interactive Flow</p>
							</Col>
							<Col xs={12} md={6} className="float-left">
								<a className="ncbi-header-link" href="https://www.ncbi.nlm.nih.gov/labs/virus/vssi/#/sars-cov-2" target="_blank">
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/current-alt.jpg" src="./assets/img/ncbi-virus/current.jpg" className="img-fluid right-img" />
								</a>
								<p className="label">Figure 2: Current SARS-CoV-2 Interactive Dashboard</p>
							</Col>
						</Row>




						<Row>
							<Col xs={12} className="sub-section">

								<h3>A MVP Design Process to define one widget at a time</h3>
								<p>Since the pandemic situation is ever-changing, and there is an urgent need to present the data in front of
								the researchers and public as early as possible, the design process of the SARS-CoV-2 platform is unique,
								as we already got the information from researchers that the geographic widget is the most valuable at the
								time, we used a MVP (Minimum Viable Product) process to build the platform, one widget at a time, and define
								the interactions with the previous widget when new widgets are included.
								</p>
								<p>To cope with the requirement, we designed the platform in a highly flexible approach, with each widget occupy
								a whole row, with a sticky statistics banner to summarize the information, filters selected, and a jump menu.
								With this framework, it provides us the opportunity to re-arrange the sequence of widgets in the future, and focus on one widget at a time.
								</p>
								<p>Below are the mockups of the Dashboard design in different MVP rounds, it's obvious that the initial stage of the Dashboard is super straightforward,
								with only the Geo Widget that is most needed, while in round 2, we added the Time Widgets, and included the statistics bar components after usability testing and define different use cases.
								In round 3 (future round), we also included some other widgets we want to bring inside the platform in the future, the interactions between different widgets are increasingly complicated and
								the development also will take much more time, but through this approach we get the first functional version released in time and baught us additional time to make the tool more comprehensive.

								</p>

								<div className="image-row">
									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/round-1-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/round-1.jpg" className="img-fluid" />
									
										<p className="label">Figure 3: SARS-CoV-2 Interactive Dashboard Round 1</p>
									</div>
									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/round-2-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/round-2.jpg" className="img-fluid" />
										<p className="label">Figure 4: SARS-CoV-2 Interactive Dashboard Round 2</p>
									</div>
									<div className="one-third-img">
										<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/round-3-alt.jpg" alt="past version" src="./assets/img/ncbi-virus/round-3.jpg" className="img-fluid" />
										<p className="label">Figure 5: SARS-CoV-2 Interactive Dashboard Round 3</p>
									</div>
								</div>

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
				<div className="banner-border" />

				<section className="section ncbi-section1" >
					<Container>
						<Row >
							<Col>
								<h5>Previous Work</h5>
								<h2>The Design of the Platform and Background Information</h2>
								<p >
									Below are the work we did in the previous years in related to the platform, which cannot reflect the most up-to-date information
									but the design process and different approaches we conducted during the time is interesting, it can also provide some background information on the platform and how the goals envolved during the time.
								</p>
							</Col>
						</Row>
						<Row>
							<Col xs={12} md={6} className="float-right" >
								<h3 >Angular Driven platform to search virus through sequence or name</h3>
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
									<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/table-alt.jpg" alt="NCBI Virus DataTable" src="./assets/img/ncbi-virus/table.jpg" className="img-fluid" />
								</a>
								<p className="label">Figure 7: NCBI Virus DataTable</p>
							</Col>

						</Row>
					</Container>

				</section>



				<section className="ncbiVirus-bg section" >
					<Container>
						<Row className="vcenter" >
							<Col xs={12} mdPush={4} md={6}>
								<h3>Initial Idea&mdash;Bubble Map</h3>
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
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-bubble-map-alt.jpg" alt="NCBI Bubble Map" src="./assets/img/ncbi-virus/ncbi-bubble-map.jpg" className="right-img img-fluid" />

								<p className="label">Figure 8: NCBI Virus Bubble Map approach</p>
							</Col>
						</Row>
					</Container>

				</section>


				<section className="ncbiVirus-bg section" >
					<Container>
						<Row className="vcenter" >
							<Col xs={12} mdPush={4} md={6}>
								<h3>The Tree Map and the Data Dashboard</h3>
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
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-square-map-alt.jpg" alt="NCBI Tree Map" src="./assets/img/ncbi-virus/ncbi-square-map.jpg" className="right-img img-fluid" />
							
								<p className="label">Figure 9: NCBI Virus Tree Map approach</p>
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
								<h3>Final Approach&mdash;Sunburst graph</h3>
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
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-alt.jpg" alt="NCBI Sunburst Approach" src="./assets/img/ncbi-virus/ncbi-virus-sunburst.jpg" className="right-img img-fluid" />
								<p className="label">Figure 10: NCBI Virus SunBurst approach</p>
							</Col>

						</Row>

						<Row className="subRow">
							<Col xs={12} md={6} className="float-md-left">
								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-sunburst-2-alt.jpg" alt="NCBI Virus SunBurst Interaction" src="./assets/img/ncbi-virus/ncbi-virus-sunburst-2.jpg" className="right-img img-fluid" />
								<p className="label">Figure 11: NCBI Virus SunBurst Interaction 1</p>
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

								<LazyLoadImage effect="blur" placeholderSrc="./assets/img/ncbi-virus/ncbi-virus-highlight-alt.jpg" alt="NCBI virus highlight" src="./assets/img/ncbi-virus/ncbi-virus-highlight.jpg" className="right-img img-fluid" />
								<p className="label">Figure 12: NCBI Virus SunBurst Interaction 2</p>




							</Col>

						</Row>
					</Container>

				</section>















			</section>



		)
	}
}

export default CivicLab