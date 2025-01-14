import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

export default function Todolist({ todos, setTodos }) {
  // Sort todos: incomplete items first, then completed ones
  const sortedTodos = [...todos].sort((a, b) => a.done - b.done);

  return (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
