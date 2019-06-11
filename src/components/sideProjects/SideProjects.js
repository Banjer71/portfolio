import React from 'react'
import Card from '../cards/Card'

function sideProjetcs() {
    return (
        <>
        <h2 className='sideProject-h2'>Side projects</h2>
        <div className="projects">
        
            <Card className='image-bg react-notes'
                link="https://banjer71.github.io/my-react-notes/"
                name='React Notes'
                text='This is the second projects I built in March 2018. I was still working full time as IT Technician and I made it in a week after work.'
                text2='It was fun to play with the CSS clip-path rules and Flexbox. It is a very simple website and not being a designer I tried to grab some ideas from the blue note cover albums.'
            />
            <Card className='image-bg js-notes'
                link="https://banjer71.github.io/sergio_vacca/"
                name='JavaScript Notes'
                text='This is the second projects I built in March 2018. I was still working full time as IT Technician and I made it in a week after work.'
                text2='It was fun to play with the CSS clip-path rules and Flexbox. It is a very simple website and not being a designer I tried to grab some ideas from the blue note cover albums.'
            />
                    
                </div>
            
        </>

    );
}





export default sideProjetcs