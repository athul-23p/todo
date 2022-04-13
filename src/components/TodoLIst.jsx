import TodoItem from "./TodoItem";
function TodoList({ data,statusHandler}) {
  return (
    <div>
      {data.map((el) => (
        <TodoItem data={el} changeStatus={statusHandler} />
      ))}
      
    </div>
  );
}

export default TodoList;
