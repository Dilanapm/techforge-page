import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-white text-black">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">Nuestros Servicios</h1>
        <p className="text-lg text-gray-700 mb-12">
          En <strong>TechForge</strong> desarrollamos soluciones tecnológicas enfocadas en la gestión eficiente, la seguridad inteligente y la innovación digital para comunidades modernas.
        </p>

        {/* Grid de servicios */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Servicio 1 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-secondary">TorreSegura</h2>
            <p className="text-gray-700 mb-4">
              Plataforma para condominios verticales que automatiza el acceso con QR, permite monitoreo en tiempo real y mejora la seguridad.
            </p>
            <Link
              href="http://localhost:3001"
              target="_blank"
              className="text-white bg-secondary px-4 py-2 rounded-lg inline-block hover:bg-teal-700 transition"
            >
              Ver Plataforma
            </Link>
          </div>

          {/* Servicio 2 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-secondary">Gestión Digital</h2>
            <p className="text-gray-700 mb-4">
              Herramientas administrativas para automatizar la gestión interna de comunidades, con paneles, reportes y trazabilidad.
            </p>
            <button className="text-secondary font-medium hover:underline">
              En desarrollo
            </button>
          </div>

          {/* Servicio 3 */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-3 text-secondary">Seguridad Inteligente</h2>
            <p className="text-gray-700 mb-4">
              Integración de IA con cámaras y sensores para mejorar la vigilancia, detectar riesgos y tomar decisiones proactivas.
            </p>
            <button className="text-secondary font-medium hover:underline">
              En desarrollo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
