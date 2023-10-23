import Style from '../cssFile/todo.module.css';

export default function Todo(props){
    const {id, title, desc ,date , time} = props.data
    const {onremove} = props
    const handleClick = (id) => {
        onremove(id)
    }
    return(
        <>
                <div className={Style.TodoItem}>
                    <div className={Style.datetime}>
                        <small>{time}</small>
                        <small>{date}</small>
                    </div>
                    <div className={Style.center}>
                        <h3 className={Style.todotitle}>{title}</h3>
                        <p className={Style.tododescription}>{desc}</p>
                    </div>
                    <div className={Style.buttoniv}>
                        {/* <button >Edite</button> */}
                        <snap></snap>
                        <button onClick={() =>{handleClick(id)}}>Delete <i className='fa fa-trash'></i></button>
                    </div>
                </div>
        </>
    )
}