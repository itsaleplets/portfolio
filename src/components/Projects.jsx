import React from 'react';
import '../style/Projects.css';
import trivia from '../images/trivia.png';
import tarot from '../images/tarot.png';
import hacka from '../images/hacka.png';
import beerIcon from '../images/beerIcon.png';
import tarotIcon from '../images/tarotIcon.png';
import triviaIcon from '../images/triviaIcon.png';

function Projects() {
  return (
    <div className="project-main">
      <h2>Projects</h2>
      <div className="project-img-div">

        <div className="project-img">
          <img alt="" src={hacka} className="img-width"/>
          <a href="https://github.com/itsaleplets/hackathonAmbev" target="blank">
            <div className="description">
              <span className="description-title">Hackathon</span>
              <img alt="icon" src={beerIcon} className="hacka-icon"/>
              <p className="description-p">My team won 1º place at Ambev Hackathon. It was my first experience and I built a web application that monitors sensors.</p>
            </div>
          </a>
        </div>

        <div className="project-img">
          <img alt="" src={tarot} className="img-width" />
          <a href="https://github.com/itsaleplets/tarot-vision" target="blank">
            <div className="description">
              <span className="description-title">Tarot Vision</span>
              <img alt="icon" src={tarotIcon} className="tarot-icon"/>
              <p className="description-p">With Tarot Vision you're able to get an answer to some of your questions. It was developed in React Hooks, using external API.</p>
            </div>
          </a>
        </div>

        <div className="project-img">
          <img alt="" src={trivia} className="img-width" />
          <a href="https://github.com/itsaleplets/trivia-game" target="blank">
            <div className="description">
              <span className="description-title">Trivia</span>
              <img alt="icon" src={triviaIcon} className="trivia-icon"/>
              <p className="description-p">It is a project where you can test your knowledge answering general questions and checking your rate at the end.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects;
