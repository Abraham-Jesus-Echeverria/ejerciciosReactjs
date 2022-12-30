import React,{useState, useEffect} from "react";  

// __________________________Componente Card____________________________________

function Card({dataApi}){  
    const [dataCard, setDataCard] = useState([]); 

    useEffect(()=>{  
        const getPokemonsData = async () =>{ 
            let res = await fetch(dataApi.url); 
            let json = await res.json();    
            let pokemon = { 
                name: json.name, 
                imagen: json.sprites.front_default
            }
            setDataCard(pokemon); 
        }
        getPokemonsData(); 
    }, [dataApi.url]);  
    return( 
        <>   
        <div className="card col-3 m-3 bg-secondary "> 
            <div className="card-header">  
                <h2 className="card-title">{dataCard.name}</h2>
            </div>
            <div className="card-body">  
                <img src={dataCard.imagen} alt="" />
            </div>
        </div>
        </>
    );
}  

// este componente debe estar en una archivo aparte pero por motivos practicos lo pondremos en un mismo archivo
// ________________________________________________________________________________

// en este componente lo que estamos haciendo es una peticion a la API de pokemon 
export default function PeticionAjaxFunciones (){  
    const [data, setData] = useState([]); 
    useEffect(()=>{  
        const getData = async () => { 
            let res = await fetch("https://pokeapi.co/api/v2/pokemon/");  
            let json = await res.json(); 
            json.results.forEach(pok => {
                setData((data)=>[...data, pok]); 
            });
        } 
        getData();
    },[]);  
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            {data.length === 0 ? (<h2>Cargando...</h2>):(data.map((Pokemons, index) => (<Card key={index} dataApi={Pokemons} />)))};
          </div>
        </div>
      </>
    );
}