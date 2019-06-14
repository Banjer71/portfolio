import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class menuBar extends Component { 
    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    }
   
    toggleMenu() {
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
    render() {
        return (
        
            <div className='menubar'>
                <input type='checkbox' className='toggle' onClick={() => this.toggleMenu()} />
            
                <div className='hamburger'><div></div></div>
              
                {this.state.isMenuOpen && <ul className="menu" >
                    
                    <li><Link to='../'>Home</Link></li>
                    <li><Link to='../portfolio'> Portfolio</Link></li>
                    <li><Link to='../sideprojects'>Side-Projects</Link></li>
                </ul>}
            </div>
        
    );
    }
    
}


export default menuBar