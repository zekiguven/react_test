import React,{FC} from 'react';
import { ITodo, TSelectedTodo } from './types';

type TodoListItemProps={
    item: ITodo;
    checkClick:TSelectedTodo;
    delClick:TSelectedTodo;
}

const TodoListItem : FC<TodoListItemProps> =( {item, checkClick, delClick} ) => {
    return (
        <li key={item.id}> 
          <label> 
              <input type="checkbox" checked={item.completed} onChange={()=>checkClick(item)} ></input>
              {item.task} 
            </label>   
            <button onClick={()=>delClick(item)}>Sil</button>
        </li>
    )
}

export default TodoListItem;