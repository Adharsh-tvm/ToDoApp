import styles from "./todoitem.module.css";
import { useState } from "react";

export default function TodoItem({ item, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo.id !== item.id)); // Use id for comparison
  }

  function handleClick(id) {
    const newArray = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  function handleEditToggle() {
    setIsEditing(!isEditing);
  }

  function handleEditSave() {
    const trimmedName = newName.trim();

    // Validation: Check for empty or whitespace-only input
    if (trimmedName === "") {
      alert("Name cannot be empty or whitespace only.");
      return;
    }

    // Validation: Check for duplicates
    const isDuplicate = todos.some(
      (todo) =>
        todo.name.toLowerCase() === trimmedName.toLowerCase() &&
        todo.id !== item.id
    );
    if (isDuplicate) {
      alert("This item already exists.");
      return;
    }

    // Update the todos list with the edited item
    const updatedTodos = todos.map((todo) =>
      todo.id === item.id ? { ...todo, name: trimmedName } : todo
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  }

  const classNameComplete = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        {isEditing ? (
          <>
            <input
              className={styles.editInput}
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              type="text"
            />
            <button className={styles.saveButton} onClick={handleEditSave}>
              Save
            </button>
            <button className={styles.cancelButton} onClick={handleEditToggle}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <span
              className={classNameComplete}
              onClick={() => handleClick(item.id)}
            >
              {item.name}
            </span>
            <span>
              <button
                onClick={handleDelete.bind(null, item)}
                className={styles.deleteButton}
              >
                &#10060;
              </button>
              <button onClick={handleEditToggle} className={styles.editButton}>
                Edit
              </button>
            </span>
          </>
        )}
      </div>
      <hr className={styles.line} />
    </div>
  );
}
