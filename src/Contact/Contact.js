
import React, { Component } from 'react';
import $ from 'jquery';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import "./Contact.css";




class Contact extends Component {

  handleLoad() {
    $('.preloader').addClass('active');

    setTimeout(function() {
      $('.preloader').hide();
    }, 2500);
  }

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  
  }

 

  

  componentDidMount(){
    window.addEventListener('load', this.handleLoad);
  
  }

  
    render() {
      return (
      <div className="contact-bg">
       <Container >
      <h1 className="contact-title">Contact Me</h1>

      <Form method="POST" action={"mailto:kaipeng@umich.edu?subject="+this.state.name+"&body="+this.state.message} className="contact-form">

      <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" name="name" placeholder="Joe Doe" onChange={this.handleChange} />
  </Form.Group>

 
  
 
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" name="message" rows="3" onChange={this.handleChange} placeholder="My Message"/>
  </Form.Group>
  
  <Form.Group className="submitButton">
  <Button variant="primary" type="submit" className="myButton">
    Submit
  </Button>
  </Form.Group>
  
</Form>

    
    </Container>
    </div>
      )
    }
  }
  
  export default Contact;