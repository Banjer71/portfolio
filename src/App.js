import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Helmet from "helmet";
import MenuBar from "./components/menubar/MenuBar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import SideProjects from "./components/sideProjects/SideProjects";
import Htmlcss from "./components/htmlcss/Htmlcss";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

function App(props) {
  return (
    <Router>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Davide Naccarati</title>
        <meta
          name="description"
          content="Davide Naccarati website"
          data-react-helmet="true"
        />
        <link rel="canonical" href="https://davidenaccarati.com" />
      </Helmet>
      <ScrollToTop>
        <div className="App">
          <MenuBar isMenuOpen={props.isMenuOpen} />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/sideprojects" component={SideProjects} />
          <Route path="/htmlcss" component={Htmlcss} />
          <Footer />
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
