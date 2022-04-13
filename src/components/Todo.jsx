import { TodoInput } from "./TodoInput";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { nanoid } from "nanoid";
import './todo.css';
function Todo() {
  const [todosList, setTodosList] = useState([
    { title: "learn react", status: false, id: nanoid(4) },
  ]);

  const getData = (todo) => {
    if (todo === "") {
      return;
    }
    const payload = {
      title: todo,
      status: false,
      id: nanoid(4),
    };
    setTodosList([payload, ...todosList]);
  };

  const handleStatus = (id) => {
    setTodosList(
      todosList.map((el) => (el.id === id ? { ...el, status: !el.status } : el))
    );
  };

  return (
    <div>
      <div id="input-control">
        <TodoInput addTodoHandler={getData} />
      </div>
      <div id="list-container">
        {todosList.map((el) => (
          <TodoItem data={el} changeStatus={handleStatus} />
        ))}
      </div>
    </div>
  );
}

export { Todo };
