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
  
  }

  componentDidMount(){
    window.addEventListener('load', this.handleLoad);
  
  }



  render() {

   

    return (
     
      <div className="App">
       <LandingHead/>
       <LandingTimeline/>
      </div>
      
    );
  }
}



export default App;
