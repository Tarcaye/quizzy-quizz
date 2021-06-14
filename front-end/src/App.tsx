import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [activeMatch, setActiveMatch] = useState<any>();
  useEffect(() => {
    async function toto(){
    const response = await fetch("/api/game-mock.json");
    const data = await response.json();
    setActiveMatch(data);
    }
    toto();
  }, [])

  return (
    <div className="App">{JSON.stringify(activeMatch)}</div>
  );
}

export default App;
