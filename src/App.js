import React, { Component } from 'react';
import './App.css';
import Preloader from './appshell/Preloader/Preloader';
import Header from './appshell/Header/Header';
import $ from 'jquery';
import LandingHead from './components/LandingHead/LandingHead';
import LandingTimeline from './components/LandingTimeline/LandingTimeline';



class App extends Component {

  

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

    setTimeout(() => {
      this.setState({ spinner: false });
    }, 1000);

    return (
     
      <div className="App">
        {this.state.spinner ? <Preloader/> : true}
       
       <LandingHead/>
       <LandingTimeline/>
      </div>
      
    );
  }
}



export default App;
