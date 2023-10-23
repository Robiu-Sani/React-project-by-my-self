import Style from '../cssFile/todos.module.css';
import Todo from './Todo';

export default function Todos({getitem ,onremove}){
    return(
        <div className={Style.TodoItems}>
            {getitem.map((data) => <Todo data={data} key={data.id} onremove={onremove}/>)}
        </div>
    )
}