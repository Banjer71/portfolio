import React from 'react'
import Card from '../cards/Card'

function sideProjetcs() {
    return (
        <>
            <div className='side-projects'>
                <h2 className='sideProject-h2'>Side projects</h2>
                <div className="projects">

                    <Card className='image-bg react-notes'
                        link="https://banjer71.github.io/my-react-notes/"
                        name='React Notes'
                        text='Tests, practices, challenges using React'
                        text2='project under construction'
                    />
                    <Card className='image-bg js-notes'
                        link="https://banjer71.github.io/My-JavaScript-Notes/"
                        name='JavaScript Notes'
                        text='Tests, practices, challenges using only vanilla JavaScript'
                        text2='project under construction'
                    />

                </div>
            </div>
        </>

    );
}





export default sideProjetcs