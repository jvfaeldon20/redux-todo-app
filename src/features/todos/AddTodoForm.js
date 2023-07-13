import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todosSlice"

const AddTodoForm = () => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const submitHandler = (e) => { 
        e.preventDefault()
        if(!title.trim()) return
        
        dispatch(addTodo({id: Date.now(), title, completed:false}))
        setTitle("")
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default AddTodoForm