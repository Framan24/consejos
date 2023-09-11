import React, { useState, useEffect } from "react";
import "./App.css";
import { PiDiceFiveBold } from "react-icons/pi";

function App() {
  const [adviceData, setAdviceData] = useState({ id: null, advice: "" });

  const fetchAdvice = () => {
    const apiUrl = "https://api.adviceslip.com/advice";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const adviceId = data.slip.id;
        const adviceText = data.slip.advice;
        setAdviceData({ id: adviceId, advice: adviceText });
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  const handleRefresh = () => {
    fetchAdvice();
  };
  return (
    <div className="App">
      <div className="card">
        <h4>ADVICE #{adviceData.id}</h4>
        <p>"{adviceData.advice}"</p>
        <p>< hr/></p>
        <span className="button">
          <PiDiceFiveBold onClick={handleRefresh} />
        </span>
      </div>
    </div>
  );
}

export default App;
