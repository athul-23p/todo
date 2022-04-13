import './todoitem.css';
function TodoItem({data,changeStatus}){
    let {id,title,status} = data;
    return (
      <div className="todo-item">
        <p>{title}</p>
        <div
          className={status ? "status bg-dodger-blue" : "status"}
          onClick={() => changeStatus(id)}
        ></div>
     
      </div>
    );
}

export default TodoItem;