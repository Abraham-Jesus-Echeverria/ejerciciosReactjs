import React,{useEffect} from "react";  
import { useFetch } from "./CustomeHook/useFetch";


const Text = ({children}) => <p className="text-center">{children.name}</p>; 

export default function Peticion (){     
    const  url = 'https://jsonplaceholder.typicode.com/users'; 
    const {data, isError, error} = useFetch(url);    
    console.log(isError, error); 
    return( 
        <>
        {
            (data.length === 0 || isError) ? <p className="text-center">{isError?`${error.status} ${error.statusText ||'Lo sentimos ha ocurrido un error...'}`:'cargando...'}</p>:  data.map((user, index)=><Text key={index}>{user}</Text>) 

        }
        </>
    ); 
}