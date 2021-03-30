import React from 'react';
import '../style/Contact.css'

function Contact() {
  return(
    <main className="contact-main">
      <h2>Get in touch</h2>
      <p className="contact-p">Would you like to know more about me or the projects I'm working on? Don't hesitate to get in touch!</p>
      <div className="contact-div">
        <div className="contact-btn">
          <a href="home" target="_blank" rel="noreferrer" className="contact-a">
            E M A I L
          </a>
        </div>
        <div className="contact-btn">
          <a href="https://www.linkedin.com/in/alessandraplets/" target="_blank" rel="noreferrer" className="contact-a">
            L I N K E D I N
          </a>
        </div>
      </div>
    </main>
  )
} 

export default Contact;
