import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './Footer.css'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faDribbbleSquare } from '@fortawesome/free-brands-svg-icons'


library.add(faGithubSquare, faLinkedin, faDribbbleSquare)

class Footer extends Component {


  render() {
    return (
      <Row className="footer">
        <Col xs="12" >
          <p className="footerCopy">Copyright &copy; kaipengyu.com 2022</p>
        </Col>
        <Col xs="12" >
          <p className="footerCopy"><strong>Contact me</strong>: <a className="footer-link" href="mailto:kaipeng@umich.edu" target="_blank"> kaipeng@umich.edu</a></p>
          <div className="social-media">

            <a className="social-media" href="https://www.linkedin.com/in/kaipengyu" target="_blank">

              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a className="social-media" href="https://www.linkedin.com/in/kaipengyu" target="_blank">

              <FontAwesomeIcon icon={faDribbbleSquare} size="2x" />
            </a>
            <a className="social-media" href="https://www.linkedin.com/in/kaipengyu" target="_blank">

              <FontAwesomeIcon icon={faGithubSquare} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Footer