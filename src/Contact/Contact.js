
import React, { Component } from 'react';
import $ from 'jquery';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../css/style.css';
import Iframe from 'react-iframe';



class Contact extends Component {

  
  


  

  
  
    render() {
      return (
      <div className="contact-bg">
       <Container >
            <Row className="vcenter" >
              <Iframe url="https://kaipengyu.com/form.html"
                width="100%"
                height="690px"
                id="myId"
                className="civiclabFrame contactFrame"
                display="initial"
                position="relative" />
            </Row>

    
    </Container>
    </div>
      )
    }
  }
  
  export default Contact;