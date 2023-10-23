import Nav from "./Nav";
import TodoBody from "./TodoBody";
import Footer from './Footer';
import Style from '../cssFile/main.module.css';

export default function Main(){
    return(
        <div className={Style.container}>
            <Nav />
            <TodoBody />
            <Footer />
        </div>
    )
}