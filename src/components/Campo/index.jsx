import React from "react";
import "./Campo.css";

function Campo(props) {
  const placeHolderModificado = `${props.placeholder}...`;

  //Destructuracion
  const { type = "text" } = props;

  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  };
  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo} </label>
      <input
        placeholder={placeHolderModificado}
        required={props.required}
        value={props.valor}
        onChange={manejarCambio}
        type={type}
      />
      <br />
    </div>
  );
}

export default Campo;
