import { Provider } from 'react-redux'
import store from './store'
import AddTodoForm from './features/todos/AddTodoForm';
import TodoList from './features/todos/TodoList';
 
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <AddTodoForm/>
        <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
