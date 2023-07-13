import { useDispatch } from 'react-redux'
import { deleteTodo, toggleTodo } from './todosSlice'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch()
    return <li>
        <button 
            onClick={() => {
                dispatch(deleteTodo(todo.id))
            }}
        >Delete</button>
        <input 
            type="checkbox" 
            checked={todo.completed}
            onChange={() => {
                dispatch(toggleTodo(todo.id))
            }}
        />
        <span
            style={{textDecoration: todo.completed ? "line-through": "none" }}
        >
            {todo.title}
        </span>
    </li>
}

export default TodoItem