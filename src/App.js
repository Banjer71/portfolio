import React from 'react';
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'


import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Main />
     <Footer />
    </div>
  );
}

export default App;
