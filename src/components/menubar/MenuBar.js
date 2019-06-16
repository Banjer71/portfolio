import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class menuBar extends Component { 
    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    }
   
    toggleMenu = () => {
        this.setState({isMenuOpen: !this.state.isMenuOpen})
    }

    toggleCloseMenu = () => {
        this.setState({isMenuOpen: false})
    }

    
    render() {
        console.warn('state', this.state);
        const {isMenuOpen} = this.state;
        
        return (
            <>
            
            <div className='menubar'>
           
            <div className='hamburger' onClick={this.toggleMenu}><div></div></div>
                
                
              
                {isMenuOpen && <ul className="menu" onClick={this.toggleCloseMenu}>
                    
                    <li><Link to='../'>Home</Link></li>
                    <li><Link to='../portfolio'> Portfolio</Link></li>
                    <li><Link to='../sideprojects'>Side-Projects</Link></li>
                </ul>}
            </div>
        </>
    );
    }
    
}


export default withRouter(menuBar)