export interface ITodo {
    id:number;
    task:string;
    completed:boolean;
}

export type TTodoList= ITodo[];

// Completed check box ve Del butonu tıklandığında kullanılıyor.
export type TSelectedTodo=(selectedTodo:ITodo) => void;
export type TAddTodo=(task:string) => void;