// src/components/Form.js
import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    about: '',
    skills: '',
    experience: '',
    education: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data back to parent component
  };

  return (
    <div className="form-container">
      <h1>Create Your Resume</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>About Me:</label>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Skills (comma separated):</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Experience:</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Education:</label>
          <textarea
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create Resume</button>
      </form>
    </div>
  );
};

export default Form;