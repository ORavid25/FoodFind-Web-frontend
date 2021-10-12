import React from "react";
import "./Style/style.css";
import { BrowserRouter } from "react-router-dom";
import Manager from "./Components/Manager";
import { FoodFindProvider } from "./context";

function App() {
  return (
    <FoodFindProvider>
      <BrowserRouter>
        <Manager />
      </BrowserRouter>
    </FoodFindProvider>
  );
}

export default App;
