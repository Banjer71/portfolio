import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../home/Home'
import Portfolio from '../portfolio/Portfolio'
import SideProjects from '../sideProjects/SideProjects'


function menuBar() {
    return (
       
            <div className='menubar'>
           
                <ul className="menu">
                    <li><Link to='../'>Home</Link></li>
                    <li><Link to='../portfolio'> Portfolio</Link></li>
                    <li><Link to='../sideprojects'>Side-Projects</Link></li>
                </ul>
            </div>
            
      
    )
}



export default menuBar