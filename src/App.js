import React from "react";
import "./Main.css";
import TodoForm from "./components/todo/Header/NewTodoForm/TodoForm";
import { TodoProvider } from "./contexts/TodoContext";
import Content from "./components/todo/content/Content";

const App = () => {
  return (
    <TodoProvider>
      <section className="todo-container">
        <TodoForm />
        <Content />
      </section>
    </TodoProvider>
  );
};

export default App;
