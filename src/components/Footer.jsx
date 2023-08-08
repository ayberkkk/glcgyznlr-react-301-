import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LangContext from "../contexts/LangContext";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <div>
      <hr />
      Footer
      <p>Active Theme : {theme}</p>
      <p>Active Theme : {lang}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
};

export default Footer;
