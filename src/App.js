import React, { useState } from 'react';
import words from './words';
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [randomWord, setRandomWord] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const pickRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    setRandomWord(words[randomIndex]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>가톨릭 말씀 사탕 뽑기</h1>
      </header>
      <div className="App-content">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="세례명을 입력하세요"
          className="Name-input"
        />
        <button onClick={pickRandomWord} className="Pick-button">말씀 뽑기</button>
        {randomWord.content && (
          <div className="Word-display">
            <p className="Word-content">{randomWord.content}</p>
            <p className="Word-reference">({randomWord.book} {randomWord.chapter}:{randomWord.verse})</p>
          </div>
        )}
      </div>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
