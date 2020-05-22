import React,{ FC, useContext } from "react";
import TodoListItem from "./TodoListItem";
import { observer } from "mobx-react";
import  TodoContext  from "./Store";



const TodoList:FC=() => {
    const todoContext = useContext(TodoContext);
    const { items, ToggleTodo, DelTodo } = todoContext;

    return(
        <ul key="listTodo">
            {items.map( (item) => (
                <TodoListItem key={item.id} item={item} delClick={DelTodo} checkClick={ToggleTodo} />
                )
            )}
            
        </ul>
    );

}

export default observer(TodoList);