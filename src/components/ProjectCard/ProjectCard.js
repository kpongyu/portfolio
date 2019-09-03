/* eslint-disable */
import React, { Component } from 'react';
import $ from 'jquery';
import {Row, Col} from 'react-bootstrap';
import './ProjectCard.css';
import ComponentName from 'coffeekraken-s-atv-card-component';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";




const ProjectCard = (props) => (
  <NavLink to={props.navigation}>
  <s-atv-card>
  <article className="card" >
    <span className="card__link">
      <span className="highlight"></span>
      <img src={props.imageSource} className="card__image " />
              
    </span>
    <p className="card__title">{props.title}</p>
  </article>
  </s-atv-card>
  </NavLink>
);

export default ProjectCard

 

 

  

    
  
