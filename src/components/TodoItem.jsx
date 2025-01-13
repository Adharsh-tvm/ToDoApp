
import styles from './todoitem.module.css'

export default function TodoItem({item, todos, setTodos}) {

    function handleDelete(item){
        console.log(`Delete button clicked for ${item} `);
        setTodos(todos.filter((todo) => todo!==item))
    }
    
    return <div className={styles.item} >
        <div className={styles.itemName}>
            {item} 
            <span>
            <button onClick={()=>handleDelete(item)} className={styles.deleteButton} > &#10060;</button>
        </span> 
        </div>
        
        <hr className={styles.line} />
        </div>

};
