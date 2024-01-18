import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Squares() {
  const [hoverState, setHoverState] = useState(Array(8).fill(false)); // Suponiendo 8 tarjetas

  const toggleHover = (index) => {
    const newHoverState = [...hoverState];
    newHoverState[index] = !newHoverState[index];
    setHoverState(newHoverState);
  };

  const cards = [
    // Puedes llenar este arreglo con los datos de cada tarjeta
    {
      title: "Hardware",
      description: "Lorem ipsum",
      imageUrl: "https://unsplash.it/500/500/",
      url: "/hardware",
      backText:
        "Dispositivos inteligentes de monitoreo a distancia; insectos rastreros; voladores y roedores.",
    },

    {
      title: "Software",
      description: "Lorem ipsum",
      imageUrl: "https://unsplash.it/500/500/",
      url: "/software",
      backText:
        "Análisis de datos e identificación de especies, reportes digitales y mapas de calor.",
    },

    {
      title: "Soluciones",
      description: "Lorem ipsum",
      url: "/soluciones",
      imageUrl: "https://unsplash.it/500/500/",
      backText: (
        <text className="font-size16">
          Apportunity Reporte (BRC)
          <br /> Diseño (Trampas y Material Educativo)
          <br /> Servicio (Sellado Estructural, Limpieza Focalizada y
          Capacitación Certificada)
        </text>
      ),
    },
  ];

  return (
    <div className="wrapper">
      <div className="cols">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col ${hoverState[index] ? "hover" : ""}`}
            onTouchStart={() => toggleHover(index)}
          >
            <a href={card.url}>
              <div className="container">
                <div
                  className="front"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                >
                  <div className="inner">
                    <p>{card.title}</p>
                    <span>{card.description}</span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner back-text ">
                    <p>{card.backText}</p>
                  </div>
                  <Button
                    color="default"
                    className="mb-4 button"
                    variant="ghost"
                    style={{ color: `rgb(255, 255, 255)` }}
                  >
                    Saber más
                  </Button>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
