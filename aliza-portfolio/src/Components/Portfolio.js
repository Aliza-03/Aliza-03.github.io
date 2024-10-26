// src/components/Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';

const projects = [
  { title: 'Project One', description: 'A web app that does XYZ.', link: '#' },
  { title: 'Project Two', description: 'A mobile app that helps with ABC.', link: '#' },
  { title: 'Project Three', description: 'A data visualization project for DEF.', link: '#' },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
