import React from 'react';
import Card from '../cards/Card';

const Htmlcss = () => {
	return (
		<div className="mentor">
				<h2 className='mentor-h2'>Template cloning</h2>
				<p>Simulations on how to build template and landing pages layout</p>
				<p>All these templates can be found on <a href='https://frontendmentor.io' target='_blank' rel="noopener noreferrer">Frontend mentor</a></p>
				<div className="projects">
					<Card
						className="image-bg huddle"
						link="https://banjer71.github.io/Huddle-landing-page/"
						name="Huddle landing page"
						text="HTML CSS"
						text2="The content is mostly in a single column layout, with some complexity in the footer."
					/>
					<Card
						className="image-bg fylo"
						link="https://banjer71.github.io/Fylo-beta-sign-up-landing-page/"
						name="Fylo-besta sign-up page"
						text="HTML CSS"
						text2="Responsive split-screen beta sign up landing page."
					/>
					<Card
						className="image-bg html-css-notes"
						link=''
						name="Project tracking intro component"
						text='HTML CSS'
						text2="Interesting layout with some code challenge to test your skills"
					/>
					
				</div>
			</div>
	);
};

export default Htmlcss;
