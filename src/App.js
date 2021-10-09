import React from "react";
import "./Style/style.css";
import { BrowserRouter } from "react-router-dom";
import Manager from "./Components/Manager";

function App() {
  return (
    <BrowserRouter>
      <Manager />
    </BrowserRouter>
  );
}

export default App;
