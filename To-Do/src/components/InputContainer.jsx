import React from "react";

function InputContainer({input,writeTodo,addTodo}) {
  return (
    <div className="input-container">
      <input type="text" value={input} onChange={writeTodo}/>
      <button onClick={addTodo}>+</button>
    </div>
  );
}

export default InputContainer;
