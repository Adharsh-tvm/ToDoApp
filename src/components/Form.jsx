import { useState } from "react";
import styles from "./form.module.css"
export default function Form({todos, setTodos}) {

  const [todo, setTodo] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    if (todo.trim() === "") return; // Avoid adding empty todos
    setTodos([...todos, todo]); // Ensure todo is a string
    setTodo("");
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
      <input
      className={styles.textInput}
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        placeholder="Enter item..."
      />
      <button className={styles.inputButton} type="submit">Add</button>
      </div>
    </form>
  )
}
