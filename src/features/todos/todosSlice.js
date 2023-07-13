import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
    name: "todos",
    initialState: {
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload)
            if(index !== -1){
                state.todos.splice(index, 1)
            }
        }
    }
})

export const {
    addTodo, 
    toggleTodo, 
    deleteTodo
} = todosSlice.actions

export default todosSlice.reducer