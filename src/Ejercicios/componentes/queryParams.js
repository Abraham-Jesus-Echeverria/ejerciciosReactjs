import React from "react"; 
import { useLocation, useHistory } from "react-router-dom"; 

// http://localhost:3000/queryParams?value1=0&value2=15
export default function QueryParamsXD(){ 
    const location = useLocation();   
    const history = useHistory(); 
    const query = new URLSearchParams(location.search); 
    const valor1 = query.get("value1"); 
    const valor2 = query.get("value2"); 
    const valor3 = query.get("value3") || "valor por defecto";  

    const handleButton = () =>{ 
        query.set("value1", "segundoValor1"); 
        query.set("value2", "segundoValor2");  
        query.set("value3", "segundoValor3"); 
        history.push({search: query.toString()}); 
    } 

    const handlePaginacion = () => {  
        query.set("value1", parseInt(valor1)+parseInt(valor2)); 
        history.push({search: query.toString()}); 

    }
    return( 
        <>
        <h2>Ruta query XD</h2>
        <p>este es el valor 1 <span className="h5">{valor1}</span></p>
        <p>este es el valor 2 <span className="h5">{valor2}</span></p> 
        <p>este es el valor 3 <span className="h5">{valor3}</span></p> 
        <button onClick={handleButton}>presiona XD</button> 

        <div className="border border-2 border-success"> 
            <h2> paginacion ejemplo </h2> 
            <p>valorlimite = <span className="h5">{valor1}</span></p> 
            <p>pagina = <span className="h5">{valor2}</span></p> 
            <button onClick={handlePaginacion}>next</button>
        </div>
        </>
    )
}