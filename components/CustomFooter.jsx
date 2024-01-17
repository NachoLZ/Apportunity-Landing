import React from "react";

const CustomFooter = () => {
  const footerStyle = {
    backgroundColor: "#000", // Fondo negro
    color: "#fff",          // Texto blanco
    padding: "20px",        // Ajusta el relleno según sea necesario
    position: "fixed",
    bottom: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <footer style={footerStyle}>
      <div >
      <p>&#9742; Contacto:+5699999999.</p>
      </div>
      <div>
      <p>&copy; ITS: Intel Traps Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default CustomFooter;
