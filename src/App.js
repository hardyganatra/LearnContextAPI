import React from "react";
import "./App.css";
import TodoInput from "./Components/todoInput";
import { TodoList } from "./Components/todoList";
import GLobalTodoState from "./Components/Context/todoGlobalState";

function App() {
  return (
    <div className="main-container">
      <div className="App">
        <GLobalTodoState>
          <TodoInput />
          <TodoList />
        </GLobalTodoState>
      </div>
    </div>
  );
}

export { App };
