import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name.trim() === "") {
      alert("Input is empty... Write Something...")
      return; }// Avoid adding empty todos
    setTodos([...todos, { ...todo, id: Date.now() }]); // Add unique id to each todo
    setTodo({ name: "", done: false }); // Reset the input
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter item..."
        />
        <button className={styles.inputButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
