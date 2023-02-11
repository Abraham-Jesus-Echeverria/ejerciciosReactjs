import React,{ useRef } from "react"; 

export default function UsoRef () { 
    let RefButton = useRef(); 
    let RefH2 = useRef();  

    const eventButton = () => { 
        if(RefButton.current.textContent === "Presiona1"){ 
            RefH2.current.textContent="he cambiado mi contenido"; 
        }
    }


    return( 
        <>  
        <h2 ref={RefH2}>Hola como estas</h2> 
        <button ref={RefButton} onClick={eventButton}>Presiona1</button>
        </>
    )
}