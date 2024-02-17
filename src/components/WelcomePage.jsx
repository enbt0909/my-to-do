import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function WelcomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('English');
  const [font, setFont] = useState('Arial');
  const history = useHistory();

  const handleStart = () => {
    // Speichern Sie die Einstellungen in localStorage
    localStorage.setItem('darkMode', darkMode);
    localStorage.setItem('language', language);
    localStorage.setItem('font', font);

    // Leiten Sie den Benutzer zur Todo-Seite weiter
    history.push('/todo');
  };

  return (
    <div>
      <h1>Willkommen!</h1>
      <label>
        Dark Mode:
        <input type="checkbox" checked={darkMode} onChange={e => setDarkMode(e.target.checked)} />
      </label>
      <label>
        Sprache:
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Deutsch">Deutsch</option>
          // Fügen Sie hier weitere Sprachen hinzu
        </select>
      </label>
      <label>
        Schriftart:
        <select value={font} onChange={e => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          // Fügen Sie hier weitere Schriftarten hinzu
        </select>
      </label>
      <button onClick={handleStart}>Start</button>
    </div>
  );
}

export default WelcomePage;