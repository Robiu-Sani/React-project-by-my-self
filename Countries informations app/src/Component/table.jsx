import Style from '../cssFile/table.module.css';
import {v4 as uuidv4} from 'uuid';
import TableRow from './tableRow';


export default function Table({countries}){

    return(
        <div className={Style.table}>
                <table>
                    <tbody>
                        <tr className={Style.htr}>
                            <td>Flag</td>
                            <td>Name</td>
                            <td>Capitle</td>
                            <td>Area</td>
                            <td>Population</td>
                        </tr>
                        {countries.map((country) => {
                            const newCountry = {
                                country,
                                id : uuidv4(),
                            }
                            return <TableRow key={newCountry.id} newCountry={newCountry}/>
                        })}
                    </tbody>
                </table>
            </div>
    )
}