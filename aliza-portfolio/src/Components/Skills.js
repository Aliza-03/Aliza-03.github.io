// src/components/Skills.js
import React from 'react';
import '../styles/Skills.css';

const skills = [
  { name: 'Python' },
  { name: 'React-Native' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'MongoDB' },
  { name: 'Docker' },
  { name: 'SQL' },
  {name:'Tensorflow'},
  { name: 'Sci-kit Learn'},
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
