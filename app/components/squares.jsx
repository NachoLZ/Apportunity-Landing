import React, { useState } from "react";

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
      backText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    }, {
      title: "Software",
      description: "Lorem ipsum",
      imageUrl: "https://unsplash.it/500/500/",
      backText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },{
      title: "Soluciones",
      description: "Lorem ipsum",
      imageUrl: "https://unsplash.it/500/500/",
      backText:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
    },
    // Repite para las otras tarjetas
    // ...
  ];

  return (
    <div className="wrapper">
      <h1>Parallax Flipping Cards</h1>
      <div className="cols">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`col ${hoverState[index] ? "hover" : ""}`}
            onTouchStart={() => toggleHover(index)}
          >
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
                <div className="inner">
                  <p>{card.backText}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
