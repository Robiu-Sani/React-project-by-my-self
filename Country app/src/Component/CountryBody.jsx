import Cards from "./Cards";
import Style from '../cssFile/countryBody.module.css';
import { useState } from "react";
import { useEffect } from "react";
import Nav from "./Nav";

const url = 'https://restcountries.com/v3.1/all'

export default function CountryBody(){
    const [countries , setCountries] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [error , setError] = useState(null);
    const [filterCountry, setFilterCountry] = useState(countries)

    const fatchData = async (url) => {
        setIsLoading(true);

        try{
            const response = await fetch(url);
            const data = await response.json();
            setCountries(data);
            setFilterCountry(data);
            setIsLoading(false);
            setError(null);
        }catch(error){
            setIsLoading(false);
            setError(error);
        }
    }

    useEffect(() => {
        fatchData(url); 
    },[ ]);

    const onRemoveCountry = (name) => {
        const filter = filterCountry.filter((country) => country.name.common !== name );
        setFilterCountry(filter)
    } 
    
    const getSearchValow = (value) => {
        let searchName = value.toLowerCase();
        const newCountry = countries.filter((e) => {
            const countryName = e.name.common.toLowerCase();
            return countryName.startsWith(searchName);
        });
        setFilterCountry(newCountry)
    }

    return (
        <div>
            <Nav getSearchValow={getSearchValow}/>
        <div className={Style.countryContainer}>
            <h1 className={Style.header}>All Country </h1>
            {isLoading && <h1 style={{display:'flex',justifyContent:'center',alignItems:'center',color:'#fff',fontSize:'70px'}}>Loading...</h1>}
            {error && <h2>{error.message}</h2>}
            {countries && <Cards onRemoveCountry={onRemoveCountry}  countries={filterCountry} /> }
        </div>
        </div>
    )
}