import React from "react";
import TodoContext from "./Context/todoContext";

function TodoInput() {
  const [input, setInput] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <>
      <form>
        <input
          value={input}
          className="todoInput"
          placeholder="Enter a todo...."
          onChange={handleInputChange}
        ></input>
      </form>
    </>
  );
}

export default TodoInput;
