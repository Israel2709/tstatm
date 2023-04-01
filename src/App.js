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
        "Usamos las tecnologías más modernas",
        "Innovamos y creamos proyectos retadores",
      ],
    },
    {
      image: spaceman7,
      content: [
        "¡Trabajamos en equipo rumbo al éxito!",
        "No tenemos código de vestimenta",
      ],
    },
    {
      image: spaceman6,
      content: [
        "Realizamos actividades para tu bienestar",
        "¡Tenemos un parque frente a la oficina!",
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
            <Button type="default">¡Quiero ser parte!</Button>
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
            <h2 className="my-5 text-center fs-lg fw-bold">
              ¡TE ENCANTARÁ <br />{" "}
              <span className="text-main-red">TRABAJAR CON NOSOTROS!</span>
            </h2>
            <img src={team} alt="" />
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-3 m-0">Contratación remota</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Entrevista con el área de RH</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Prueba práctica</p>
              <BsArrowRight className="fs-3 text-main-red" />
              <p className="fs-3 m-0">Entrevista técnica</p>
            </div>
            <div className="w-25 mx-auto mt-5">
              <Button>¡Quiero ser parte!</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="my-5 text-center fs-lg fw-bold">
              ¿POR QUÉ <span className="text-main-red">ATOMIC?</span>
            </h2>
            <div className="row row-cols-3 g-4">
              {descriptiveCards.map((card) => {
                return <DescriptiveCard {...card} />;
              })}
            </div>
            <div className="card p-5">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Características</th>
                    <th scope="col">Otros</th>
                    <th scope="col" className="table-active">
                      Atomic
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((item) => {
                    const { feature, others, atomic } = item;
                    return (
                      <tr>
                        <th scope="row">{feature}</th>
                        <td>{others && <FaRegCheckCircle />}</td>
                        <td className="table-active">
                          {atomic && <FaRegCheckCircle />}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="w-25 py-5 mx-auto">
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
                <div className="col-12 d-flex justify-content-between p-5">
                  <p>2020 AtomicLabs. Todos los derechos reservados.</p>
                  <div>
                    <a href="">Aviso de privacidad</a>
                    <ImLinkedin2 />
                    <ImTwitter />
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
