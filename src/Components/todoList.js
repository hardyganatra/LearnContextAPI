import React from "react";
import TodoContext from "./Context/todoContext";

function TodoList() {
  const { todos } = React.useContext(TodoContext);
  return (
    <div className="todo-list">
      <ul>
        {todos.map((list) => (
          <li key={list.id}>{list.text}</li>
        ))}
      </ul>
    </div>
  );
}

export { TodoList };
