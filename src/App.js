/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from "react";

import "./App.scss";
import spaceman1 from "./assets/spaceman-1.png";
import spaceman5 from "./assets/spaceman-5.png";
import spaceman6 from "./assets/spaceman-6.png";
import spaceman7 from "./assets/spaceman-7.png";
import chevronDownWhite from "./assets/chevron-down-white.png";
import featureCard1 from "./assets/feature-card-1.png";
import featureCard2 from "./assets/feature-card-2.png";
import featureCard3 from "./assets/feature-card-3.png";
import team from "./assets/team.png";
import { BsArrowRight } from "react-icons/bs";
import { ImLinkedin2, ImTwitter } from "react-icons/im";
import { FaRegCheckCircle } from "react-icons/fa";
import FeatureCard from "./components/FeatureCard";
import Button from "./components/Button";
import DescriptiveCard from "./components/DescriptiveCard";

function App() {
  const [featureCards, setFeatureCards] = useState([
    {
      image: featureCard1,
      title: "EXPLORA",
      content: [
        <>
          Innovación y <b>creación tecnológica</b>
        </>,
        <>
          <b>UI/UX</b>
        </>,
        <>
          <b>Innovación</b>
        </>,
      ],
      active: false,
    },
    {
      image: featureCard2,
      title: "IMAGINA",
      content: [
        <>
          <b>Estrategia</b> Digital{" "}
        </>,
        <>
        <b>Big Data &</b> Analysis{" "}
      </>,
        <>
          <b>Consultoría</b> Tecnológica
        </>,
        <>
          <b>Reducción</b> de costos TI
        </>,
      ],
      active: true,
    },
    {
      image: featureCard3,
      title: "CONQUISTA",
      content: [
        <>
          Desarrollo tecnológico <b>a la medida</b>
        </>,
        <>
          <b>Ciberseguridad</b>
        </>,
        <>
          <b>Servicios de la Nube</b>
        </>,
      ],
      active: false,
    },
  ]);
  const descriptiveCards = [
    {
      image: spaceman5,
      content: [
        <>
          Usamos las tecnologías<br />más modernas,
        </>,
        <>
          Innovamos y creamos<br />proyectos retadores
        </>
      ],
    },
    {
      image: spaceman7,
      content: [
        <>
          ¡Trabajamos en equipo<br />rumbo al éxito!,
        </>,
        <>
          No tenemos código de<br />vestimenta,
        </>
      ],
    },
    {
      image: spaceman6,
      content: [
        <>
          Realizamos actividades<br />para tu bienestar,
        </>,
        <>
          ¡Tenemos un parque<br />frente a la oficina!,
        </>
      ],
    },
  ];
  const tableData = [
    {
      feature: "Equipo inclusivo, honesto y auténtico",
      others: true,
      atomic: true,
    },
    {
      feature: "Puntualidad es nuestro segundo nombre",
      others: true,
      atomic: true,
    },
    {
      feature: "Siempre innovamos en nuestros productos",
      others: true,
      atomic: true,
    },
    {
      feature: "Te ayudamos a crecer e implementar nuevos conocimientos",
      others: false,
      atomic: true,
    },
    {
      feature: "Nos preocupamos por tu bienestar",
      others: false,
      atomic: true,
    },
    {
      feature: "El respeto es una parte fundamental",
      others: false,
      atomic: true,
    },
  ];
  const setActiveCard = useCallback((cardIndex) => {
    const newCards = [...featureCards];
    const updatedCards = newCards.map((card, index) => {
      return cardIndex === index
        ? { ...card, active: true }
        : { ...card, active: false };
    });
    setFeatureCards(updatedCards);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="row py-5 vh-75">
          <div className="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center">
            <img src={spaceman1} alt="" className="w-75" />
          </div>
          <div className="col-12 col-md-6 h-100 d-flex align-items-center justify-content-center flex-column">
            <h1 className="text-center mb-5 fs-lg fw-bold">
              Desarrolla todo <br />
              <span className="text-main-red">tu POTENCIAL</span>
              <br />
              dentro del equipo <br />
              <span className="text-main-red">ATOMIC</span>LABS
            </h1>
            <Button>¡Quiero ser parte!</Button>
          </div>
        </div>
        <div className="row vh-25">
          <div className="col-12">
            <div className="w-25 text-center mx-auto">
              <img src={chevronDownWhite} alt="" />
              <p>Quiero saber más</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="text-center mb-5 fs-lg fw-bold">
              SOMOS EL BRAZO DERECHO <br />
              <span className="text-main-red">DE LA TECNOLOGÍA</span>
            </h2>
            <div className="row row-cols-3 g-0 pt-5 mb-5">
              {featureCards.map((card, index) => (
                <FeatureCard
                  key={index}
                  {...card}
                  clickHandler={setActiveCard}
                  cardIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 pt-5 text-center fs-lg fw-bold">
              ¡TE ENCANTARÁ <br />{" "}
              <span className="text-main-red">TRABAJAR CON NOSOTROS!</span>
            </h2>
            <img src={team} alt="" />
            <div className="d-flex justify-content-between align-items-center text-center">
              <p className="fs-3 m-0">Contratación<br />remota</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Entrevista con<br />el área de RH</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Prueba<br />práctica</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Entrevista<br />técnica</p>
            </div>
            <div className="text-center mx-auto my-5 py-4">
              <Button>¡Quiero ser parte!</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 text-center fs-lg fw-bold">
              ¿POR QUÉ <span className="text-main-red">ATOMIC?</span>
            </h2>
            <div className="row row-cols-3 g-4 mb-5">
              {descriptiveCards.map((card) => {
                return <DescriptiveCard {...card} />;
              })}
            </div>
            <div className="card p-2">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-bottom-0">CARACTERISTICAS</th>
                    <th scope="col" className="text-center border-bottom-0">OTROS</th>
                    <th scope="col" className="table-active fs-4 text-center border-bottom-0">
                      ATOMIC
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => {
                    const { feature, others, atomic } = item;
                    return (
                      <tr>
                        <td>{feature}</td>
                        <td className="text-center">{others && <FaRegCheckCircle size={26} color="#fa4d09" />}</td>
                        <td className="table-active text-center">
                          {atomic && <FaRegCheckCircle size={26} color="#fa4d09" />}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-25 py-5 my-3 mx-auto">
              <Button>¡Quiero ser parte!</Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex justify-content-between align-items-center py-5">
                  <p className="mb-0">2020 AtomicLabs. Todos los derechos reservados.</p>
                  <div className="d-flex align-items-center">
                    <a href="" class="text-white mx-5">Aviso de privacidad</a>
                    <ImLinkedin2 size={30}/>
                    <ImTwitter className="mx-4" size={30}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
