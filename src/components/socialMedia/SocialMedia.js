import React from "react";

function SocialMedia(props) {
  return (
    <ul className="media">
      <li>
        <a href={props.twitter} target="_alt" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
      </li>
      <li>
        <a href={props.github} target="_alt" rel="noopener noreferrer">
          <i className="fab fa-github-square"></i>
        </a>
      </li>
      <li>
        <a href={props.linkedin} target="_alt" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a href={props.mail} target="_alt" rel="noopener noreferrer">
          <i class="fas fa-envelope-square"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialMedia;
