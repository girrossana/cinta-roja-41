import React, { useState } from 'react';
import './Presentacion.css'
function Presentacion(props) {
    const [propiedad, setPropiedad] = useState(' Nombre y Apellido');
    // function devuelveBoton() {
    //     if ( propiedad === 'este es tu Nombre y Apellido') {
    //        return(<button onClick={() => {
    //            setPropiedad('ok')
    //         }}>ok!</button>);
    //      }
    //     return(<button onClick={() => {
    //         setPropiedad('si es erroneo...tu')
    //     }}>deberias volver a llenar el formulario!</button>); 
    // }
    return(
        <div className="presentation is-orange">
            
            <h2>{props.titulo}</h2>
            <img  src={props.img} width="60%"/>
            <div className="medidasMyPresentacion">
                {props.texto}
            </div>
            <h4>{propiedad}</h4>
                {
                propiedad === ' Nombre y Apellido'
                ? <button className="red" onClick={() => {
                    setPropiedad('si son erroneo...tu')
                }}>ok!</button> 
                : <button className="pink" onClick={() => {
                    setPropiedad('gracias por intentarlo')
                }}>deberias volver a llenar el formulario!</button>
                }
        </div>
    );
}


export default Presentacion;