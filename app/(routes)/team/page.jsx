"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";

const teamMembers = [
  {
    name: "Pablo Marcelo Pacheco Bohorquez",
    role: "Desarrollador Frontend",
    image: "/team/pablo.webp",
  },
  {
    name: "Andres Villegas Salazar",
    role: "Desarrollador Backend",
    image: "/team/villegas.webp",
  },
  {
    name: "Dilan Apolaca Marino",
    role: "Desarrollador Backend",
    image: "/team/dilan.webp",
  },
  {
    name: "Alvaro Santiago Encinas FLores",
    role: "UX/UI Designer",
    image: "/team/santiago.webp",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white text-black pt-24 pb-10 px-6  ">
      <div>
        {/* Encabezado */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro <span className="text-secondary">Equipo</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Personas apasionadas que construyen soluciones tecnológicas para mejorar la vida en comunidad.
          </p>
        </div>

        {/* Grid de integrantes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg transition"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-secondary">
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  width={150}
                  height={150}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
