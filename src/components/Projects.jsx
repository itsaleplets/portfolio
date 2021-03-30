import React from 'react';
import '../style/Projects.css';
import trip from '../images/trip.png';
import tarot from '../images/tarot.png';
import hacka from '../images/hacka.png';
import chat from '../images/chat.png';
import chatIcon from '../images/chatIcon.png';
import beerIcon from '../images/beerIcon.png';
import tarotIcon from '../images/tarotIcon.png';
import tripIcon from '../images/tripIcon.png';

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
 
      </div>

      <div className="project-img-div">
        <div className="project-img">
            <img alt="" src={trip} className="img-width" />
            <a href="https://github.com/itsaleplets/LandingPageSmiles" target="blank">
              <div className="description">
                <span className="description-title">TripInvest</span>
                <img alt="icon" src={tripIcon} className="hacka-icon"/>
                <p className="description-p">The landing page of my lastest project, an app to organize your trips. Soon you'll be able to access it. Check its repository on my github as "hackathonSmile"</p>
              </div>
            </a>
          </div>

          <div className="project-img">
            <img alt="" src={chat} className="img-width" />
            <a href="https://github.com/itsaleplets/LandingPageSmiles" target="blank">
              <div className="description">
                <span className="description-title">Chatty</span>
                <img alt="icon" src={chatIcon} className="trivia-icon"/>
                <p className="description-p">A dynamic chat built in Redux to gather basic user information and send to an API. This chatbot asks you questions and offers you the right answer! </p>
              </div>
            </a>
          </div>
      </div>
     
    </div>
  )
}

export default Projects;
