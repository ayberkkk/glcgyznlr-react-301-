import React from "react";
import { useTodo } from "../../../contexts/TodoContext";

const Item = () => {
  const { todos, setTodos } = useTodo();

  const onChange = () => {
    const cloned_todos = [...todos];

    const itemIndex = cloned_todos.findIndex((todo) => todo.id);
    const item = todos[itemIndex];
    item.completed = false;

    console.log("cloned", cloned_todos);
  };

  return (
    <>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <div class="view">
            <input
              class="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={() => onChange(todo.id)}
            />
            <label>{todo.text}</label>
            <button class="destroy"></button>
          </div>
        </li>
      ))}
      ;
    </>
  );
};

export default Item;
