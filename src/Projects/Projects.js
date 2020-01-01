/* eslint-disable */
import React, { Component } from 'react';
import $ from 'jquery';
import {Container, Row, Col} from 'react-bootstrap';
import './Projects.css';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import AOS from 'aos';
import Preloader from '../appshell/Preloader/Preloader';


import 'aos/dist/aos.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Projects extends Component {

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

      const myProjects = {
        'ncbi-virus': {
          navigation: "/ncbiVirus",
          imageSource: "./assets/img/project/ncbi-virus.jpg",
          title: "NCBI Virus Varient Visualization"
        },
        'datim': {
          navigation: "/datim",
          imageSource: "./assets/img/project/datim.jpg",
          title: "PEPFAR DATIM MSP Platform"
        },
        'smokefree': {
          navigation: "/smokefree",
          imageSource: "./assets/img/project/smokefree-cover.jpg",
          title: "Smokefree Web System"
        },
        'socalren': {
          navigation: "/socalren",
          imageSource: "./assets/img/project/socalren-cover.jpg",
          title: "Socalren.org Web Design"
        },
        'amazon': {
          navigation: "/amazon",
          imageSource: "./assets/img/project/a.jpg",
          title: "Amazon Mobile Card System"
        },
        'georgia-power': {
          navigation: "/gp",
          imageSource: "./assets/img/project/georgia-power-cover.jpg",
          title: "Georgia Power Lighting App"
        },
        'wydot': {
          navigation: "/wydot",
          imageSource: "./assets/img/project/wydot-cover.jpg",
          title: "WYDOT Connected Vehicle Pilot Project"
        },
        'mymic': {
          navigation: "/mymic",
          imageSource: "./assets/img/project/b.jpg",
          title: "Mymic Physical Therapy Device"
        },
        'seed': {
          navigation: "/seed",
          imageSource: "./assets/img/project/d.jpg",
          title: "Seed Gamification Mobile APP"
        },
        'rotc': {
          navigation: "/rotc",
          imageSource: "./assets/img/project/f.jpg",
          title: "Michigan ROTC Web Dev."
        },
        'civiclab': {
          navigation: "/civiclab",
          imageSource: "./assets/img/project/g.jpg",
          title: "CivicLab Geo-data visualization"
        },
        
      }
    
      const projectList = Object.keys(myProjects).map((myProject)=>(
        <Col className="element" xs={12} md={6} lg={4}>
              <ProjectCard 
            navigation={myProjects[myProject].navigation} 
            imageSource={myProjects[myProject].imageSource}
            title={myProjects[myProject].title}
           
          />
          
          </Col>
      ));

      
      setTimeout(() => {
        this.setState({ spinner: false });
      }, 1000);



      return (
        <div className="project-bg">
           {this.state.spinner ? <Preloader/> : true}
		<Container>
        <h3 className="project-h3 page-title">
       Selected Projects
          </h3>
          
          
      <Row>{projectList}</Row>
      
           
              </Container>
              
        </div>

        
      )
    }
  }

  AOS.init({
    duration : 1000,
    delay: 1000,
    offset: 0,
    once: true,
    anchorPlacement: 'top-top'
  });
  
  export default Projects;