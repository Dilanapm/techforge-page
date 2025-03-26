import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-32 pb-32 px-6 md:px-12 bg-white text-black">
      {/* Sección de bienvenida */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texto de bienvenida */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Bienvenido a <span className="text-secondary">TechForge</span>
          </h1>
          <p className="mt-4 text-lg text-gray-800">
            Somos una empresa boliviana de tecnología dedicada a desarrollar soluciones digitales que mejoran la gestión y seguridad en comunidades.{" "}
            Uno de nuestros principales servicios es <strong className="text-secondary">TorreSegura</strong>, una plataforma inteligente para condominios verticales.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/about-us">
              <button className="px-6 py-3 bg-secondary hover:bg-teal-700 text-white rounded-lg shadow-md transition">
                Conócenos
              </button>
            </Link>
            <Link href="/services">
              <button className="px-6 py-3 border-2 border-secondary text-secondary hover:bg-teal-50 rounded-lg transition">
                Ver Servicios
              </button>
            </Link>
          </div>
        </div>

        {/* Imagen institucional */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/equipo-techforge.webp"
            alt="Equipo TechForge"
            width={500}
            height={600}
            className="rounded-xl shadow-lg object-contain"
            priority
          />
        </div>
      </div>

      {/* Sección de compromiso */}
      <div className="max-w-4xl mx-auto mt-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Comprometidos con la Sociedad</h2>
        <p className="text-lg text-gray-700 mb-6">
          En <span className="font-semibold text-secondary">TechForge</span> trabajamos con pasión para crear soluciones tecnológicas que impacten positivamente a nuestra comunidad. 
          Creemos en el poder de la tecnología para transformar la vida en sociedad, promoviendo seguridad, eficiencia y confianza.
        </p>
        <Link href="/team">
          <button className="px-6 py-3 bg-secondary hover:bg-teal-700 text-white rounded-lg shadow-md transition">
            Conoce al equipo de TechForge
          </button>
        </Link>
      </div>
    </div>
  );
}
