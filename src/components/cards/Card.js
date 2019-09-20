import React from 'react';

function Card(props) {
	return (
		<div className="card">
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<div className={props.className} />
			</a>
			<h3>
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					{props.name}
				</a>
			</h3>
			<p>{props.text}</p>
			<p>{props.text2}</p>
			<ul className="tech1">
				<li>{props.html5}</li>
				<li>{props.css3}</li>
				<li>{props.javascript}</li>
				<li>{props.react}</li>
				<li>{props.nodejs}</li>
				<li>{props.mongodb}</li>
				<li>{props.wordpress}</li>
			</ul>
		</div>
	);
}

export default Card;
