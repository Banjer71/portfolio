import React from 'react';
import { HashRouter as Router, Route} from 'react-router-dom'
import MenuBar from './components/menubar/MenuBar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import SideProjects from './components/sideProjects/SideProjects'
import ScrollToTop from './components/ScrollToTop'

import './App.css';


function App(props) {
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <MenuBar isMenuOpen={props.isMenuOpen} />
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/sideprojects' component={SideProjects} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
