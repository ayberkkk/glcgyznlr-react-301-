import React from "react";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { LangContextProvider } from "./contexts/LangContext";
import Container from "./Container";
import "./Main.css";

const App = () => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default App;
