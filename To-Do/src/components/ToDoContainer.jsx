import React from "react";
import ToDo from "./ToDo";

function ToDoContainer({ todos ,delTodo }) {
  return (
    <div className="task-container">
      {todos.map((todo, index) => (
         <ToDo todo={todo} index={index} delTodo={delTodo}/>
      ))}
    </div>
  );
} 

export default ToDoContainer;
