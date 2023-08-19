import React from "react";
import TodoForm from "./components/todo/Header/NewTodoForm/TodoForm";
import Content from "./components/todo/content/Content";
import { TodoProvider } from "./components/todo/context/TodoContext";

const TodoMenu = () => {
  return (
    <TodoProvider>
      <section className="todo-container">
        <TodoForm />
        <Content />
      </section>
    </TodoProvider>
  );
};

export default TodoMenu;
