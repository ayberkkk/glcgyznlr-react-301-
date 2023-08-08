import { useContext } from "react";
import LangContext from "../contexts/LangContext";

const ChangeLang = () => {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div>
      <div> Active Lang = {lang}</div>
      <div>
        <button onClick={() => setLang("TR")}>TR</button>
        <button onClick={() => setLang("EN")}>EN</button>
        <button onClick={() => setLang("DE")}>DE</button>
      </div>
    </div>
  );
};

export default ChangeLang;
