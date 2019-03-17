import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Sofi');
  const [title, setTitle] = useState('react-hooks');

  // this works like ComponentDidMount()
  useEffect(() => {
    document.title = title;
  });

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <p>You liked { count } times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <p>Hi my name is { name } 👧🏼!</p>
      <input type="text" name="name" onChange={handleNameChange} />

      <p>Change the title of this page 👇</p>
      <input type="text" name="title" onChange={handleTitleChange} />
    </div>
  );
}

export default App;

