// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Aliza Ibrahim</h2>
        <p>Welcome to my portfolio</p>
        <a href="#portfolio" className="hero-button">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
