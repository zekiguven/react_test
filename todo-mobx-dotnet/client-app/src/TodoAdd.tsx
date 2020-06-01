
import React,{ useState, FormEvent, ChangeEvent, useContext } from "react";
import TodoStore from './Store'

export const AddTodoForm: React.FC = () => {
    const todoStore = useContext(TodoStore);
    const { AddTodo } = todoStore;       
    const [newTask, setNewTask] = useState("");
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        AddTodo(newTask);        
        setNewTask("");
        
    }
    
    return (
        <form>
            <input id="inputAdd" type="text" value={newTask} onChange={handleChange}></input>
            <button id="buttonAdd" onClick={handleSubmit}  type="submit" >Ekle</button>
        </form>    
    )
};

export default AddTodoForm;