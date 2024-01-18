import React, { useState } from 'react';
import { Link } from '@remix-run/react'; // Importar Link de @remix-run/react
import navbarStyles from '../styles/navbar.css'; // Asumiendo que tienes estilos en este archivo

export const links = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: navbarStyles },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-sticky elementor-sticky--effects elementor-sticky--active" style={{ position: 'fixed', width: '100%', marginTop: 0, marginBottom: 0, top: '50px' }}>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-20 elementor-top-column">
          <div className="elementor-widget-wrap">
            <div className="elementor-element elementor-widget elementor-widget-theme-site-logo">
              <div className="elementor-widget-container">
                <Link to="/">
                  {/* Asegúrate de que la ruta de la imagen sea accesible en tu proyecto */}
                  <img
                    width="2652"
                    height="795"
                    alt="METOS de Pessl Instruments logotipo blanco"
                    src="../public/logo.png"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Aquí puedes agregar más componentes o contenido según sea necesario */}
      </div>
    </section>
  );
};
