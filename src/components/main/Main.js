import React from 'react';
import Card from '../cards/Card';
import SocialMedia from '../socialMedia/SocialMedia';

function Main(props) {
	return (
		<main>
			<div className="projects">
				<div className="dv">
					<div className="david">
						<h1>Portfolio</h1>
					</div>
					<h3>
						<em>Projects, Case Studies </em>
					</h3>
					<p>
						Here are some of the projects I built as a freelance mainly for private customers into music,
						fashion and costume design environment.
					</p>
					<SocialMedia
						twitter="https://twitter.com/Banjerkid"
						github="https://github.com/Banjer71"
						linkedin="https://www.linkedin.com/in/davide-naccarati-877b9821/"
						mail="mailto:davide.naccarati@gmail.com"
					/>
				</div>

				<Card
					className="image-bg kodflix"
					link="https://kodflix-davide.herokuapp.com/"
					name="Kodflix"
					text="My first project in React, a web-application built at the Kodiri Bootcamp (April-May 2019)."
					text2="It is my open project where I continue to add more features experimenting with React and MongoDB."
					html5={<i className="fab fa-html5" />}
					css3={<i className="fab fa-css3-alt" />}
					react={<i className="fab fa-react" />}
				/>

				<Card
					className="image-bg sv"
					link="https://banjer71.github.io/sergio_vacca/"
					name="Sergio Vacca"
					text="This is a project I built in March 2018 for a professional mandolin player."
					text2="In this project I used CSS clip-path rules and Flexbox. It is a very simple website and for the layout I took some inspiration from the blue note cover albums."
					html5={<i className="fab fa-html5" />}
					css3={<i className="fab fa-css3-alt" />}
				/>

				<Card
					className="image-bg fl"
					link="https://banjer71.github.io/fra5/"
					name="Francesco Lomagistro"
					text=" A website for a jazz drummer. It is made in HTML/CSS. I built it starting from a mobile first approach and it is fully responsive."
					text2="I used CSS shape rules and CSS variables and I made the hamburger menu button in CSS with no JS."
					html5={<i className="fab fa-html5" />}
					css3={<i className="fab fa-css3-alt" />}
				/>

				<Card
					className="image-bg weather-app"
					link="https://weather-app-banjer71.netlify.com/"
					name="Weather app"
					text="Weather web-application in JavaScript, only front end side."
					text2={`This project is one of my first challenges pulling data from an API. I didn't like the icons provided from the API so I found another set on line, unfortunatelly there were not so many available and they don't always match the right weather condition.`}
					html5={<i className="fab fa-html5" />}
					css3={<i className="fab fa-css3-alt" />}
					javascript={<i className="fab fa-js-square" />}
				/>

				{/* <Card
					className="image-bg ba"
					link="https://banjer71.github.io/anto/"
					name="Benito Antonelli"
					text={[
						'For this projects, I wanted to restyle an old website I made with Wordpress for a',
						<a href="http://benitoantonelli.it" target="_blank" rel="noopener noreferrer">
							{' '}
							passionate indipendent scholar of Naval Archeology.
						</a>
					]}
					text2="I used Bootstrap since I wanted to learn its basic functionality. Unfortunatelly this projects is still on my GitHub page waiting for more pictures from the customer."
					html5={<i className="fab fa-html5" />}
					css3={<i className="fab fa-css3-alt" />}
				/> */}

				
			</div>
		</main>
	);
}

export default Main;
