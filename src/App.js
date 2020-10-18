import React from 'react'
import style from './App.css'

const API_URL = "https://type.fit/api/quotes"

function App() {
  return (
    <div>
      <div className="container">
        <h1>Quote text</h1>
        <p>Author</p>
        <button>NEW QUOTE</button>
      </div>
    </div>
  )
}

export default App
