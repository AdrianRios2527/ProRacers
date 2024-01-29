import React, { useState } from "react";
import { Cards } from "../component/cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';

export const AllProducts = () => {
  const [activeTab, setActiveTab] = useState("motorbikes");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para almacenar la cantidad de elementos en el bolso

  const handleTabClick = (tabId) => {
    setActiveTab(tabId === activeTab ? null : tabId);
  };

  const handleButtonClick = (product) => {
    setTotalPrice((prevTotal) => prevTotal + product.price);
    setSelectedProducts((prevProducts) => [...prevProducts, product.title]);
    setCartItemCount((prevCount) => prevCount + 1); // Incrementar el contador cuando se añade un producto
  };

  const resetCart = () => {
    setTotalPrice(0);
    setSelectedProducts([]);
    setCartItemCount(0); // Restablecer el contador cuando se vacía el bolso
  };

  return (
    <div className="container-fluid">
      
      <div className="d-flex justify-content-around bg-dark p-3">
        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${activeTab === "motorbikes" && "active"
            }`}
          onClick={() => handleTabClick("motorbikes")}
        >
          MOTORBIKES
        </a>

        <a
          href="#"
          className={`badge badge-info fs-6 borderAnimate ${activeTab === "helmet" && "active"
            }`}
          onClick={() => handleTabClick("helmet")}
        >
          HELMET
        </a>
      </div>

      <div className="BotonCompra d-flex justify-content-center p-3">
          <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
          
          <FontAwesomeIcon icon={faShoppingBag} size="xl" style={{ color: "#ffffff" }} />
          {cartItemCount > 0 && <span className="badge bg-danger rounded-pill">{cartItemCount}</span>} {/* Mostrar el contador solo si hay elementos en el bolso */}

          </button>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Tu cesta!</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body bg-dark">
                  <p>Total : ${totalPrice}</p>
                  <ul>
                    {selectedProducts.map((productName, index) => (
                      <li key={index}>{productName}</li>
                    ))}
                  </ul>
                  <button type="button" className="btn btn-danger" onClick={resetCart}>
                  Vaciar carrito
                </button>

                </div>
              </div>
            </div>
          </div>
        </div>

      <div id="motorbikes" style={{ display: activeTab === "motorbikes" ? "block" : "none" }}>
        <div className="d-flex flex-wrap justify-content-around" id="Motorbikes">

          {/* Aquí van tus Cards para Motorbikes */}
          <Cards
            key="z H2 SE"
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z_H2_SE_GY2_STU__3_.png"
            title="Z H2 SE"
            price={14.909}
            texts="Y así es como comprobamos que la Z H2 acelera como un demonio y es capaz de llegar a los 265 km/h en quinta"
            onButtonClick={() => handleButtonClick({
              title: "Z H2 SE",
              price: 14.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Versys%20650_GN1_STU%20(1).001.png"
            title="VERSYS 650 2023"
            price={28.909}
            texts="La Versys 650 se ha diseñado con esta insólita combinación de suspensión de largo recorrido, llantas deportivas"

            onButtonClick={() => handleButtonClick({
              title: "VERSYS 650 2023",
              price: 28.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_W800__BK1_STU__2_.png"
            title="W800 2024"
            price={10.909}
            texts="W800, el último miembro de una dinastía de 50 años de Kawasaki W con una atención al detalle y
         un nivel de ingeniería artesanal que pocas máquinas poseen. Desde su facilidad de
         conducción hasta su evocador aspecto vintage, la W800 es la evolución del
         auténtico icono original, que hace que el ayer siga vivo hoy."

            onButtonClick={() => handleButtonClick({
              title: "W800 2024",
              price: 10.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_KX65_GN1_STU__2_.png"
            title="KX65 2024"
            price={19.909}
            texts="Creadas para dominar y construidas para los ganadores, la KX65 y la KX85 son máquinas
         preparadas para la competición, diseñadas para estimular los brotes verdes del talento
         juvenil y permitir que florezcan en forma de victorias en carrera "

            onButtonClick={() => handleButtonClick({
              title: "KX65 2024",
              price: 19.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_Ninja_650_GN1_STU__2_.png "
            title="Ninja 400cc"
            price={19.909}
            texts="La moto deportiva Ninja® 400 ofrece la mayor cilindrada de la categoría, con 399cc, acompañada por la sofisticación de un motor bicilíndrico."

            onButtonClick={() => handleButtonClick({
              title: "Ninja 400cc",
              price: 19.909
            })}
          />
          <Cards
            key="z H2 SE"
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z_H2_SE_GY2_STU__3_.png"
            title="Z H2 SE"
            price={14.909}
            texts="Y así es como comprobamos que la Z H2 acelera como un demonio y es capaz de llegar a los 265 km/h en quinta"
            onButtonClick={() => handleButtonClick({
              title: "Z H2 SE",
              price: 14.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Versys%20650_GN1_STU%20(1).001.png"
            title="VERSYS 650 2023"
            price={28.909}
            texts="La Versys 650 se ha diseñado con esta insólita combinación de suspensión de largo recorrido, llantas deportivas"

            onButtonClick={() => handleButtonClick({
              title: "VERSYS 650 2023",
              price: 28.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_W800__BK1_STU__2_.png"
            title="W800 2024"
            price={10.909}
            texts="W800, el último miembro de una dinastía de 50 años de Kawasaki W con una atención al detalle y
         un nivel de ingeniería artesanal que pocas máquinas poseen. Desde su facilidad de
         conducción hasta su evocador aspecto vintage, la W800 es la evolución del
         auténtico icono original, que hace que el ayer siga vivo hoy."

            onButtonClick={() => handleButtonClick({
              title: "W800 2024",
              price: 10.909
            })}
          />
          <Cards
            key="z H2 SE"
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/23MY_Z_H2_SE_GY2_STU__3_.png"
            title="Z H2 SE"
            price={14.909}
            texts="Y así es como comprobamos que la Z H2 acelera como un demonio y es capaz de llegar a los 265 km/h en quinta"
            onButtonClick={() => handleButtonClick({
              title: "Z H2 SE",
              price: 14.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/22MY_Versys%20650_GN1_STU%20(1).001.png"
            title="VERSYS 650 2023"
            price={28.909}
            texts="La Versys 650 se ha diseñado con esta insólita combinación de suspensión de largo recorrido, llantas deportivas"

            onButtonClick={() => handleButtonClick({
              title: "VERSYS 650 2023",
              price: 28.909
            })}
          />

          <Cards
            url="https://storage.kawasaki.eu/public/kawasaki.eu/en-EU/model/24MY_W800__BK1_STU__2_.png"
            title="W800 2024"
            price={10.909}
            texts="W800, el último miembro de una dinastía de 50 años de Kawasaki W con una atención al detalle y
         un nivel de ingeniería artesanal que pocas máquinas poseen. Desde su facilidad de
         conducción hasta su evocador aspecto vintage, la W800 es la evolución del
         auténtico icono original, que hace que el ayer siga vivo hoy."

            onButtonClick={() => handleButtonClick({
              title: "W800 2024",
              price: 10.909
            })}
          />
        </div>
      </div>

      <div id="helmet" style={{ display: activeTab === "helmet" ? "block" : "none" }}>
        <div className="d-flex flex-wrap justify-content-around" id="Helmets">

          {/* Aquí van tus Cards para Helmets */}

          <Cards
            url="https://www.motosgarrido.com/61665-large_default/casco-scorpion-exo-1400-evo-ii-air-accord-negro-azul-blanco.jpg"
            title="SCORPION EXO-1400 EVO I"
            price={270}
            texts="Su forma agresiva, construcción liviana y el nuevo sistema de súper ventilación superior muestran el compromiso de superar los límites. Prepárese para experimentar verdadera innovación."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION EXO-1400 EVO I",
              price: 270
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/52032-large_default/casco-agv-pista-gp-rr-ece-2206-dot-limited-edition-valentino-rossi-assen-2007-blanco-azul-amarillo-fluor-rosa.jpg"
            title=" AGV PISTA GP RR ECE 2206 DOT LIMITED"
            price={1.000}
            texts="El Pista GP RR es la réplica perfecta del casco de AGV utilizado durante las carreras por los campeones del mundial de motociclismo. Por eso ha recibido la nueva homologación FIM, que certifica el mayor nivel de protección posible, incluso de las peligrosas aceleraciones rotacionales de la cabeza."


            onButtonClick={() => handleButtonClick({
              title: " AGV PISTA GP RR ECE 2206 DOT LIMITED",
              price: 1.000
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/61719-large_default/casco-agv-k6-s-replica-franco-morbidelli-2021-multicolor.jpg"
            title="AGV K6 S REPLICA FRANCO "
            price={200}
            texts="El casco de carretera más ligero del mundo, versátil y adecuado para todo tipo de motociclistas, diseñado con tecnologías desarrolladas para los pilotos de MotoGP™."

            onButtonClick={() => handleButtonClick({
              title: "AGV K6 S REPLICA FRANCO ",
              price: 200
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/61665-large_default/casco-scorpion-exo-1400-evo-ii-air-accord-negro-azul-blanco.jpg"
            title="SCORPION EXO-1400 EVO I"
            price={270}
            texts="Su forma agresiva, construcción liviana y el nuevo sistema de súper ventilación superior muestran el compromiso de superar los límites. Prepárese para experimentar verdadera innovación."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION EXO-1400 EVO I",
              price: 270
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/53650-large_default/casco-scorpion-adf-9000-air-desert-negro-mate-plata.jpg"
            title="SCORPION ADF-9000 AIR DESERT"
            price={600}
            texts="Casco integral enfocado a los pilotos aventureros que lo usan tanto para carretera como para fuera de ella. Cada casco está cuidadosamente fabricado a mano utilizando las últimas fibras de vidrio."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION ADF-9000 AIR DESERT",
              price: 600
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/47260-large_default/casco-scorpion-adf-9000-air-desert-blanco-azul-rojo.jpg"
            title="SCORPION ADF-9000 AIR DESERT BLANCO AZUL ROJO"
            price="200$"
            texts="Casco integral enfocado a los pilotos aventureros que lo usan tanto para carretera como para fuera de ella. Cada casco está cuidadosamente fabricado a mano utilizando las últimas fibras de vidrio, aramida y poliresinas que brindan una resistencia superior junto con un peso ligero. Además, incluye una pantalla ahumada oscura de regalo."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION ADF-9000 AIR DESERT BLANCO AZUL ROJO",
              price: 650
            })}
          />
          <Cards
            url="https://www.motosgarrido.com/61665-large_default/casco-scorpion-exo-1400-evo-ii-air-accord-negro-azul-blanco.jpg"
            title="SCORPION EXO-1400 EVO I"
            price={270}
            texts="Su forma agresiva, construcción liviana y el nuevo sistema de súper ventilación superior muestran el compromiso de superar los límites. Prepárese para experimentar verdadera innovación."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION EXO-1400 EVO I",
              price: 270
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/52032-large_default/casco-agv-pista-gp-rr-ece-2206-dot-limited-edition-valentino-rossi-assen-2007-blanco-azul-amarillo-fluor-rosa.jpg"
            title=" AGV PISTA GP RR ECE 2206 DOT LIMITED"
            price={1.000}
            texts="El Pista GP RR es la réplica perfecta del casco de AGV utilizado durante las carreras por los campeones del mundial de motociclismo. Por eso ha recibido la nueva homologación FIM, que certifica el mayor nivel de protección posible, incluso de las peligrosas aceleraciones rotacionales de la cabeza."


            onButtonClick={() => handleButtonClick({
              title: " AGV PISTA GP RR ECE 2206 DOT LIMITED",
              price: 1.000
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/61719-large_default/casco-agv-k6-s-replica-franco-morbidelli-2021-multicolor.jpg"
            title="AGV K6 S REPLICA FRANCO "
            price={200}
            texts="El casco de carretera más ligero del mundo, versátil y adecuado para todo tipo de motociclistas, diseñado con tecnologías desarrolladas para los pilotos de MotoGP™."

            onButtonClick={() => handleButtonClick({
              title: "AGV K6 S REPLICA FRANCO ",
              price: 200
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/61665-large_default/casco-scorpion-exo-1400-evo-ii-air-accord-negro-azul-blanco.jpg"
            title="SCORPION EXO-1400 EVO I"
            price={270}
            texts="Su forma agresiva, construcción liviana y el nuevo sistema de súper ventilación superior muestran el compromiso de superar los límites. Prepárese para experimentar verdadera innovación."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION EXO-1400 EVO I",
              price: 270
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/53650-large_default/casco-scorpion-adf-9000-air-desert-negro-mate-plata.jpg"
            title="SCORPION ADF-9000 AIR DESERT"
            price={600}
            texts="Casco integral enfocado a los pilotos aventureros que lo usan tanto para carretera como para fuera de ella. Cada casco está cuidadosamente fabricado a mano utilizando las últimas fibras de vidrio."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION ADF-9000 AIR DESERT",
              price: 600
            })}
          />

          <Cards
            url="https://www.motosgarrido.com/47260-large_default/casco-scorpion-adf-9000-air-desert-blanco-azul-rojo.jpg"
            title="SCORPION ADF-9000 AIR DESERT BLANCO AZUL ROJO"
            price="200$"
            texts="Casco integral enfocado a los pilotos aventureros que lo usan tanto para carretera como para fuera de ella. Cada casco está cuidadosamente fabricado a mano utilizando las últimas fibras de vidrio, aramida y poliresinas que brindan una resistencia superior junto con un peso ligero. Además, incluye una pantalla ahumada oscura de regalo."

            onButtonClick={() => handleButtonClick({
              title: "SCORPION ADF-9000 AIR DESERT BLANCO AZUL ROJO",
              price: 650
            })}
          />
        </div>
      </div>
    </div>
  );
};

