import React, { useState, useEffect } from 'react';
import './Search.css';
import Cards from './components/cards/Cards';
import Presentacion from './components/Presentacion/Presentacion';
import axios from 'axios';


function Search(props) {

    const [texto,SetTexto]= useState('');
    const [gifs,SetGifs]= useState([]);
    const API_KEY = 'QOVVkaNNMdTWYJzrFX8ca683VqkCHxW0';
    const obtenerGifs =() =>{
        axios.get('http://api.giphy.com/v1/gifs/search?q=${texto}&api_key=${API_KEY}&limit=5')
        .then(({data})=>{
        console.log(data.data);
        })
        .catch((err)=>console.log(err));


    }



    const handleChange = (event)=>{
        // console.log('esta cambiando el input', event.target.value)
        SetTexto(event.target.value);
        console.log(texto);
    };

    useEffect(()=>{
        console.log('hubo un cambio');
    },[texto]);



    return(<>
        <div style= {{display:'flex', alignItems:'center', flexdirection:'column'}}>
            <label>Buscador</label>
            <input type="text" placeholder="Escriba su Texto" onChange={handleChange}/>
            
        </div>
        <div className="misCards">
            <div>{gifs.map((elemento)=>{
                const gift = {
                    id: elemento.id,
                    origin: elemento.source_post_url,
                    titulo: elemento.title,
                    img: elemento.images.dwonsized_large.url 
                }
                return <Cards key= {gift.id} titulo={gift.titulo} img ={gift.img} texto={gift.origin}/>, <Presentacion key= {gift.id} titulo={gift.titulo} img ={gift.img} texto={gift.origin}></Presentacion>
            })}

            </div>
            {/* <Cards />
            <Cards  titulo="Card" img="" texto="valor dentro de la card"/>
            <Cards  titulo="Card" img ="" texto="valor dentro de la card"/>
            <Presentacion titulo= 'hola' img="" texto='estos son tus datos'></Presentacion> */}
        </div>

    </>);



}
 export default Search;