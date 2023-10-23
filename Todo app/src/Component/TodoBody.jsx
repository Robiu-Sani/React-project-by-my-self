import { useState } from 'react';
import Style from '../cssFile/todoBody.module.css';
import TodoForm from './TodoForm';
import Todos from './Todos';


    const alltodo = [];

export default function TodoBody(){

    const [todos, setTodos] = useState(alltodo);

    const getTodo = (get) => {
        setTodos([...todos , get])
    }

    const handleRemoveTodo = (id) =>{
        const getId = todos.filter((todo) => todo.id !== id)
        setTodos(getId)
    }
    

    return(
        <div className={Style.mainBody}>
            <TodoForm getTodo={getTodo}/>
            <Todos getitem={todos} onremove={handleRemoveTodo}/>
        </div>
    )
}