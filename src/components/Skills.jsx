import React from 'react';
import '../style/Skills.css';

function Skills() {
  return(
    <main className="skills-main">
      <h2>Hard Skills</h2>
      <div className="skills-div">
        <div>
          <ul style={{ listStyleType: "circle" }} >
            <li className="skill-list">H T M L</li>
            <li className="skill-list">C S S</li>
            <li className="skill-list">J A V A S C R I P T</li>
            <li className="skill-list">J E S T</li>
            <li className="skill-list">R T L</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "circle" }} >
            <li className="skill-list">R E A C T</li>
            <li className="skill-list">R E D U X</li>
            <li className="skill-list">H O O K S</li>
            <li className="skill-list">C O N T E X T A P I</li>
            <li className="skill-list">M Y S Q L</li>
          </ul>
        </div>
      </div>
      <h2>Soft Skills</h2>
      <div className="skills-div">
      <div>
          <ul style={{ listStyleType: "circle" }} >
            <li className="skill-list">Creative</li>
            <li className="skill-list">Critical Thinking</li>
            <li className="skill-list">Organized</li>
            <li className="skill-list">ENFP (Myers-B.)</li>
          </ul>
        </div>
        <div>
          <ul style={{ listStyleType: "circle" }} >
            <li className="skill-list">Communicative</li>
            <li className="skill-list">Thoughtful</li>
            <li className="skill-list">Teamworker</li>
            <li className="skill-list">Influencer (Disc)</li>
          </ul>
        </div>
      </div>
    </main>
  )
} 

export default Skills;
