import React, { useEffect } from "react";
import { useTodo } from "./context/TodoContext";

const Footer = () => {
  const { todos, setTodos, filter, setFilter } = useTodo();

  useEffect(() => {
    setFilter("all");
  }, [setFilter]);

  const clearCompleted = () => {
    const cloned_toods = [...todos];
    const new_todos = cloned_toods.filter((todo) => !todo.completed);
    setTodos(new_todos);
  };

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todos.length}</strong>
        <span style={{ marginLeft: "2px" }}>
          {" "}
          item{todos.length > 1 ? "s" : ""} left
        </span>
      </span>
      <ul className="filters">
        <li>
          <a
            href="#/"
            onClick={() => handleFilterClick("all")}
            className={filter === "all" ? "selected" : ""}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => handleFilterClick("active")}
            className={filter === "active" ? "selected" : ""}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            onClick={() => handleFilterClick("completed")}
            className={filter === "completed" ? "selected" : ""}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
