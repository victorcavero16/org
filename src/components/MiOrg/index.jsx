import React from "react";
import "./MiOrg.css";

function MiOrg(props) {
  // Estado - hooks
  // useState
  // const [nombreVariable, funcionActualiza] = useState(valorInicial);
  //EJEMPLO:
  // const [mostrar, actualizarMostrar] = useState(true);

  // const manejarClick = () => {
  //   actualizarMostrar(!mostrar);
  // };
  return (
    <section className="orgSection">
      <h3 className="title">Mi organizacion</h3>
      <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
  );
}

export default MiOrg;
