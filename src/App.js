import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import playersData from './playerData/players.json';
import Players from './Components/Players/Players';

function App() {
  const [players, setPlayers] = useState([]);



  useEffect(() => {
    setPlayers(playersData);

  }, [])

  return (
    <div>
      <Header></Header>
      <Players players={players}></Players>
    </div>
  );
}

export default App;