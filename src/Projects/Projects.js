/* eslint-disable */
import React, { Component } from 'react'
import $ from 'jquery'
import { Container, Row, Col } from 'react-bootstrap'
import './Projects.css'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import AOS from 'aos'
import Preloader from '../appshell/Preloader/Preloader'


import 'aos/dist/aos.css'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

class Projects extends Component {

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

    const myProjects = {
      'ncbi-virus': {
        navigation: "/ncbiVirus",
        imageSource: "./assets/img/project/ncbi-virus.jpg",
        title: "NCBI SARS-CoV-2 interactive dashboard",
        placeholder: "./assets/img/project/ncbi-virus-alt.jpg"
      },
      'socalren': {
        navigation: "/socalren",
        imageSource: "./assets/img/project/socalren-cover.jpg",
        title: `SoCalREN and Energy Monsters`,
        placeholder: "./assets/img/project/socalren-cover-alt.jpg"
      },
         'NYCA': {
        navigation: "/NYCA",
        imageSource: "./assets/img/project/nyca-cover.jpg",
        title: "New York City Accelerator",
        placeholder: "./assets/img/project/nyca-cover-alt.jpg"
      },
      
      
      'covid': {
        navigation: "/covid",
        imageSource: "./assets/img/project/covid.jpg",
        title: "NIH COVID-19 Clinical Guidelines",
        placeholder: "./assets/img/project/covid-alt.jpg"
      },
     
      'amazon': {
        navigation: "/amazon",
        imageSource: "./assets/img/project/amazon.jpg",
        title: "Amazon Mobile Card System",
        placeholder: "./assets/img/project/amazon-alt.jpg"
      },
      'smokefree': {
        navigation: "/smokefree",
        imageSource: "./assets/img/project/smokefree-cover.jpg",
        title: "Smokefree Web System",
        placeholder: "./assets/img/project/smokefree-cover-alt.jpg"
      },

       'fatherhood': {
        navigation: "/fatherhood",
        imageSource: "./assets/img/project/fatherhood-cover.jpg",
        title: "Fatherhood.gov Web Design",
        placeholder: "./assets/img/project/fatherhood-cover-alt.jpg"
      },
      'DTE': {
        navigation: "/DTE",
        imageSource: "./assets/img/project/dte-cover.jpg",
        title: "DTE OIT Redesign",
        placeholder: "./assets/img/project/dte-cover-alt.jpg"
      },
     
      'clinicalInfo': {
        navigation: "/clinicalInfo",
        imageSource: "./assets/img/project/clinicalInfo.jpg",
        title: "ClinicalInfo Mobile Application",
        placeholder: "./assets/img/project/clinicalInfo-alt.jpg"
      },
      // 'wydot': {
      //   navigation: "/wydot",
      //   imageSource: "./assets/img/project/wydot-cover.jpg",
      //   title: "WYDOT Connected Vehicle Pilot Project",
      //   placeholder: "./assets/img/project/wydot-cover-alt.jpg"
      // },
    
      // 'mymic': {
      //   navigation: "/mymic",
      //   imageSource: "./assets/img/project/mymic.jpg",
      //   title: "Mymic Physical Therapy Device",
      //   placeholder: "./assets/img/project/mymic-alt.jpg"
      // },
      // 'seed': {
      //   navigation: "/seed",
      //   imageSource: "./assets/img/project/seed.jpg",
      //   title: "Seed Gamification Mobile APP"
      // },
      // 'rotc': {
      //   navigation: "/rotc",
      //   imageSource: "./assets/img/project/rotc.jpg",
      //   title: "Michigan ROTC Web Dev.",
      //   placeholder: "./assets/img/project/rotc-alt.jpg"
      // },
      'datim': {
        navigation: "/datim",
        imageSource: "./assets/img/project/datim.jpg",
        title: "PEPFAR DATIM MSP Platform",
        placeholder: "./assets/img/project/datim-alt.jpg"
      },
      'georgia-power': {
        navigation: "/gp",
        imageSource: "./assets/img/project/georgia-power-cover.jpg",
        title: "Georgia Power Lighting App",
        placeholder: "./assets/img/project/georgia-cover-alt.jpg"
      },
     



      'civiclab': {
        navigation: "/civiclab",
        imageSource: "./assets/img/project/civiclab.jpg",
        title: "CivicLab Geo-data visualization",
        placeholder: "./assets/img/project/civiclab-alt.jpg"
      },

    }

    const projectList = Object.keys(myProjects).map((myProject) => (
      <Col className="element" xs={12} md={6} lg={4}>
        <ProjectCard
          navigation={myProjects[myProject].navigation}
          imageSource={myProjects[myProject].imageSource}
          title={myProjects[myProject].title}

        />

      </Col>
    ))


    setTimeout(() => {
      this.setState({ spinner: false })
    }, 1000)



    return (
      <div className="project-bg">
        {this.state.spinner ? <Preloader /> : true}
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
  duration: 1000,
  delay: 1000,
  offset: 0,
  once: true,
  anchorPlacement: 'top-top'
})

export default Projects