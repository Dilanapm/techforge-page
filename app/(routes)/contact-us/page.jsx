"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";

export default function ContactPage() {
  return (
    <main className="bg-white text-black py-24 px-6">
      <div>
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contáctanos <span className="text-secondary">Directamente</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Si deseas conocer más sobre nuestros servicios o tienes alguna consulta, no dudes en escribirnos. Estaremos encantados de atenderte.
          </p>
        </div>

        {/* Contenedor Responsivo de Formulario e Imagen */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          {/* Imagen */}
          <div className="w-full max-w-sm flex justify-center">
            <Image
              src="/avatar-3.webp"
              alt="Avatar contacto"
              width={300}
              height={300}
              className="rounded-xl object-contain shadow-lg"
            />
          </div>

          {/* Formulario de contacto */}
          <div className="w-full max-w-xl bg-gray-50 p-8 rounded-xl shadow-md">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Nombre</label>
                <input
                  type="text"
                  placeholder="Tu nombre completo"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Mensaje</label>
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-secondary hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}