import React, {useEffect, useState} from 'react';
import api from "./Api"
import Card from './Card';


const GetResponse = () => {
const [movies, setMovies] = useState({})
    const GetProductsSetup = () => {
        return api().then(
            res =>  {
                console.log(res);
                if(res.code===400){
                    console.log('err')
                }
                return setMovies(res)
            }
        )
    }
    useEffect(()=>{
        GetProductsSetup()
    },[])

    useEffect(()=>{
       console.log(movies.results, 'movie')
    },[movies])

    return (
        <div>
         <p>Dejan</p>
        {movies !== undefined && movies !== {} && movies !== null && Object.keys(movies).length !== 0 ? movies.results.map((keyCat)=>(
       <Card title = {keyCat.original_title}/>
        )):null}   
            
        </div>
    )
}
export default GetResponse;