import React from "react";
import "./ListaOpciones.css";

function ListaOpciones(props) {
  //   metodo map -> arreglo.map((equipo)=>{
  //        return <option></option>
  //     })

  const manejarCambio = (e) => {
    console.log("cambio", e.target.value);
    props.actualizarEquipo(e.target.value);
  };

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select value={props.valor} onChange={manejarCambio}>
        <option value="" disabled defaultValue="" hidden>
          Seleccionar equipo
        </option>
        {props.equipos.map((equipo, index) => (
          <option key={index} value={equipo}>
            {equipo}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ListaOpciones;
