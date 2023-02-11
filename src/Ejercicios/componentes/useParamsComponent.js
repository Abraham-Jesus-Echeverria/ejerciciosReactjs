import React from "react"; 
import { useParams } from "react-router-dom";

export default function RutaUseParamsXD () {  
    
    let {username, puesto} = useParams(); 
    return( 
        <> 
        <h2>esto es el componente useParams XD</h2> 
        <p className="h2">Hola soy <span className="text-warning">{username}</span> y soy <span className="text-info">{puesto}</span></p>
        </>
    )
}