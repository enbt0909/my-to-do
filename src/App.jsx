import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import './components/Card.css';
import Input from './components/Input';

window.onload = function() {
  const today = new Date().toDateString();

  if (localStorage.getItem('updateMessageShown') !== today) {
      alert("Für eine bessere Nutzererfahrung gab es am 17.02.2024 ein neues Update.");

      localStorage.setItem('updateMessageShown', today);
  }
}

function App() {
  const [cards, setCards] = useState(() => {
    const savedCards = localStorage.getItem('cards');
    if (savedCards) {
      return JSON.parse(savedCards);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const handleSave = (text) => {
    const timestamp = new Date();
    setCards(prevCards => [...prevCards, { text, timestamp: timestamp.toISOString() }]);
  };

  const handleDelete = (indexToDelete) => {
    setCards(prevCards => prevCards.filter((card, index) => index !== indexToDelete));
  };

  return (
    <>
      <div className="input">
        <Input onSave={handleSave} />
      </div>
      {cards.map((cardText, index) => (
        <Card key={index} className="card" title={`${index + 1}`} content={cardText} onDelete={() => handleDelete(index)} />
      ))}
    </>
  );
}

export default App;