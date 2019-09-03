/* eslint-disable */
import React, { Component } from 'react';
import $ from 'jquery';
import {Container, Row, Col} from 'react-bootstrap';
import './Projects.css';
import ComponentName from 'coffeekraken-s-atv-card-component';
import ProjectCard from '../components/ProjectCard/ProjectCard';
import AOS from 'aos';

import Amazon from './Amazon';
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
  
  }

  componentDidMount(){
    window.addEventListener('load', this.handleLoad);
  
  }

    render() {

      const myProjects = {
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
        'amazon': {
          navigation: "/amazon",
          imageSource: "./assets/img/project/a.jpg",
          title: "Amazon Mobile Card System"
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



      return (
        <div className="project-bg">
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