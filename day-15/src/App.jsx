import React, { useState } from 'react'; 
import './App.css';

const App = () => {
  const [level, setLevel] = useState("beginner");

  let message;
  if (level === "beginner") {
    message = (
      <div>
        <h2>Welcome, Beginner!</h2>
        <p>Start with the basics</p>
      </div>
    );
  } else if (level === "intermediate") {
    message = (
      <div>
        <h2>Great Progress!</h2>
        <p>You are ready to move into advanced topics</p>
      </div>
    );
  } else if (level === "expert") {
    message = (
      <div>
        <h2>Expert Level Achieved!</h2>
        <p>Building your own library.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      {message}
      <label htmlFor="experience-select">Choose experience level: </label>
      <select
        id="experience-select"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="expert">Expert</option>
      </select>
    </div>
  );
};

export default App;
