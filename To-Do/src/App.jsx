import React, { useState } from "react";
import "./App.css";
import InputContainer from "./components/InputContainer";
import ToDoContainer from "./components/ToDoContainer";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function writeTodo(e) {
    setInput(e.target.value);
  }
  function addTodo() {
    if (input != "") {
      setTodos((prevTodos) => [...prevTodos, input]);
      setInput("");
    }
  }

  function delTodo(todoIndex) {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos, prevTodosIndex) => {
        return prevTodosIndex != todoIndex;
      })
    );
  }
  return (
    <main>
      <h1>To Do List</h1>
      <InputContainer input={input} writeTodo={writeTodo} addTodo={addTodo} />
      <ToDoContainer todos={todos} delTodo={delTodo}/>
    </main>
  );
}

export default App;
