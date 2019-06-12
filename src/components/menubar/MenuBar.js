import React from 'react'
import { Link } from 'react-router-dom'



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