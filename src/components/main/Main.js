import React from 'react'
import Card from '../cards/Card'
import SocialMedia from '../socialMedia/SocialMedia'

function Main() {
    
    return (
        <main>
            <div className="projects">
                <div className="dv">
                    <div className="david">
                        <h1>Portfolio</h1>
                    </div>
                    <h3><em>Projects, Case Studies </em></h3>
                    <p>Here are some of the projects I built as a freelance mainly for private customers into music and fashion and costume design environment.</p>
                    <SocialMedia 
                        twitter='https://twitter.com/Banjerkid'
                        github='https://github.com/Banjer71'
                        linkedin='https://www.linkedin.com/in/davide-naccarati-877b9821/'
                        />
                </div>

                <Card className='image-bg sv'
                    link="https://banjer71.github.io/sergio_vacca/"
                    name='Sergio Vacca'
                    text='This is the second projects I built in March 2018. I was still working full time as IT Technician and I made it in a week after work.'
                    text2='It was fun to play with the CSS clip-path rules and Flexbox. It is a very simple website and not being a designer I tried to grab some ideas from the blue note cover albums.' />


                <Card className='image-bg fl'
                    link='https://banjer71.github.io/fra5/'
                    name='Francesco Lomagistro'
                    text=' I built at the end of 2017. It is still on github page waiting for the customer contents. It is made only with HTML/CSS. I built it starting from a mobile first approach but I am not sure it is the right way for me.'
                    text2='I played with CSS shape rules, hamburger menu button made only with CSS and I tried to use for the first time CSS variables. It was fun!' />


                <Card className='image-bg ba'
                    link='https://banjer71.github.io/anto/'
                    name='Benito Antonelli'
                    text={['For this projects, I wanted to restyle an old website I made with Wordpress for an', <a href="http://benitoantonelli.it" target="_blank" rel="noopener noreferrer">'appassionate indipendent scholar of Naval Archeology</a>]}
                    text2='I used for the first time Bootstrap since I wanted to learn his basic functionality, such as its his grids system, his carousel and so on. Unfortunatelly this projects is still only on my GitHub page waiting for my customer pictures. Anyway I liked to use Bootstrap even if CSS-grids and Flexbox are changing the way to layout a website.' />

                <Card className='image-bg bjc'
                    link='http://www.berardijazzconnection.com/'
                    name='Berardi Jazz Connection'
                    text='This project was the first time I played with Wordpress template. It gave me the opportunity to learn and understand how the PHP works, and I started putting the hands on it without compromising too much the template.'
                    text2='Anyway 4 or more years have passed and this website will be one of my next restyling projects where I am going to use only HTML/CSS and JavaScript' />


            </div>
        </main>
    )
}

export default Main