import Style from '../cssFile/table.module.css'

export default function TableRow({newCountry}){
    
    const {name , flags, capital, population , area} =newCountry.country

    return(
        <tr className={Style.tr}>
            <td><img className={Style.imgFlag} src={flags.png} alt={name.common} /></td>
            <td>{name.common}</td>
            <td>{capital}</td>
            <td>{area} k.m</td>
            <td>{population}</td>
        </tr>
    )
}