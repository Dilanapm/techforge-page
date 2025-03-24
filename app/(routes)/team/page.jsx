"use client";

import Image from "next/image";
import ContainerPage from "@/components/container-page";

const teamMembers = [
  {
    name: "Luis Mamani",
    role: "Desarrollador Frontend",
    image: "/team/luis.jpg",
  },
  {
    name: "Carla Choque",
    role: "Desarrolladora Backend",
    image: "/team/carla.jpg",
  },
  {
    name: "Rodrigo Quispe",
    role: "Especialista en IA",
    image: "/team/rodrigo.jpg",
  },
  {
    name: "María Flores",
    role: "UX/UI Designer",
    image: "/team/maria.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-white text-black py-24 px-6">
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
    </main>
  );
}
