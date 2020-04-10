import React from "react";
import { Link } from "react-router-dom";
import Card from "../cards/Card";

const sideProjetcs = () => {
  return (
    <div className="side-projects">
      <h2 className="sideProject-h2">Side projects</h2>
      <div className="projects">
        <Card
          className="image-bg react-notes"
          link="https://banjer71.github.io/my-react-notes/"
          name="React Notes"
          text="Tests, practices, challenges using React"
        />
        <Card
          className="image-bg js-notes"
          link="https://banjer71.github.io/My-JavaScript-Notes/"
          name="JavaScript Notes"
          text="Tests, practices, challenges using only vanilla JavaScript"
        />
        <Link to="./Htmlcss" style={{ textDecoration: "none" }}>
          <Card
            className="image-bg html-css-notes"
            link=""
            name="HTML/CSS/JS challenges"
            text="Tests, practices, challenges using only HTML/CSS and JavaScript"
          />
        </Link>
      </div>
    </div>
  );
};

export default sideProjetcs;
