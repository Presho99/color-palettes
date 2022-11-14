
import './App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import React, {useState, useEffect} from "react"
function App() {
  const colors = [
    "114B5F",
    "1A936F",
    "420039",
    "D72638",
    "A36D90",
    "EC7D10",
    "23967F",
    "3A3E3B",
    "14342B",
    "83781B"
  ];
  const [background, setBackground] = useState("#A36D90")
  const [current, setCurrent] = useState(null)
  return (
    <div className="App" style={{background: background}}>
      <h1>Color Palette</h1>      
    </div>
  );
}

export default App;
