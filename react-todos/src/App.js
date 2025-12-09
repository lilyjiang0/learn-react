import './App.css';
import TodoTable from './components/TodoTable';
import React, {useState} from 'react'
import NewTodoForm from './components/NewTodoForm';

function App() {
  // todos - state variable, setTodos can change todo and re-render application.
  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'Anna'},
    {rowNumber: 2, rowDesc: 'Feed kitty', rowAssigned: 'Elsa'},
    {rowNumber: 3, rowDesc: 'Exercise', rowAssigned: 'Elsa'},
    {rowNumber: 4, rowDesc: 'Clean room', rowAssigned: 'Eric'}
  ]
  ) 

  // Onclick function.
  // Pass in description and assigned value.
  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    
    if (todos.length > 0) {
      rowNumber = todos[todos.length -1].rowNumber + 1
    } else {
      rowNumber = 1;
    }
    const newTodo = {
        rowNumber: rowNumber, 
        rowDesc: description, 
        rowAssigned: assigned
      };
      setTodos(todos => [...todos, newTodo]);
    
  }

  const deleteTodo = (deleteTodoRowNum) => {
    let filtered = todos.filter(function(value) {
      return value.rowNumber != deleteTodoRowNum
    });
    
    setTodos(filtered);
    
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} deleteTodo={deleteTodo}></TodoTable>
          <button className='btn btn-primary'>
            Add new todo
          </button>
          <NewTodoForm addTodo={addTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
