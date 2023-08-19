import React from "react";
import { useTodo } from "../context/TodoContext";

let filtered = null;

const Item = ({ todo }) => {
  const { todos, toggleTodo, toggleDestroy, filter } = useTodo();

  const onChange = (id) => {
    toggleTodo(id);
  };

  const onDestroy = (id) => {
    toggleDestroy(id);
  };

  filtered = todos;

  if (filter !== "all") {
    filtered = todos.filter((todo) =>
      filter === "active" ? todo.completed === false : todo.completed === true
    );
  }

  return (
    <>
      {filtered.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onChange(todo.id)}
            />
            <label>{todo.text}</label>
            <button class="destroy" onClick={() => onDestroy(todo.id)}></button>
          </div>
        </li>
      ))}
    </>
  );
};

export default Item;
