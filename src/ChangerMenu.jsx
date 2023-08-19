import React from "react";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Container from "./Container";

const LangThemeMenu = () => {
  return (
    <LangContextProvider>
      <ThemeContextProvider>
        <Container />
      </ThemeContextProvider>
    </LangContextProvider>
  );
};

export default LangThemeMenu;
