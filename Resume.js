// src/components/Resume.js
import React from 'react';

const Resume = ({ data }) => {
  return (
    <div className="resume-container">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <hr />
      <h3>About Me</h3>
      <p>{data.about}</p>
      <hr />
      <h3>Skills</h3>
      <ul>
        {data.skills.split(',').map((skill, index) => (
          <li key={index}>{skill.trim()}</li>
        ))}
      </ul>
      <hr />
      <h3>Experience</h3>
      <p>{data.experience}</p>
      <hr />
      <h3>Education</h3>
      <p>{data.education}</p>
    </div>
  );
};

export default Resume;