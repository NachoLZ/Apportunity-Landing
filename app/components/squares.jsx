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
      title: "Dispositivos Inteligentes",
      description: "",
      imageUrl: "https://unsplash.it/500/500/",
      url: "/hardware",
      backText:
        "Dispositivos inteligentes ayudan a mantenernos informados en forma permanente acerca de nuestros puntos de monitoreo.",
    },

    {
      title: "Desarrollos Tecnológicos",
      description: "",
      imageUrl: "https://unsplash.it/500/500/",
      url: "/software",
      backText:
        "Tecnologías y productos amigables con el medio ambiente, incluida la creación de aplicaciones para mejorar y optimizar los servicios.",
    },

    {
      title: "Servicios",
      description: "",
      url: "/soluciones",
      imageUrl: "https://unsplash.it/500/500/",
      backText: (
        "Servicios certificados para subsanar las desviaciones encontradas y servicios de consultoria calificada."
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
