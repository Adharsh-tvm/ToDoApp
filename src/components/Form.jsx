import { useState } from "react";
import styles from "./form.module.css";


export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedName = todo.name.trim();

    // Validation: Prevent empty input
    if (trimmedName === "") {
      alert("Input is empty... Write Something...");
      return;
    }

    // Validation: Prevent duplicate items
    const isDuplicate = todos.some(
      (existingTodo) =>
        existingTodo.name.toLowerCase() === trimmedName.toLowerCase()
    );
    if (isDuplicate) {
      alert("This item already exists in your todo list.");
      return;
    }

    // Add new todo with unique ID
    setTodos([...todos, { ...todo, id: Date.now(), name: trimmedName }]);

    // Reset the input
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.textInput}
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
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
