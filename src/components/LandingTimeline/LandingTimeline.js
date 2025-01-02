import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../../css/style.css';
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
    // date="2019 - present"
    iconStyle={{ background: '#000000', color: '#fff' }}
    icon={<img src="./assets/img/homepage/icf-next-logo.webp" className="timeline-logo icf-next-logo"/>}
  >


    <h3 className="vertical-timeline-element-title">Interaction Designer Manager</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.icf.com/next" target="_blank">ICF Next</a></h4>

    <p className="timeline-job-description">
     Lead the Interaction Design team, specializing in delivering innovative UX solutions, UI designs, and front-end interface support for a diverse range of clients across government and industries. 
    </p>

    <div className="awards-container">
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/NIH-Logo.webp" className="award-bullet" alt="NIH Logo"/></div>
        <span><strong><a href="https://drive.google.com/file/d/1N-DDV6iD5Ve7ZQiadiHcA20vA4vmHKsn/view" target="_blank">NIH: Certificate of Appreciation</a> </strong> for outstanding collaboration, dedication, and commitment to NLM Mission</span>
      </div>
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/hermes-logo.webp" className="award-bullet" alt="Hermes Award"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong>Hermes Creative Award:</strong> 
        <ul style={{margin: '0.25rem 0', paddingLeft: '1.25rem'}}>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/hermes/entry/nyc-accelerator-building-energy-snapshot/" target="_blank">NYC Accelerator Building Energy Snapshot</a></li>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/hermes/entry/building-a-better-nyc-with-energy-upgrades/" target="_blank">Building a Better NYC with Energy Update</a></li>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/hermes/entry/bges-the-efficient-home-magazine-8/" target="_blank">BGE's The Efficient Home magazine</a></li>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/hermes/entry/being-smart-runs-in-the-family/" target="_blank">CE Being Smart Runs in the Family</a></li>
        </ul></span>
      </div>
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/marcom-award.webp" className="award-bullet" alt="Marcom Award"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong>Marcom Creative Award:</strong> 
        <ul style={{margin: '0.25rem 0', paddingLeft: '1.25rem'}}>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/marcom/entry/the-efficient-home-magazine-issue-2-6/" target="_blank">The Efficient Home Magazine</a></li>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://enter.amcpros.com/marcom/entry/washington-gas-energy-efficiency-microsite/" target="_blank">Washington Gas Microsite</a></li>
        </ul></span>
      </div>
    </div>

    
  </VerticalTimelineElement>



  <VerticalTimelineElement
    className="vertical-timeline-element--work"
   
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/icf_logo.webp" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Senior Interaction Designer</h3>
    <h4 className="vertical-timeline-element-subtitle"><a href="https://www.icf.com/" target="_blank">ICF</a></h4>
    <p className="timeline-job-description">
     Specialized in designing and developing multi-platform web and mobile applications for U.S government agencies and large utility cooperatives. 
    </p>

        <div className="awards-container">
       <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/pmi-logo.webp" className="award-bullet" alt="PMI Logo"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong><a href="https://drive.google.com/file/d/1EzsdjtgvqKSWxY3hRjcIcHm-F0C_CeKr/view?usp=sharing" target="_blank">Project Management Professional (PMP)</a> </strong></span>
      </div>
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/salesforce-logo.webp" className="award-bullet" alt="Salesforce Logo"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong><a href="https://drive.google.com/file/d/16xmDWJy5ExXgAr4G0WaTVLO2IdURePLv/view?usp=sharing" target="_blank">Salesforce Certified UX Designer</a> </strong></span>
      </div>
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/serviceNow.webp" className="award-bullet" alt="ServiceNow Logo"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong><a href="https://drive.google.com/file/d/181KVP6dZR0tldCxrckLPOW93bUoTBAcl/view?usp=sharing" target="_blank">ServiceNow Certified System Administrator</a> </strong></span>
      </div>
      <div className="award-item align-items-start">
        <div className="clients border d-flex align-items-center justify-content-center">
        <img src="./assets/img/homepage/icf_logo.webp" className="award-bullet" alt="ICF Logo"/></div>
        <span style={{paddingTop: '0.5rem'}}><strong>ICF Recognition:</strong> 
        <ul style={{margin: '0.25rem 0', paddingLeft: '1.25rem'}}>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://drive.google.com/file/d/1zTEryMRGQ-PsGWq423TEBPJLGz72LxQH/view" target="_blank">Synergy Award</a></li>
          <li style={{paddingBottom: '0.25rem'}}><a href="https://drive.google.com/file/d/1NyOgUEqZY9nTi3v6Autg8ufcADBsnNBA/view" target="_blank">Team Work in Action Award</a></li>
        </ul></span>
      </div>
    </div>

  </VerticalTimelineElement>
  

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2015"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/amazon-logo.webp" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">UX Design Intern</h3>
    <h4 className="vertical-timeline-element-subtitle">Amazon</h4>
    <p className="timeline-job-description pb-3">
      Helped design Amazon's Homepage, both for mobile and desktop.Brainstormed, prototyped and architected a scalable system for Amazon's mobile Homepage
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
    icon={<img src="./assets/img/homepage/um-logo.webp" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Master of Information</h3>
    <h4 className="vertical-timeline-element-subtitle">University of Michigan, Ann Arbor</h4>
    <p>
     Human Computer Interaction Specialization, Merit Scholarship
    </p>

  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2010 - 2014"
    iconStyle={{ background: '#eeeeee', color: '#fff' }}
    icon={<img src="./assets/img/homepage/whu-logo.webp" className="timeline-logo"/>}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Information Management</h3>
    <h4 className="vertical-timeline-element-subtitle">Wuhan University</h4>
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