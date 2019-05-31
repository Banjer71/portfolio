import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import MenuBar from './components/menubar/MenuBar'
import Footer from './components/footer/Footer'


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MenuBar />
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
