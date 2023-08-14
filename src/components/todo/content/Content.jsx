import React from "react";
import Footer from "../Footer"
import List from "./List";
const Content = () => {
  return (
    <>
      <section class="main">
        <input class="toggle-all" type="checkbox" />
        <label for="toggle-all">Mark all as complete</label>
        <List />
      </section>
      <Footer />
    </>
  );
};

export default Content;
