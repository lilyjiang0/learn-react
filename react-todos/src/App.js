import './App.css';
import TodoTable from './components/TodoTable';

function App() {
  const todos = [
    {rowNumber: 1, rowDesc: 'Feed puppy', rowAssigned: 'Anna'},
    {rowNumber: 2, rowDesc: 'Feed kitty', rowAssigned: 'Elsa'},
    {rowNumber: 3, rowDesc: 'Exercise', rowAssigned: 'Elsa'},
    {rowNumber: 4, rowDesc: 'Clean room', rowAssigned: 'Eric'}
  ]

  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1, 
        rowDesc: 'New Todo', 
        rowAssigned: 'User'
      };
      todos.push(newTodo);
      console.log(todos);
    }
  }

  return (
    <div className='mt-5 container'>
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos}></TodoTable>
          <button className='btn btn-primary' onClick={addTodo}>
            Add new todo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
