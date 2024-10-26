// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Welcome to My Portfolio</h2>
        <p>I’m Aliza, a web developer passionate about creating beautiful and functional websites.</p>
        <a href="#portfolio" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
