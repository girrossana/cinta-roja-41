import React, { useState } from 'react';
import './Cards.css';
function Cards(props){
    const [propiedad, setPropiedad] = useState('¿me estas viendo?');
    function devuelvemeBoton(){
        if (propiedad=== '¿me estas viendo?'){
            return (<button onClick={()=>{setPropiedad('¿me estas mirando>,<?')}}  >sorpresa!</button>);
    
        }
        return(<button onClick={()=>{setPropiedad('¿me estas mirando>,<?')}}  >regresa el texto!</button>);
    }
    return(
        // <h1>Cards</h1>
        <div className ="contenedor is-orange">
            
            <h2>{props.titulo}</h2>
            <img src={props.img} width= "100%"/>
            <div className='cuerpoContenedor'>
                {props.texto}
                {propiedad}
            </div>
            <button onClick={()=>{setPropiedad('¿me estas mirando>,<?')}}  >sorpresa!</button>
        </div>
    );

}


export default Cards;

