import {createSlice,nanoid} from '@reduxjs/toolkit';
const loadState = () => {
  try {
    const data = localStorage.getItem("todos");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
const initialState={
    todos: loadState().length > 0 ? loadState() : [{id:1,text:"Hello World"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(), 
                text:action.payload
            }
            state.todos.push(todo);
            
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)

        },
        updateTodo:(state,action)=>{
            const{id,text}=action.payload;
            const todo=state.todos.find((t)=>t.id===id);
            if (todo){
                todo.text=text;
            }
        }
        
    }
})
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer