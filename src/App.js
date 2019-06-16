import React from 'react';
import { HashRouter as Router, Route, withRouter  } from 'react-router-dom'
import MenuBar from './components/menubar/MenuBar'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Portfolio from './components/portfolio/Portfolio'
import SideProjects from './components/sideProjects/SideProjects'
import ScrollToTop from './components/ScrollToTop'

import './App.css';



class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isMenuOpen: false
//     };
//     this.handleToggleMenu = this.handleToggleMenu.bind(this);
//   }

//   handleToggleMenu() {
//     this.setState(state => ({
//         isMenuOpen: !state.isMenuOpen}));
// }

// componentDidMount() {
//   this.unlisten = this.props.history.listen(() => {
//       this.setState({
//           isMenuOpen: false
//       });
//   });
// }

  render() {
    return (
      <Router>

        <ScrollToTop>
          <div className="App">
            <MenuBar />
            
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/sideprojects' component={SideProjects} />

            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }

}

export default withRouter(App);
