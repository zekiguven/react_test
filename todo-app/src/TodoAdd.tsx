
import { TAddTodo } from "./types";
import React,{ useState, FormEvent, ChangeEvent } from "react";

export type AddTodoFormProps = { 
    addTodo: TAddTodo 
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [newTask, setNewTask] = useState("");
    
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTask);        
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