import React from 'react';
import ReactDOM from 'react-dom/client';  
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
 
import PeticionesAjaxClases from './Ejercicios/1.-PeticionesAjaxconClases';  
import PeticionAjaxFunciones from './Ejercicios/2.-peticionesAjaxFunciones'; 
import Peticion from './Ejercicios/3.-customeHooksEjemplo'; 
import UsoRef from './Ejercicios/4.-referencias'; 
import Formularios from './Ejercicios/5.-formulario';
import FormOneState from './Ejercicios/6.-formulario-con-una-sola-bariable-estado'; 
import ValidacionFormXD from './Ejercicios/7.-formulario-validacion';
import { RutasXD } from './Ejercicios/8.-react-router-navBar'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  // __________________________________peticiones Ajax____________________________ 
  <>  
  {/* <h2 className='text-center'>Peticiones Ajax con clases</h2>
    <PeticionesAjaxClases /> 
  <br /> 

  <h2 className='text-center'>Peticiones Ajax con hooks y funciones</h2>  
  <PeticionAjaxFunciones /> 
  <br />  

  <h2 className='text-center'>Custome Hooks</h2> 
  <Peticion />  *
  <br /> 

  <h2 className='text-center'> uso de referencias</h2>
  <UsoRef />
  <br />  

  <h2 className='text-center'> usode formularios en react</h2>  
  <div className='container'>  
  <Formularios /> 
  </div> 
  <br /> 

  <h2 className='text-center'> uso de formularios controlados con una sola variable de estado</h2> 
  <div className='container'> 
  <FormOneState />
  </div>
  <br /> 

  <h2 className='text-center'> validacion formularios </h2> 
  <div className='container'> 
  <ValidacionFormXD />
  </div>     */}

   <h2>Rutas xD</h2> 
  <RutasXD /> 
  </> 
);

