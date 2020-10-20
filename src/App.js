import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://type.fit/api/quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((quote) => setQuote(quote));
  }, []);

  return (
    <div>
      <div className="container">
        <h2>{quote[index]?.text}</h2>
        <p>{quote[index]?.author ?? "Uknown"}</p>
        <button
          onClick={() => setIndex(() => Math.floor(Math.random() * 200) + 1)}
        >
          NEW QUOTE
        </button>
      </div>
    </div>
  );
}

export default App;
