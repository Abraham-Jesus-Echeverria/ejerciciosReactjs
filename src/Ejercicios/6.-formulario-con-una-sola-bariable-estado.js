import React,{useState} from "react"; 

export default function FormOneState () {  

    const [Form, setForm] = useState({}); 

    const handleOnChange = (e) => { 
        setForm({ 
            ...Form, 
            [e.target.name]: e.target.value, 
        });
    }  

    // destructuramos el formulario, que como bien sabemos el formulario es un objeto, por lo cual los valores del objeto, van a ser el name, que estamos destructurando dentro del objeto con la siguiente sintaxis [e.target.name] y tomara como atributo el valor del imput al cual corresponde, el cual es e.target.value, y como estamos haciendo uso del spread operation, los valores no se sobreescriben, si no que se van almacenando dentro del objeto.

    const handleOnChecked = (e) => { 
        setForm({ 
            ...Form, 
            [e.target.name]: e.target.checked, 
        });
    } 

    /* en esta funcion lo que hacemos es almacenar el balor booleano del checked dentro de nuestra variable de estado, por lo cual  */

    console.log(Form.Nombre); 
    return (
      <>
        <form action="">
          {/* inputs tipo texto */}
          <div className="form-group">
            <label htmlFor="" className="form-label"></label>
            <input type="text" className="form-control" name="Nombre" value={Form.name} onChange={handleOnChange}/>
          </div>
          {/* inputs tipo radio  */}
          <div className="form-check">
            <label htmlFor="option1">option1</label>
            <input
              type="radio"
              name="option1"
              id="option1" 
              value="option1"
              className="form-check-input"
              onChange={handleOnChange}
            />
          </div>

          <div className="form-check">
            <label htmlFor="option1">option2</label>
            <input
              type="radio"
              name="option2"
              id="option1"
              value="option2"
              className="form-check-input" 
              onChange={handleOnChange}
            />
          </div>

          <div className="form-check">
            <label htmlFor="option3">option1</label>
            <input
              type="radio"
              name="option1"
              id="option3" 
              value="option3"
              className="form-check-input"
              onChange={handleOnChange}
            />
          </div>
          {/* inputs tipo select */}

          <select name="options" id="" onChange={handleOnChange}>
            <option value="">---</option>
            <option value="javaScript">javaScript</option>
            <option value="ReactJS">ReactJS</option>
            <option value="Angularjs">Angularjs</option>
          </select>

          <div className="form-check">
            <label htmlFor="terminos">aceptas los terminos y condiciones</label>
            <input type="checkbox" name="terminos" id="terminos" onChange={handleOnChecked}/>
          </div>
        </form>
      </>
    ); 
}