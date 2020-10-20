import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://type.fit/api/quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(0);

  const randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((quote) => {
        setQuote(quote);
        setIndex(randomNumber(0, quote.length));
      });
  }, []);

  return (
    <div>
      <div className="container">
        <h2>{quote[index]?.text ?? "Loading..."}</h2>
        <p>{quote[index]?.author ?? "Uknown"}</p>
        <button onClick={() => setIndex(randomNumber(0, quote.length))}>
          NEW QUOTE
        </button>
      </div>
    </div>
  );
}

export default App;
