import React, {useState} from 'react'; 

export default function Formularios () {   
    const [texto, setTexto] = useState("");  
    const [radio, setRadio] = useState("option3");  
    const [select, setSelect] = useState("");  
    const [checkbox, setCheckbox] = useState(false);  

    const handleSubmit = (e) =>{  
        e.preventDefault(); 
        alert("se ha enviado el formularioXD"); 
        console.log("se esta disparando el evento XD"); 
    }
    return (
      <>
        <form onSubmit={handleSubmit}>
          {/* __________________input text y textArea__________________ */}
          <div className="form-group">
            <label htmlFor="texto" className="form-label">
              texto
            </label>
            <input
              type="text"
              className="form-control"
              id="texto"
              name="texto"
              value={texto}
              onChange={(e) => {
                setTexto(e.target.value);
              }}
            />
          </div>
          {/* _____________inputs de tipo radio__________________ */}
          <div className="form-check">
            <label htmlFor="otpion1"> option 1</label>
            <input
              type="radio"
              name="options"
              className="form-check-input"
              value="option1"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
          </div>

          <div className="form-check">
            <label htmlFor="otpion2"> option 2</label>
            <input
              type="radio"
              name="options"
              className="form-check-input"
              value="option2"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
            />
          </div>

          <div className="form-check">
            <label htmlFor="otpion3"> option 3</label>
            <input
              type="radio"
              name="options"
              className="form-check-input"
              value="option3"
              onChange={(e) => {
                setRadio(e.target.value);
              }}
              defaultChecked
            />
          </div>

        {/* ________________________Etiquetas de tipo select_____________________ */}

        <select
          name="programacion"
          id="xd"
          onChange={(e) => setSelect(e.target.value)}
          defaultValue="pyton"
        >
          <option value="">---</option>
          <option value="javaScript"> javaScript </option>
          <option value="vueJS"> vueJS </option>
          <option value="reactJs"> reactJS </option>
          <option value="pyton"> pyton </option>
        </select>

        {/* _____________________Etiqueta checkbox________________________________ */}

        <div className="form-check">
          <label htmlFor="js" className="form-check-label">
            aceptas los terminos y condiciones
          </label>
          <input
            type="checkbox"
            name="terminos"
            onChange={(e) => setCheckbox(e.target.checked)}
          />
        </div> 
        <button className='btn btn-info'>enviar formulario</button> 
        </form>
      </>
    );
}