import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [cups, setCups] = useState([false, true, false]);
  const [isShuffling, setShuffling] = useState(false);

  const shuffleCups = () => {
    setShuffling(true);
    setTimeout(() => {
      setCups((prevState) => {
        const shuffledCups = [...prevState];
        for (let i = shuffledCups.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledCups[i], shuffledCups[j]] = [shuffledCups[j], shuffledCups[i]];
        }
        return shuffledCups;
      });
      setShuffling(false);
    }, 1000);
  };

  const handleCupClick = (index) => {
    if (isShuffling) return;

    if (cups[index]) {
      alert('You win! The ball is here!');
    } else {
      alert('Sorry, try again.');
    }
  };

  return (
    <div className="game">
      <div className={`cup-container ${isShuffling ? 'shuffling' : ''}`}>
        {cups.map((hasBall, index) => (
          <div
            key={index}
            className={`cup ${hasBall ? 'ball' : ''}`}
            onClick={() => handleCupClick(index)}
          >
            <div className="cup-inner">
              <div className="cup-handle"></div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={shuffleCups} disabled={isShuffling}>
        Shuffle Cups
      </button>
    </div>
  );
};

export default App;
