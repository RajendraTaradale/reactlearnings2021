import React, { useState } from 'react';
 
const PlainFunDemo = () => {
  return <Headline />;
};
 
const Headline = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );
 
  const handleChange = event => setGreeting(event.target.value);
 
  return (
    <div>
      <h1>{greeting}</h1>
 
      <input type="text" value={greeting} onChange={handleChange} />
    </div>
  );
};
 
export default PlainFunDemo;