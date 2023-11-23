import { createContext, useState } from "react";
const TodoContext = createContext();

export default TodoContext;
export const TodoProvider = (props) => {
    const [availableTodo, setavailableTodo] = useState([]);
    const [tempTodo,settempTodo]= useState({});
    const addTomainArray =(d)=>
    {
        setavailableTodo([...availableTodo,d]);
        
        console.log(JSON.stringify(availableTodo));
    }
    return (
        <TodoContext.Provider
            value={{
                availableTodo, setavailableTodo,
                tempTodo,settempTodo, addTomainArray
            }}>
            {props.children}
        </TodoContext.Provider>
    )
}