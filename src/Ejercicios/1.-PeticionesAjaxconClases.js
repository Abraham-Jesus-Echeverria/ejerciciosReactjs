import React, {Component} from "react";  

// ________________________________Componente Card__________________________
function Card ({data}){ 
    return( 
        <> 
        <div className="card col-3 m-3 bg-secondary">  
            <div className="card-header text-center"><h2>{data.nombre}</h2></div> 
            <div className="card-body d-flex justify-content-center"><img src={data.imagen} alt="" /></div>
        </div>
        
        </>
    ); 
} 

// este componente debe estar en una pagina aparte, pero por metodos practicos y para separar los temas los ponemos dentro dela misma pagina. 
// le pasamos como propiedad el estado data que almacena los datos de la API y accedemos a las propiedades a traves de la nomenclatura del punto.
// ___________________________________________________________________________

export default class PeticionesAjaxClases extends Component{  
    constructor(props){  
        super(props)
        this.state={ 
            data: [], 
        }  
    } 
    componentDidMount(){    
        this.setState({ 
            data: []
        });   
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res1 => res1.json())
        .then(json1 =>{  
        // recorremos el array que nos devuelve los resultados y por cada pokemon hacemos una peticion ajax que nos devolvera toda la informacion acerca del pokemon, podremos usar los datos a traves de la nomenclatura del punto.
            json1.results.forEach(pok => {
                fetch(pok.url) 
                .then(res => res.json())
                .then(json => {  
                    let pokemon = { 
                        id: json.id, 
                        nombre: json.name,  
                        imagen: json.sprites.front_default 
                    } 
                    // creamos un objeto para guardar la informacion que vayamos a utilizar,  
                    // podemos inyectar directamente el json dentro del array, pero esto nos devolveria todos los datos del pokemon y haria mas lenta la carga
                    this.setState((state)=>{ 
                        return { 
                            data: [...state.data, pokemon] 
                        }
                    });  
                    // utilizamos una callback para controlar la asincronia de la peticion fetch en el estado, esta callback recive como argumento el estado, de lo contrario el array del estado no se llenara con los datos adecuadamente ya que un estado no trabaja asincronamente. 

                })
            });
        })
    } 
    render(){ 
        return( 
            <>   
            <div className="container-fluid">  
                <div className="row justify-content-center p1">  
                {   
                this.state.data.length === 0 ? (<h2 className="vh-100">Cargando...</h2>): this.state.data.map(pokemons =><Card key={pokemons.id} data={pokemons} />)
                // utilizamos renderizado condicional, la expresion en cuestion da true entonces se renderiza cargando si nos da false se renderizan las cards, esto es porque primero se renderizan los componentes y luego se hace la peticion, por lo cual nuestros componentes estaran vacios, y no queremos esto, para ello se hace un louder que diga cargando.. 
                }  
                </div>
            </div>
            </>
        )
    }
}