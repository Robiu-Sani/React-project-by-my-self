// import profile from '../image/profile.jpg'
import Style from '../cssFile/card.module.css';
export default function Card({newCountry, onRemoveCountry}){
    const {country } = newCountry
    const {name , flags, capital, population , area} =country
    const countryname = name.common
    const removeCountry = (countryname) => {
        onRemoveCountry(countryname)
    }

    return (
        <>
            <div  className={Style.card}>
                <img src={flags.png} alt={countryname} />
                <h1>name : {countryname}</h1>
                <p>populations : {population}</p>
                <p>capitle : {capital}</p>
                <p>area : {area}</p>
                <button onClick={() => removeCountry(name.common)}> click for remove </button>
            </div>




        
        </>
    )
} 