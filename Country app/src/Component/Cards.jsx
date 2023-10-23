import Card from "./Card";
import Style from '../cssFile/cards.module.css';
import {v4 as uuidv4} from 'uuid';

export default function Cards({countries, onRemoveCountry}){
    return(
        <div className={Style.cardsBody}>
            {countries.map((country) => {
                const newCountry = {
                    country,
                    id : uuidv4(),
                }
                return <Card onRemoveCountry={onRemoveCountry} newCountry={newCountry} key={newCountry.id} />
            })}
        </div>
    )
}