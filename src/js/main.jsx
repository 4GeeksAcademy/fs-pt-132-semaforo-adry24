import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [hasPurple, setHasPurple] = useState(false);

  const colors = hasPurple
    ? ["red", "yellow", "green", "purple"]
    : ["red", "yellow", "green"];

  const nextColor = () => {
    const currentIndex = colors.indexOf(color);
    const nextIndex = (currentIndex + 1) % colors.length;
    setColor(colors[nextIndex]);
  };

  return (
    <div className="container">
      <div className="traffic-light">
        {colors.map((lightColor) => (
          <div
            key={lightColor}
            onClick={() => setColor(lightColor)}
            className={`light ${lightColor} ${
              color === lightColor ? "selected" : ""
            }`}
          ></div>
        ))}
      </div>

      <button onClick={nextColor}>Cambiar color</button>

      {!hasPurple && (
        <button onClick={() => setHasPurple(true)}>
          Añadir púrpura
        </button>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);