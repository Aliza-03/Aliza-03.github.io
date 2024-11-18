import React, { useState } from 'react';
import '../styles/Portfolio.css';

const projects = [
  {
    title: 'Project One',
    description: 'A web app that does XYZ.',
    link: '#',
    images: ['image1.jpg', 'image2.jpg'],
    details: 'This is a detailed description of Project One.',
  },
  {
    title: 'Project Two',
    description: 'A mobile app that helps with ABC.',
    link: '#',
    images: ['image1.jpg'],
    details: 'This is a detailed description of Project Two.',
  },
  {
    title: 'Project Three',
    description: 'A data visualization project for DEF.',
    link: '#',
    images: ['image1.jpg', 'image2.jpg'],
    details: 'This is a detailed description of Project Three.',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  const [popupContent, setPopupContent] = useState(null);

  const openPopup = (project) => {
    setPopupContent(project);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Portfolio</h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-item"
            onClick={() => openPopup(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-project-btn">View Project</button>
          </div>
        ))}
      </div>

      {popupContent && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>&times;</span>
            <h3>{popupContent.title}</h3>
            <p>{popupContent.details}</p>
            <div>
              {popupContent.images.map((image, index) => (
                <img key={index} src={image} alt={`Project image ${index + 1}`} />
              ))}
            </div>
            <div className="close-popup">
              <button onClick={closePopup}>Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
