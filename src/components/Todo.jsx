import { TodoInput } from "./TodoInput";
import { useState } from "react";
import { nanoid } from "nanoid";
import TodoList from "./TodoLIst";

function Todo() {
  const [todosList, setTodosList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // function to add new todos
  const getData = (todo) => {
    if (todo === "") {
      return;
    }
    const payload = {
      title: todo,
      status: false,
      id: nanoid(4),
    };
    const newTodos = [payload, ...todosList];
    localStorage.setItem("todos", JSON.stringify(newTodos));
    setTodosList(newTodos);
  };

  // function to toggle todo status
  const handleStatus = (id) => {
    const newTodos = todosList.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    storeAndUpdateTodos(newTodos);
  };

  const storeAndUpdateTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
    setTodosList(todos);
  };

  return (
    <div>
      <TodoInput addTodoHandler={getData} />
      <TodoList data={todosList} statusHandler={handleStatus} />
    </div>
  );
}

export { Todo };
