import React from "react";
import Header from "../header/Header";
import SocialMedia from "../socialMedia/SocialMedia";

function home() {
  return (
    <>
      <div className="home-background">
        <Header />
      </div>
      <div className="content">
        <div className="home">
          <div className="davide-home">
            <div className="david">
              <h1>Who I am</h1>
            </div>
            <h3>
              Passionate and motivated front-end developer with one year of
              experience as a freelance.
            </h3>
            <p>
              I love creating websites and web applications. I have always had a
              strong passion for web development and I cultivated it as much as
              possible as a side project during my career as IT Technician.
            </p>
            <p>
              In July 2018 I decided to take this path and to study full-time
              through different online resources and I completed a coding
              bootcamp on JavaScript and Reactjs.
            </p>

            <SocialMedia
              twitter="https://twitter.com/Banjerkid"
              github="https://github.com/Banjer71"
              linkedin="https://www.linkedin.com/in/davide-naccarati-877b9821/"
              mail="mailto:davide.naccarati@gmail.com"
            />
          </div>
          <div className="card">
            <h3 className="card-tech">Technologies</h3>
            <ul className="tech">
              <li>
                <i className="fab fa-html5"></i>
              </li>
              <li>
                <i className="fab fa-css3-alt"></i>
              </li>
              <li>
                <i className="fab fa-js-square"></i>
              </li>
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-node-js"></i>
              </li>
              <li>
                <i className="fas fa-database"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default home;
