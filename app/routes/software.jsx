import { Outlet } from "@remix-run/react";
import pestUp from "~/assets/pestUp.jpeg";
import Wallapp from "~/assets/Wallapp.jpeg"

export default function Software() {
    return (
        <div className="py-8 bg-gray-100 min-h-screen flex justify-center items-start">
        <div className="max-w-7xl flex flex-col lg:flex-row mx-auto px-8">
          <div className="lg:w-1/2 mr-8">
            <p className="text-2xl font-bold mb-8">Desarrollos tecnológicos ITS</p>
            <div className="max-w-md">
              <h2 className="text-xl font-bold mb-4">Productos patentados:</h2>
              <ul className="list-disc pl-6">
                <li className="mb-2">Apportunity</li>
                <li className="mb-2">Pest UP!</li>
                <li className="mb-2">WallFlyPanel</li>
                <li className="mb-2">Ecobox Pest Control</li>
                <li className="mb-2">Tyre Rat Trap</li>
                <li className="mb-2">Detectiv</li>
                <li className="mb-2">Decorative Fly Trap</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center flex-wrap">
            <img src={pestUp} alt="Imagen" className="w-full max-w-xs h-auto mb-4 object-cover" />
            <img src={Wallapp} alt="Imagen2" className="w-full max-w-xs h-auto  mb-4 object-cover" />
          </div>
        </div>
      </div>
    );
  }