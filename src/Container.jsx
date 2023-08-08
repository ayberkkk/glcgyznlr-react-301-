import React, { useContext } from "react";
import ChangeTheme from "./components/ChangeTheme";
import ChangeLang from "./components/ChangeLang";
import Footer from "./components/Footer";
import ThemeContext from "./contexts/ThemeContext";

const Container = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`container ${theme}`}>
      <ChangeTheme />
      <ChangeLang />
      <Footer />
    </div>
  );
};

export default Container;
