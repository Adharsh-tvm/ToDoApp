import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.trim() === "") return; // Avoid adding empty todos
        setTodos([...todos, todo]); // Ensure todo is a string
        setTodo("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    onChange={(e) => setTodo(e.target.value)} 
                    value={todo} 
                    type="text" 
                />
                <button type="submit">Add</button>
            </form>

            {todos.map((item, index) => (
                <TodoItem key={index} item={item} /> // Use index as a key for simplicity
            ))}
        </div>
    );
}
