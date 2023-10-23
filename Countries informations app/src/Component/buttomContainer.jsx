import Table from "./table";
import Style from '../cssFile/buttom.module.css';


export default function ButtomContainer({countries}){
    return(
        <div className={Style.buttomContainer}>
            <Table countries={countries} />
        </div>
    )
}