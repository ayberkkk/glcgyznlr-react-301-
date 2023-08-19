import React from "react";
import "./Main.css";
import Header from "./components/Header";
import ChangerMenu from "./ChangerMenu";
import TodoMenu from "./TodoMenu";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/lang-theme-menu" element={<ChangerMenu />} />
        <Route path="/todo-menu" element={<TodoMenu />} />
      </Routes>
    </>
  );
}

export default App;
