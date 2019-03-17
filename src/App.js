import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Sofi');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <p>You liked { count } times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>Hi my name is { name } 👧🏼!</p>
      <input type="text" name="name" onChange={handleNameChange} />
    </div>
  );
}

export default App;
