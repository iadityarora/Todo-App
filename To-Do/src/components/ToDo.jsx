import React from "react";

function ToDo({ todo, index, delTodo }) {
  return (
    <div className="to-do">
      {/* <p>go to the gym</p> */}
      <p>{todo}</p>

      <div className="action">
        <input type="checkbox" />
        <button onClick={() => delTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDo;
