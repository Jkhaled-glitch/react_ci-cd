import React from "react"
import App from './App'
import ReactDOM from "react-dom"

test('render App', () => {
  const div = ReactDOM.createRoot(document.createElement("div"))
  div.render(<App />)
});
