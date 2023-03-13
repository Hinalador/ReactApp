import React from "react";
import '../Stylesheets/Tarjeta.css';

function Tarjeta(props) {
  return (
    <div className="card-container">
      <p className="text-gray">{props.comment}</p>
      <div>
        <img src={require(`../img/${props.imagen}.png`)} alt="" className="img-profile" />
        <h3 className="text-blue">{props.nombre}</h3>
        <p className="text-gray">{props.cargo}</p>
      </div>
    </div>
  )
}

export default Tarjeta;