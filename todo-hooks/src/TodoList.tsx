import React,{ FC } from "react";
import TodoListItem from "./TodoListItem";
import { TTodoList, TSelectedTodo } from "./types";

type TodoListProps={
    items: TTodoList;
    checkClick:TSelectedTodo;
    delClick:TSelectedTodo;
}

const TodoList:FC<TodoListProps>=({items, checkClick, delClick}) => {
    return(
        <ul key="listTodo">
            {items.map( (item) => (
                <TodoListItem key={item.id} item={item} delClick={delClick} checkClick={checkClick} />
                )
            )}
            
        </ul>
    );

}

export default TodoList;