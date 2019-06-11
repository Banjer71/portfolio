import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MenuBar from './components/menubar/MenuBar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import SideProjects from './components/sideProjects/SideProjects'


import './App.css';


function App() {
  return (
    <Router>

      <div className="App">
        <MenuBar />
    
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/sideprojects' component={SideProjects} />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
