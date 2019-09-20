import React from 'react';
import Card from '../cards/Card';

const Htmlcss = () => {
	return (
		<div className="mentor">
				<h2 className='mentor-h2'>Template cloning</h2>
				<div className="projects">
					<Card
						className=""
						link="https://banjer71.github.io/Huddle-landing-page/"
						name="HUddle-landing-page"
						text="Tests, practices, challenges using React"
						text2="project under construction"
					/>
					<Card
						className=""
						link="https://banjer71.github.io/Fylo-beta-sign-up-landing-page/"
						name="Fylo-besta-sign-up page"
						text="Tests, practices, challenges using only vanilla JavaScript"
						text2="project under construction"
					/>
					<Card
						className="image-bg html/css-notes"
						link='./html/htmlcss'
						name="HTML/CSS/JS challenges"
						text="Tests, practices, challenges using only HTML/CSS and JavaScript"
					/>
					
				</div>
			</div>
	);
};

export default Htmlcss;
