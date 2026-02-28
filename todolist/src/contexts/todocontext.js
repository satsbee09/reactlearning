import { useContext,createContext } from "react";
export const Todo=createContext({
    todo:[{
        id: 1,
        todo:"TodoMessge",
        completed:false,  
    }

    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:(id)=>{}

})
export const useTodo=()=>{
    return useContext(TodoContext);
}
export const Todoprovider=Todocontext.Provider;