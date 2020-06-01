import { observable, action, computed, runInAction } from "mobx";
import { TAddTodo, TSelectedTodo, ITodo, TTodoList } from "./types";
import { createContext } from "react";
import 'mobx-react-lite/batchingForReactDom'
import  Todos  from "./Api";


class TodoStore {
    @observable items: TTodoList = [];
    @observable count: number = 0 ;
    loadingInitial: boolean=false;

    constructor () {     
      this.loadTodos();
    }

    @computed get axiosParams() {
      const params = new URLSearchParams();
      return params;
    }

    @action loadTodos = async () => {
      this.loadingInitial = true;
      try {
        this.items = await Todos.list(this.axiosParams);
        runInAction('loading todos', () => {
          this.loadingInitial = false;
        });
      } catch (error) {
        runInAction('load todos error', () => {
          this.loadingInitial = false;
        });
      }
    };    

    @action AddTodo: TAddTodo =  async (NewTodo:string) => {
      console.log("AddToDo => "+NewTodo);
      if (NewTodo.trim() !== "") {
        const item= await Todos.create({id: 0, task: NewTodo, completed:false });                 
        console.log(" AddToDo -> create : " +item);        
        //if (item!=undefined) {
          this.items.push(item);
        //};
      };
       
    }       

    @action ToggleTodo: TSelectedTodo = async (selectedTodo: ITodo) => {
        
        let cpyTodo = {...selectedTodo};
        cpyTodo.completed= !cpyTodo.completed;
        const item = await Todos.update(cpyTodo);
        console.log("ToggleTodo: ");
        console.log(item);        
        //if (item!=undefined) {
          this.items = this.items.map(todo => {
            if (todo===selectedTodo) {
              selectedTodo.completed= !selectedTodo.completed;
              return selectedTodo;
            }
            
            return todo;
          });
        //}
      };

      @action DelTodo: TSelectedTodo = async (selectedTodo: ITodo) => { 
       const item= await Todos.delete(selectedTodo.id.toString());
       console.log("DelTodo: ");
       console.log(item);

       //if (item!=undefined) {
        this.items = this.items.filter( todo => {
          if (todo.id!==item.id) {
            return todo;
          } else {
            return false;
          }      
        }); 

       //} 
                                   
      };              
};

// Aşağıdaki gibide çağrılabiliyor, bu durumda context adı "TodoStore" oluyor. 
//export default createContext(new TodoStore());

const StoreContext= createContext(new TodoStore());
export default StoreContext;

