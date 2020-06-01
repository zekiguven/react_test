import React from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './TodoAdd';

function App() {

  return (
    <div className="App">     
    <TodoList />
    <AddTodoForm />
    </div>
  );
}

export default App;
