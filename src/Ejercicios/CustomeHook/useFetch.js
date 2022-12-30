import React, {useEffect, useState} from "react"; 

export function useFetch(url) { 
    const [data, setData] = useState([]);    
    const [isError, setIsError] = useState(false); 
    const [error, setError] = useState(null); 

    useEffect(()=>{ 
       async function getData(url){ 
        try { 
            let res = await fetch(url); 
            let dataJson = await res.json(); 

            if (!res.ok){  
                const CustomError = { 
                    status: res.status, 
                    statusText: res.statusText
                }  
                throw CustomError; 
            } 
            // validamos y generamos nuestro error personalizado  generamos un objeto que enviaremos al catch, algo que es importante mencionar es que no podemos enviar directamente un objeto anonimo con el trow hacia al catch ya que esto se considera una mala practica, por lo cual primero declaramos el objeto y luego lo enviamos al trow
            setData(dataJson); 
            setIsError(false);  
        }catch(err){  
            setIsError(true); 
            setError(err) ; 
        }
       }
       getData(url); 
    },[url]); 

    return { 
        data, 
        isError,
        error, 

    }
}