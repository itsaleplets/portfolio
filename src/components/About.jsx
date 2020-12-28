import React from 'react';
import aboutImg from '../images/aboutPic.jpg'
import '../style/About.css'

function About() {
  return(
    <main className="about-main">
      <img className="about-img" alt="alessandra sitting looking to the right" src={aboutImg} />
      <h2>About me</h2>
        <p className="about-p">
        The happiness I feel when I find a solution, and it works, is incomparable!
        A backpacker and nature lover, it all started in 2018 when I was looking for ways to work and travel. Through research I got to know more about Web Development and I was delighted with it! I used to work as a teacher and, as teaching is one of my passions, why not mix both?
        </p>
        <p className="about-p">
        In 2020 I started my studies at Trybe to become a Full Stack Web Developer. Now I'm looking for the opportunity to put my knowledge into practice and collaborate with the growth of the company I'm in.
        </p>
    </main>
  )
} 

export default About;
