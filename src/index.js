import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Preloader from './appshell/Preloader/Preloader';
import Header from './appshell/Header/Header';
import Projects from './Projects/Projects';
import Footer from './appshell/Footer/Footer';
import Contact from './Contact/Contact';
import Amazon from './Projects/Amazon';
import Seed from './Projects/Seed';
import Mymic from './Projects/Mymic';
import ROTC from './Projects/ROTC';
import Wydot from './Projects/Wydot';
import Socalren from './Projects/Socalren';
import Smokefree from './Projects/Smokefree';
import GP from './Projects/GP';
import CivicLab from './Projects/CivicLab';
import 'bootstrap/dist/css/bootstrap.css';
import Favicon from 'react-favicon';

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';

const routing = (

  <Router onUpdate={() => window.scrollTo(0, 0)}>
  <Preloader/>

    <div className="content-wrap">
    <Favicon url="../public/favicon.ico" />
      <Header/>
      <Switch >
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/amazon" component={Amazon} />
        <Route path="/mymic" component={Mymic} />
        <Route path="/seed" component={Seed} />
        <Route path="/ROTC" component={ROTC} />
        <Route path="/CivicLab" component={CivicLab} />
        <Route path="/wydot" component={Wydot} />
        <Route path="/socalren" component={Socalren} />
        <Route path="/gp" component={GP} />
        <Route path="/smokefree" component={Smokefree} />
      </Switch>
      <Footer/>
    </div>
  </Router>
)



ReactDOM.render(
  routing,
  document.getElementById('root')
);
