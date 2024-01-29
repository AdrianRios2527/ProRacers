import React from "react";

export const Cards = (props) => {
  const sumadorCompra = () => {
    props.onButtonClick(props.price);
    // Display an alert when the button is clicked
    window.alert(`¡${props.title} ha sido agregado al carrito!`);
  };

  return (
    <div className="card card1 bg-black text-white my-4" style={{ maxWidth: "20rem", width: "100%" }}>
      <img className="card-img-top" style={{ width: "100%", height: "40%" }} src={props.url} alt={props.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center mt-2">{props.title}</h5>
        <p className="card-text flex-grow-1 mt-2">{props.texts}</p>
        <div className="d-flex">
          <button className="botoncompracard" onClick={sumadorCompra}>
            ${props.price}
          </button>
        </div>
      </div>
    </div>
  );
};
