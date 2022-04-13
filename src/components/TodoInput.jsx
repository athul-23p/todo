import { useState } from "react";
import './todoinput.css';
export const TodoInput = ({addTodoHandler}) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
      id="todo-input"
        type="text"
        placeholder="Enter todo"
        onChange={(e) => {
          setText(e.target.value);
        
        }}
      />
      <button id='add-todo-btn'onClick={() => addTodoHandler(text)}>+</button>
    </div>
  );
};
