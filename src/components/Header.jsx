import React from 'react';
import headPic from '../images/headPic.png';
import '../style/Head.css'

function Head() {
  return(
    <main className="head-main">
      <div className="head">
        <div className="head-info">
          <span className="head-subTitle">Hello. My name is</span>
          <h1 className="head-title">Alessandra</h1>
          <p className="head-p">“Live in each season as it passes; breathe the air, drink the drink, taste the fruit, and resign yourself to the influence of the earth.” ― Henry David Thoreau</p>
        </div>
        <img className="head-pic" alt="alessandra smiling" src={headPic} />
      </div>
      <div className="head-contact">
        <a href="https://www.linkedin.com/in/alessandraplets/" target="_blank" rel="noreferrer">L  I  N  K  E D  I  N</a>
        <a href="https://github.com/itsaleplets" target="_blank" rel="noreferrer">G I T H U B</a>
        <a href="" target="_blank" rel="noreferrer">P R O J E C T S</a>
      </div>
    </main>
  )
} 

export default Head;
