import React from 'react'
import SocialMedia from '../socialMedia/SocialMedia';


function Navbar() {
    return (
        <>
            <header className="App-header">
                <div className="container">
                    <h1>Davide Naccarati</h1>
                    <p className='sub-title'>Front-end Developer</p>
                    <SocialMedia 
                        twitter='https://twitter.com/Banjerkid'
                        github='https://github.com/Banjer71'
                        linkedin='https://www.linkedin.com/in/davide-naccarati-877b9821/'
                        mail='mailto:davide.naccarati@gmail.com'
                        /> 
                </div>
            </header>
            
        </>
    )
}





export default Navbar
