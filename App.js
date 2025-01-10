// src/App.js
import React, { useState } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div className="App">
      {!resumeData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Resume data={resumeData} />
      )}
    </div>
  );
}

export default App;