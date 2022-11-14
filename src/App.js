
import './App.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useState, useEffect } from "react"
function App() {
  const colors = [
    "#114B5F",
    "#1A936F",
    "#420039",
    "#D72638",
    "#A36D90",
    "#EC7D10",
    "#23967F",
    "#3A3E3B",
    "#14342B",
    "#83781B"
  ];
  const [background, setBackground] = useState("#A36D90")
  const [current, setCurrent] = useState(null)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrent(null)
    }, 3000);
    return () => clearTimeout(timeoutId)
  }, [current])

  return (
    <div className="App" style={{ background: background }}>
      {current !== null && <h1>Copied: {current}</h1>}
      <div className='container'>
        {colors.map((color, index) => (
          <div key={index} className='card'>
            <div style={{
              background: color,
              filter: "bightness(85%)",
              boxShadow: color === background ? "0 0 5px #000" : ""
            }} 
            className='box' 
            onClick={() => setBackground(color)}>
            </div>
            <CopyToClipboard text={`color :${color};`}>
              <p 
              style={{
                color: color === background ? "#fff" : color
              }} 
              onClick={() => setCurrent(color)}>
                {color}
              </p>
            </CopyToClipboard>
          </div>
        ))}
      </div>
    
    </div>
  );
}

export default App;
