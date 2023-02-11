import React,{useState} from "react";  

// _________________custom Hook para el funcionamiento del form______________________

function useForm (initialState, validateForm) {
    const[Inputs, setForm] = useState(initialState); 
    const[error, setError] = useState({
        errorInitial: true
    }); 

    const handleChange = (e) =>{  
        const{name, value} = e.target; 
        setForm({ 
            ...Inputs,   
            [name]: value

        });  
    }  
    const handleBlur = (e) =>{ 
        handleChange(e);  
        setError(validateForm(Inputs));
    } 

    const handleSubmit = async (e) => { 
        e.preventDefault();  
        setError( validateForm(Inputs)); 
        
        if(Object.keys(error).length === 0){ 
           alert("se ha enviado el formulario"); 
           console.log(error); 
        } else{ 
            alert("lo sentimos ha ocurrido un error"); 
            console.log(error); 
        }
        // si el objeto de errores viene bacio entonces podemos enviar el formulario 
    } 

    return { 
        Inputs, 
        error, 
        handleChange, 
        handleBlur, 
        handleSubmit
    }
}

// _____________________________________________________________________________________ 

export default function ValidacionFormXD(){  
    let initialState = { 
        name: "", 
        email: "", 
        asunto: "", 
        comentarios: "", 
    }
    const validateForm = (Inputs) =>{ 
        let errores = {};  
        let RegexNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/; 
        let RegexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; 
        let RegexComments = /^.{1,255}$/; 


        if(!Inputs.name.trim()){ 
            errores.name = "el campo nombre es solicitado"; 
        }else if(!RegexNombre.test(Inputs.name.trim())){ 
            errores.name = "solo puedes escribir letras y espacios"; 
        }   

        // si el input viene vacio entonces se cumple la primera condicion por lo cual se ingresa un valor al objeto de errores, pero si se cumple la segunda condicion que es que el contenido del imput no coincida con la expresion regualar entonces, se genera el segundo error, siempre y cuando haya un error en el objeto no se podra enviar el formulario. 

        if(!Inputs.email.trim()){ 
            errores.email = "el campo email es solicitado"; 
        }else if (!RegexEmail.test(Inputs.email.trim())){ 
            errores.email = "escribe un email que sea valido"; 
        } 

        if(!Inputs.asunto.trim()){ 
            errores.asunto = "el campo asunto es requerido"; 
        } 

        if(!Inputs.comentarios.trim()){ 
            errores.comentarios = "el campo comentarios es requerido"; 
        }else if (!RegexComments.test(Inputs.comentarios.trim())){ 
            errores.comentarios = "no puedes ingresar mas de 255 caracteres"; 
        }

        return errores; 
    }
    const {Inputs, error, handleChange, handleBlur, handleSubmit} = useForm(initialState, validateForm); 
    return( 
        <>  
        <form onSubmit={handleSubmit}>
            <div className="form-group"> 
                <label htmlFor="nombre" className="form-label">Ingresa tu nombre</label> 
                <input  
                className="form-control"
                 type="text" 
                 id="nombre" 
                 name="name"  
                 value={Inputs.name}
                 onChange={handleChange} 
                 onBlur={handleBlur} />
            </div>  

            { 
            error.name && <p style={{color: "red"}}>{error.name}</p>
            }

            <div className="form-group"> 
                <label htmlFor="correo" className="form-label">Ingresa tu correo electronico</label> 
                <input  
                className="form-control"
                 type="text" 
                 id="correo" 
                 name="email" 
                 value={Inputs.email} 
                 onChange={handleChange} 
                 onBlur={handleBlur} />
            </div>  

            { 
            error.email && <p style={{color: "red"}}>{error.email}</p>
            }

            <div className="form-group"> 
                <label htmlFor="asunto" className="form-label">Ingresa el asunto</label> 
                <input  
                className="form-control"
                 type="text" 
                 id="asunto" 
                 name="asunto" 
                 value={Inputs.asunto} 
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 />
            </div> 
            { 
            error.asunto && <p style={{color: "red"}}>{error.asunto}</p>
            }
            <div className="form-group"> 
                <label htmlFor="coments" className="form-label">Ingresa tus comentarios</label> 
                <input   
                className="form-control"
                 type="text"   
                 id="coments" 
                 name="comentarios" 
                 value={Inputs.value}
                 style={{resize: "nobne"}} 
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 />
            </div> 
            { 
            error.comentarios && <p style={{color: "red"}}>{error.comentarios}</p>
            } 

            <button>enviar</button>
        </form>
        </>
    )
}