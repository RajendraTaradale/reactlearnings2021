import React from 'react';

function DemoFunction() {
    const [language, setLanguage] = React.useState("python");
    const [yearsExperience, setYearsExperience] = React.useState(0);
  
    return (
      <div>
        <button onClick={() => setLanguage("javascript")}>
          Change language to JS
        </button>
        <input
          type="number"
          value={yearsExperience}
          onChange={event => setYearsExperience(event.target.value)}
        />
        <p>I am now learning {language}</p>
        <p>I have {yearsExperience} years of experience</p>
      </div>
    );
  }

  export default DemoFunction;