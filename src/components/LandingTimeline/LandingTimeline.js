import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import './LandingTimeline.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


library.add(faLinkedin); 
class LandingTimeline extends Component {
    
  
    render() {
      return (
        


<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2019 - present"
    iconStyle={{ background: '#000000', color: '#fff' }}
    icon={<img src="./assets/img/homepage/icf-next-logo.jpg" className="timeline-logo icf-next-logo"/>}
  >


    <h3 className="vertical-timeline-element-title">Senior Interaction Designer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.icf.com/next" target="_blank">ICF Next</a></h4>

    <p className="timeline-job-description">
      User Experience Engineer, React.js, Angular.js, React Native, Micro-interaction, Interaction Design, Agile Project Management
    </p>
    <p className="timeline-title">Clients include:</p>
    <div className="clients-container">
				<a href="https://www.nih.gov/" target="_blank">
        <div className="clients border">
        <img src="./assets/img/homepage/nih-logo.png" className="client-logo"/>
        </div></a>
			
				<a href="https://www.ncbi.nlm.nih.gov/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/ncbi-logo.png" className="client-logo"/>
        </div></a>
			
        <a href="https://www.pepfar.gov/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/pepfar-logo.png" className="client-logo"/>
        </div></a>

        <a href="https://www.hiv.gov/" target="_blank">
        <div className="clients border">
        <img src="./assets/img/homepage/hiv-logo.png" className="client-logo"/>
        </div></a>
    </div>
    
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2016 - 2018"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/icf_logo.png" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Interaction Designer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.icf.com/" target="_blank">ICF</a></h4>
    <p className="timeline-job-description">
     Web Design, Interaction Design, User Experience Design, Email Design and Development, Digital Campaign
    </p>
    <p className="timeline-title">Clients include:</p>
    <div className="clients-container">
				<a href="https://www.transportation.gov/" target="_blank">
        <div className="clients border">
        <img src="./assets/img/homepage/usdot-logo.png" className="client-logo"/>
        </div></a>
			
				<a href="https://www.hudexchange.info/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/hud.png" className="client-logo"/>
        </div></a>
			
        <a href="https://socalren.org/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/socalren-logo.png" className="client-logo"/>
        </div></a>

        <a href="https://www.exeloncorp.com/" target="_blank">
        <div className="clients border">
        <img src="./assets/img/homepage/exelon-logo.png" className="client-logo"/>
        </div></a>
    </div>
  </VerticalTimelineElement>
  

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/amazon-logo.png" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">UX Design Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Amazon</h4>
    <p className="timeline-job-description">
      User Experience, Visual Design
    </p>
    <blockquote>
    <p className="timeline-blockquote">Kaipeng is a thoughtful UX designer who is as comfortable in the deep-end thinking 
    through platform patterns as he is on the practical front-end implementation and 
    prototyping side of things. His ideas are often refreshing, out of the box concepts that 
    have a laser focus on customer benefit.</p>
    <span>—Ryan LaBoube, Senior UX Lead, Global Navigation at Amazon.com</span>
    </blockquote>
   
  </VerticalTimelineElement>




  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2014 - 2016"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/um-logo.png" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Master of Information</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Michigan, Ann Arbor</h4>
    <p>
     Human Computer Interaction Specialization, Merit Scholarship
    </p>
    <p className="timeline-title">Clients include:</p>
    <div className="clients-container">
				<a href="https://www.amway.com" target="_blank">
        <div className="clients border">
        <img src="./assets/img/homepage/amway-logo.png" className="client-logo"/>
        </div></a>
			
				<a href="http://www.army.rotc.umich.edu/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/rotc.jpg" className="client-logo"/>
        </div></a>
			
        <a href="http://www.civiclab.us/" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/civiclab.png" className="client-logo"/>
        </div></a>

        <a href="https://www.bopglobalnetwork.org" target="_blank">
        <div className="clients">
        <img src="./assets/img/homepage/bop.png" className="client-logo"/>
        </div></a>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2014"
    iconStyle={{ background: '#006ABE', color: '#fff' }}
    icon={<img src="./assets/img/homepage/pmi-logo.jpg" className="timeline-logo icf-next-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Project Management Professional (PMP)</h3>
    <h4 className="vertical-timeline-element-subtitle">Credential ID 1711440</h4>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2010 - 2014"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/whu-logo.png" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Information Management</h3>
    <h4 className="vertical-timeline-element-subtitle">Wuhan University</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    iconStyle={{ background: '#e7eff6', color: '#fff' }}
    icon={<img src="./assets/img/homepage/fly.gif" className="timeline-logo icf-next-logo"/>}
  />
</VerticalTimeline>


      )
    }
  }
  
  export default LandingTimeline;