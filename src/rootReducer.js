import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from './features/todos/todosSlice'

const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer
