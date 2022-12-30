import React from "react";   
import { useParams } from "react-router-dom";
import { BrowserRouter as Router,Route,Switch,NavLink } from "react-router-dom";  
import RutaUseParamsXD from "./componentes/useParamsComponent"; 
import QueryParamsXD from "./componentes/queryParams";





// ------------------------creando componente navBar---------------------------------   

export function Barra(){ 
    return( 
        <>  
        <nav> 
            <ul> 
                <li><NavLink exact to="/" activeClassName="text-success">Home</NavLink></li>
                <li><NavLink exact to="/Contactos" activeClassName="text-success">Contactos</NavLink></li>
                <li><NavLink exact to="/Proyectos" activeClassName="text-success">Proyectos</NavLink></li> 
                <li><NavLink exact to="/usuario/Abraham/Ing.Mecatronico" activeClassName="text-success">Mi perfil</NavLink></li> 
                <li><NavLink exact to="/queryParams" activeClassName="text-success">queryParams</NavLink></li>
            </ul>
        </nav> 
        </>
    ); 
}



// ---------------------------------------------------------------------------------

export function RutasXD({}){ 
    return ( 
        <> 
        <div> 
          <Router> 
            <Barra /> 
            <Switch> 
                <Route exact path="/" children={<h2>Home</h2>} />  
                <Route exact path="/Contactos" children={<h2>Contactos</h2>} /> 
                <Route exact path="/Proyectos" children={<h2>Proyectos</h2>} />  
                <Route exact path="/usuario/:username/:puesto" component={RutaUseParamsXD}/> 
                <Route exact path="/queryParams" component={QueryParamsXD}/>
                <Route path="*" children={<><h2>lo sentimos ha ocurrido un error</h2> <p className="h1">Error 404 not found</p></>} />
                
            </Switch>
          </Router>
        </div>
        </>
    )
}