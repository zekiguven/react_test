import { observable, action } from "mobx";
import { TAddTodo, TSelectedTodo, ITodo, TTodoList } from "./types";
import { createContext } from "react";
import 'mobx-react-lite/batchingForReactDom'

class TodoStore {
    @observable items: TTodoList = [];
    @observable count: number = 0 ;

    @action ToggleTodo: TSelectedTodo = (selectedTodo: ITodo) => {
        this.items = this.items.map(todo => {
          if (todo===selectedTodo) {
            return {
              id: todo.id,
              task: todo.task,
              completed: !todo.completed
            };
          }
          return todo;
        });
      };

    @action AddTodo: TAddTodo = (NewTodo:string) => {
        console.log("AddToDo => "+NewTodo);
        if (NewTodo.trim() !== "") {
          this.items.push({id:this.count, task: NewTodo, completed:false });
          this.count = this.count + 1;
        };
         
      }    

      @action DelTodo: TSelectedTodo = (selectedTodo: ITodo) => {    
        this.items = this.items.filter( todo => {
          if (todo!==selectedTodo) {
            return todo;
          } else {
            return false;
          }      
        });        
      };      
};

// Aşağıdaki gibide çağrılabiliyor, bu durumda context adı "TodoStore" oluyor. 
//export default createContext(new TodoStore());

const StoreContext= createContext(new TodoStore());
export default StoreContext;

