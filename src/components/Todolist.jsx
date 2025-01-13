import TodoItem from "./TodoItem";
import styles from './todolist.module.css';

export default function Todolist({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
