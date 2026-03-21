import { useContext,createContext } from "react";
export const Todo=createContext({
    todo:[{
        id: 1,
        todo:"TodoMessge",
        completed:false,  
    }

    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:(id)=>{}

})
export const useTodo=()=>{
    return useContext(TodoContext);
}
export const TodoProvider=Todocontext.Provider;