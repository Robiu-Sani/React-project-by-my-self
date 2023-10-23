import Footer from './Footer';
import Style from '../cssFile/main.module.css';
import CountryBody from "./CountryBody";

export default function Main(){

    return(
        <div className={Style.container}>
            <CountryBody/>
            <Footer />
        </div>
    )
}