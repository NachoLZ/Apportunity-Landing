import { Outlet } from "@remix-run/react";

export default function Soluciones() {
    return (
        <div>
            <div className="text-center mt-10">
      <h1 className="text-4xl font-bold text-gray-800">¡Bienvenido a seccion Soluciones!</h1>
      <p className="text-lg text-gray-600">Aquí encontrarás información acerca de Soluciones.</p>
    </div>
            <Outlet/>
        </div>
    )
}