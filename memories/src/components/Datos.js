import React from 'react';
import './styles.css';


const Datos = ({props}) =>{
const {titulo} = props;
// o sino
//const titulo = props.titulo;

return(
    <div className= "datosCont"> 
        {titulo}
        Mis datos personales 
        Juan M Garcia
        Conectado 99/99/9999
    </div>);

};

export default Datos;