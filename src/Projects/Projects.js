/* eslint-disable */
import React, { Component } from 'react'
import $ from 'jquery'
import { Container, Row, Col } from 'react-bootstrap'
import '../css/style.css';
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
        imageSource: "./assets/img/project/ncbi-virus.webp",
        title: "NCBI SARS-CoV-2 interactive dashboard",
        placeholder: "./assets/img/project/ncbi-virus-alt.webp"
      },
      'socalren': {
        navigation: "/socalren",
        imageSource: "./assets/img/project/socalren-cover.webp",
        title: `SoCalREN and Energy Monsters`,
        placeholder: "./assets/img/project/socalren-cover-alt.webp"
      },
         'NYCA': {
        navigation: "/NYCA",
        imageSource: "./assets/img/project/nyca-cover.webp",
        title: "New York City Accelerator",
        placeholder: "./assets/img/project/nyca-cover-alt.webp"
      },
      
      
      'coswd': {
        navigation: "/coswd",
        imageSource: "./assets/img/project/coswd-cover.webp",
        title: "COSWD Web Redesign",
        placeholder: "./assets/img/project/coswd-cover-alt.webp"
      },
     
      'amazon': {
        navigation: "/amazon",
        imageSource: "./assets/img/project/amazon.webp",
        title: "Amazon Mobile Card System",
        placeholder: "./assets/img/project/amazon-alt.webp"
      },

       'covid': {
        navigation: "/COVID",
        imageSource: "./assets/img/project/covid.webp",
        title: "COVID-19 Web System",
        placeholder: "./assets/img/project/covid-alt.webp"
      },
      'smokefree': {
        navigation: "/smokefree",
        imageSource: "./assets/img/project/smokefree-cover.webp",
        title: "Smokefree QuitGuide App",
        placeholder: "./assets/img/project/smokefree-cover-alt.webp"
      },

       'fatherhood': {
        navigation: "/fatherhood",
        imageSource: "./assets/img/project/fatherhood-cover.webp",
        title: "Fatherhood.gov Web Design",
        placeholder: "./assets/img/project/fatherhood-cover-alt.webp"
      },
      'DTE': {
        navigation: "/DTE",
        imageSource: "./assets/img/project/dte-cover.webp",
        title: "DTE OIT Redesign",
        placeholder: "./assets/img/project/dte-cover-alt.webp"
      },
     
      // 'clinicalInfo': {
      //   navigation: "/clinicalInfo",
      //   imageSource: "./assets/img/project/clinicalInfo.webp",
      //   title: "ClinicalInfo Mobile Application",
      //   placeholder: "./assets/img/project/clinicalInfo-alt.webp"
      // },
      // 'wydot': {
      //   navigation: "/wydot",
      //   imageSource: "./assets/img/project/wydot-cover.webp",
      //   title: "WYDOT Connected Vehicle Pilot Project",
      //   placeholder: "./assets/img/project/wydot-cover-alt.webp"
      // },
    
      // 'mymic': {
      //   navigation: "/mymic",
      //   imageSource: "./assets/img/project/mymic.webp",
      //   title: "Mymic Physical Therapy Device",
      //   placeholder: "./assets/img/project/mymic-alt.webp"
      // },
      // 'seed': {
      //   navigation: "/seed",
      //   imageSource: "./assets/img/project/seed.webp",
      //   title: "Seed Gamification Mobile APP"
      // },
      // 'rotc': {
      //   navigation: "/rotc",
      //   imageSource: "./assets/img/project/rotc.webp",
      //   title: "Michigan ROTC Web Dev.",
      //   placeholder: "./assets/img/project/rotc-alt.webp"
      // },
      // 'datim': {
      //   navigation: "/datim",
      //   imageSource: "./assets/img/project/datim.webp",
      //   title: "PEPFAR DATIM MSP Platform",
      //   placeholder: "./assets/img/project/datim-alt.webp"
      // },
      //  'CB': {
      //   navigation: "/CB",
      //   imageSource: "./assets/img/project/cb-cover.webp",
      //   title: "Children's Bureau Collaborative Site",
      //   placeholder: "./assets/img/project/cb-cover-alt.webp"
      // },
      'georgia-power': {
        navigation: "/gp",
        imageSource: "./assets/img/project/georgia-power-cover.webp",
        title: "Georgia Power Lighting App",
        placeholder: "./assets/img/project/georgia-cover-alt.webp"
      },
     



      // 'civiclab': {
      //   navigation: "/civiclab",
      //   imageSource: "./assets/img/project/civiclab.webp",
      //   title: "CivicLab Geo-data visualization",
      //   placeholder: "./assets/img/project/civiclab-alt.webp"
      // },

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