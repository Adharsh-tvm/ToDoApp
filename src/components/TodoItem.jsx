
import styles from './todoitem.module.css'

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(item){
        console.log(`Delete button clicked for ${item.name} `);
        setTodos(todos.filter((todo) => todo!==item))
    }

    function handleClick(name){
       const newArray = todos.map((todo)=>todo.name === name ? {...todo,done:!todo.done}:todo) 

       setTodos(newArray)
    }
    
    const classNameComplete = item.done ? styles.completed : ""

    return <div className={styles.item} >
        <div className={styles.itemName}>
            <span className={classNameComplete} onClick={()=>handleClick(item.name)} >{item.name} </span>
           
            <span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton} > &#10060;</button>
        </span> 
        </div>
        
        <hr className={styles.line} />
        </div>

};
