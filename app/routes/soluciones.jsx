import ControlPlagas from "~/assets/control-de-plagas-logos.jpg"

export default function Soluciones() {
    return (
      <div className="py-8 bg-gray-100 min-h-screen flex justify-center items-start">
        <div className="max-w-7xl flex flex-col lg:flex-row mx-auto px-8">
          <div className="lg:w-1/2 mr-8 flex justify-center">
            <div className="max-w-md">
              <p className="text-2xl font-bold mb-4">Servicios ofrecidos por ITS</p>
              <h2 className="text-xl font-bold mb-4">Servicios Calificados:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Gestión Integrada de Plagas Urbanas</li>
                <li className="mb-2">Servicio de Aseo e Higiene Focalizado</li>
                <li className="mb-2">Servicio de Arreglos Estructurales Menores</li>
                <li className="mb-2">Servicio de Capacitación Certificada</li>
                <li className="mb-2">Servicio de diseño de productos personalizados educativos de medio ambiente</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center flex-wrap">
            <img src={ControlPlagas} alt="Imagen 1" className="w-full" />
          </div>
        </div>
      </div>
    );
  }
