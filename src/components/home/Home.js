import React from 'react'
import Header from '../header/Header'


function home() {
    return (
        <>
            <div className='home-background'>
                <Header />
            </div>
            <div className='content'>
            <div className='home'>
                <div className='davide-home'>
                    <div className="david">
                        <h1>Who I am</h1>
                    </div>
                    <h3>Passionate and motivated front-end developer with one year of experience as a freelance.</h3>
                    <p>I love creating websites and web-applications. I have been self-taught for about a year and recently I decided to attend a coding bootcamp focus on JavaScript and ReactJs.</p>
                    <p>At the moment I am working as freelance rebuilding some of the works I made last years. I would like to put in practice what I learnt during the bootcamp.</p>
                    <ul className="media-home">
                        <li><a href="https://twitter.com/Banjerkid" target="_alt"><i className="fab fa-twitter-square"></i></a></li>
                        <li><a href="https://github.com/Banjer71" target="_alt"><i className="fab fa-github-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/davide-naccarati-877b9821/" target="_alt"><i className="fab fa-linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="card">
                    <h3 className='card-tech'>Technlogies</h3>
                    <ul className='tech'>
                        <li><i className="fab fa-html5"></i></li>
                        <li><i className="fab fa-css3-alt"></i></li>
                        <li><i className="fab fa-js-square"></i></li>
                        <li><i className="fab fa-react"></i></li>
                        <li><i className="fab fa-node-js"></i></li>
                        <li><i className="fas fa-database"></i></li>
                    </ul>
                </div>

            </div>
            </div>
        </>
    )
}



export default home