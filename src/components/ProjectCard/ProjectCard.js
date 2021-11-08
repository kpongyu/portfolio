/* eslint-disable */
import React, { Component } from 'react';
import './ProjectCard.css';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';



const ProjectCard = (props) => (
  <NavLink to={props.navigation}>
  <s-atv-card>
  <article className="card" >
    <span className="card__link">
      <span className="highlight"></span>
          <LazyLoadImage effect="blur" placeholderSrc={props.placeholder} src={props.imageSource} className="img-fluid frame project-card" />
    </span>
    <p className="card__title">{props.title}</p>
  </article>
  </s-atv-card>
  </NavLink>
);

export default ProjectCard

 

 

  

    
  
