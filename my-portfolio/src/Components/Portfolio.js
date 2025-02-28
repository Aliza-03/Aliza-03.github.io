import React, { useState } from 'react';
import '../styles/Portfolio.css';
import KMeansClustering from '../assets/KMeansClusterpng.png';
import KMeansConfusion from '../assets/KMeansConfusion.png';

const projects = [
  {
    title: 'KMeans Clustering for Movie Review',
    description: 'Applied KMeans from scratch for IMDB review dataset',
    link: 'https://github.com/Aliza-03/IMDB_Movie_Review_KMeansClustering',
    images: [KMeansClustering],
    details: 'Dataset from Kaggle',
  },
  {
    title: 'Global prosperity Rankings Analysis',
    description: 'Dataset from Kaggle',
    link: 'https://github.com/Aliza-03/Global-Prosperity-Ranking---Visualisation',
    images: ['image1.jpg'],
    details: 'This project analyzes and classifies countries based on their "Average Score" and investigates the relationship between "Average Score" and "Safety and Security." In the first visualization, countries are classified into categories based on their average score, providing a general view of how many countries fall in each class. The second visualization showcases the correlation between a countrys average score and its safety and security levels. This allows us to observe how safety and security vary in relation to prosperity and well-being, providing deeper insights into the relationship between these two factors.',
  },
  {
    title: 'Encrypted Chat System with Key Exchange',
    description: 'Uses Diffie Hellman Key exchange and AES encryption',
    link: 'https://github.com/Aliza-03/Encrypted-Chat-System-',
    images: ['image1.jpg', 'image2.jpg'],
    details: 'Using AES and Diffie Helman key exchange, a client and server chat system has been created with registration and login functionality.',
  },
  {
    title: 'AlmonaTech Society Management System',
    description: 'Development project using ASP.NET',
    link: 'https://github.com/nbh-rjn/AlmonaTech-Society-Managment',
    images: ['image1.jpg', 'image2.jpg'],
    details: 'Created a desktop application to manage societies within university.Used ASP.NET',
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
             {/* Display project link if it exists */}
            {popupContent.link && (
              <p>
                <a href={popupContent.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </p>
            )}
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
