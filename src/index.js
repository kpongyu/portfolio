import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Preloader from './appshell/Preloader/Preloader'
import Header from './appshell/Header/Header'
import Projects from './Projects/Projects'
import Footer from './appshell/Footer/Footer'
import Contact from './Contact/Contact'
import Amazon from './Projects/Amazon'
import covid from './Projects/Covid'
import Seed from './Projects/Seed'
import Mymic from './Projects/Mymic'
import NYCA from './Projects/NYCA'
import ROTC from './Projects/ROTC'
import Wydot from './Projects/Wydot'
import DTE from './Projects/DTE'
import Fatherhood from './Projects/Fatherhood'
import Repatriation from './Projects/Repatriation'
import BGE from './Projects/BGE'
import Socalren from './Projects/Socalren'
import Smokefree from './Projects/Smokefree'
import NCBIVirus from './Projects/NCBIVirus'
import ClinicalInfo from './Projects/ClinicalInfo'
import Datim from './Projects/Datim'
import GP from './Projects/GP'
import CivicLab from './Projects/CivicLab'
import CB from './Projects/CB'
import COSWD from './Projects/Coswd'
import 'bootstrap/dist/css/bootstrap.css'
import ScrollToTop from './ScrollToTop'

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css'

const routing = (

  <Router>
    {/* <Preloader/> */}

    <div className="content-wrap">

      <Header />
      <ScrollToTop />
      <Switch >
        <Route exact path="/" component={App} />
        <Route path="/index.html" component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/amazon" component={Amazon} />
        <Route path="/mymic" component={Mymic} />
        <Route path="/covid" component={covid} />
        <Route path="/seed" component={Seed} />
        <Route path="/ROTC" component={ROTC} />
        <Route path="/CivicLab" component={CivicLab} />
        <Route path="/NYCA" component={NYCA} />
        <Route path="/Fatherhood" component={Fatherhood} />
        <Route path="/Repatriation" component={Repatriation} />
        <Route path="/DTE" component={DTE} />
        <Route path="/wydot" component={Wydot} />
        <Route path="/socalren" component={Socalren} />
        <Route path="/gp" component={GP} />
        <Route path="/smokefree" component={Smokefree} />
        <Route path="/datim" component={Datim} />
        <Route path="/ncbiVirus" component={NCBIVirus} />
        <Route path="/ClinicalInfo" component={ClinicalInfo} />
        <Route path="/CB" component={CB}/>
         <Route path="/coswd" component={COSWD}/>
         <Route path="/bge" component={BGE}/>
      </Switch>
      <Footer />
    </div>
  </Router>
)



ReactDOM.render(
  routing,
  document.getElementById('root')
)
