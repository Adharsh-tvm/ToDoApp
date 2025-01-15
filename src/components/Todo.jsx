import { useState } from "react";
import Todolist from "./Todolist";
import Form from "./Form";

export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}
