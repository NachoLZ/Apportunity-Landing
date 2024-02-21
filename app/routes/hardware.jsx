import { Outlet } from "@remix-run/react";
import imagenprueba from "~/assets/imagenpruebaroedor.webp";
export default function Hardware() {
    return (
        <div className="py-8 bg-gray-100 min-h-screen flex justify-center items-start">
        <div className="max-w-6xl flex flex-col lg:flex-row mx-auto px-8 mt-10">
          <div className="lg:w-1/2 mr-8">
            <p className="text-2xl font-bold mb-8">Dispositivos tecnológicos ITS</p>
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-4">Beneficios:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Aumento en la productividad del servicio, permitiendo realizar servicios paralelos o adicionales.</li>
                <li className="mb-2">Vigilancia permanente 24h / 365 días.</li>
                <li className="mb-2">Anticiparse ante la descomposición y malos olores.</li>
                <li className="mb-2">Buena imagen ante auditorías de certificación y visitas de autoridades fiscalizadoras por la innovación y el no abuso de plaguicidas.</li>
                <li className="mb-2">Evita la pérdida de tiempo en la revisión de trampas sin actividad.</li>
                <li className="mb-2">Envío de datos en forma inmediata a la app de servicio de los técnicos y también los tableros de gestión de los clientes.</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img src={imagenprueba} alt="Imagen" className="w-full" />
          </div>
        </div>
      </div>
    );
  }
 