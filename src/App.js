import React, { useState, useEffect } from "react";
import "./App.css";

const API_URL = "https://type.fit/api/quotes";

function App() {
  const [data, setData] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="container">
        <h2>{data[index]?.text}</h2>
        <p>{data[index]?.author}</p>
        <button onClick={() => setIndex((prev) => prev + 1)}>NEW QUOTE</button>
      </div>
    </div>
  );
}

export default App;
