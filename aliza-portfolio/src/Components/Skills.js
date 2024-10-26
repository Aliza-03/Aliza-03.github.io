// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'HTML', level: 'Advanced' },
  { name: 'CSS', level: 'Advanced' },
  { name: 'JavaScript', level: 'Intermediate' },
  { name: 'React', level: 'Intermediate' },
  { name: 'Node.js', level: 'Beginner' },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <h3>{skill.name}</h3>
            <p>{skill.level}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
