import React, { useState } from 'react';
import './App.css';
import { TTodoList, ITodo, TSelectedTodo, TAddTodo } from './types';
import TodoList from './TodoList';
import AddTodoForm from './TodoAdd';

function App() {
  const [items, setItems]= useState<TTodoList> ([]);
  const [count, setCount]= useState<number>(0);

  const checkTodo:TSelectedTodo=(selectedTodo:ITodo) => {

    const newTodos = items.map( item=> {
      
      if (item.id===selectedTodo.id)  {
        return {
          ...item,
          completed: !item.completed
        }        
      }
      return item;
    });    
    setItems(newTodos);
  }

  const addTodo:TAddTodo=(task:string) => {

    setCount(count+1);
    items.push({id:count, task:task,completed:false});  
    setItems(items);

  }

  const delTodo:TSelectedTodo=(selectedTodo:ITodo) => {

    const newItems=items.filter(item=>{
      return item.id!==selectedTodo.id;
    });

    setItems(newItems);
  }

  return (
    <div className="App">     
    <TodoList items={items}  delClick={delTodo} checkClick={checkTodo} />
    <AddTodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
