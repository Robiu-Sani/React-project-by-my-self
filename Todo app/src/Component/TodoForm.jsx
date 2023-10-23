import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import Style from '../cssFile/todoForm.module.css';

export default function TodoForm({getTodo}){

    const [titleValue , setTitleValue] = useState('');
    const [description, setDescription] = useState('');
    
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.type == 'text') {
            setTitleValue(e.target.value);
        }if (e.target.type == 'textarea') {
            setDescription(e.target.value)
        }

    }

    const submitHandle = (e) => {
        e.preventDefault()
        getTodo({
            title : titleValue,
            desc : description,
            id : uuidv4(),
            date,
            time,
        })
        setTitleValue('')
        setDescription('')
    }

    return(
        <div className={Style.formBody}>
        <form action="" onSubmit={submitHandle}>
            <h1>Write Here</h1>
            <div className={Style.title}>
                <label>Title : </label>
                <input value={titleValue} onChange={handleChange} type="text" required/>
            </div>
            <div className={Style.description}>
                <label>Description : </label>
                <textarea value={description} onChange={handleChange} required ></textarea>
            </div>
            <input className={Style.submit} type="submit" value="Add a note" />
        </form>
    </div>
    )
}