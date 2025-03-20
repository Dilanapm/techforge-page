import Image from "next/image";
import ContainerPage from "@/components/container-page";
import ContactForm from "@/components/contactForm";
import { useState } from "react";

const TrialSection = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <ContainerPage>
            {/* Formulario con Z-Index alto */}
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-[1000]">
                    <ContactForm onClose={() => setShowForm(false)} />
                </div>
            )}

            <div className="flex flex-col justify-center items-center min-h-screen px-6 text-center relative">
                {/* Contenedor principal */}
                <div className="max-w-5xl mx-auto mt-20 xl:mt-30 relative">
                    {/* Contenedor de la Imagen con menor Z-Index */}
                    <div className="relative w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px]
                        xl:w-[500px] xl:h-[500px] mx-auto z-10">
                        <Image
                            src="/avatar-3.webp"
                            fill
                            sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, (max-width: 1024px) 400px, (max-width: 1280px) 500px, 600px"
                            className="rounded-xl object-contain"
                            alt="Avatar"
                            priority
                        />
                    </div>

                    {/* Título y subtítulo */}
                    <h1 className="text-3xl md:text-5xl font-bold text-white">
                        ¡Pruébalo 30 días y descubre <span className="text-secondary">CondoVive!</span>
                    </h1>
                    <p className="text-gray-300 mt-2 text-lg md:text-xl">
                        Únete a las miles de personas que ahorran tiempo y organizan sus propiedades con CondoVive.
                    </p>

                    {/* Botones de acción */}
                    <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                        <button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition">
                            Comienza ahora
                        </button>

                        <button
                            className="px-6 py-3 text-lg font-semibold bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg shadow-md transition"
                            onClick={() => setShowForm(true)}
                        >
                            Déjanos tus datos
                        </button>
                    </div>

                    {/* Línea divisoria */}
                    <hr className="border-gray-600 w-full max-w-4xl my-4" />

                    {/* Información de contacto */}
                    <div className="grid md:grid-cols-4 gap-6 text-gray-400 text-sm w-full max-w-5xl">
                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2">Contacto</h3>
                            <p>📞 (+591) 77204038</p>
                            <p>📧 contacto@TechForge.com</p>
                            <p>📍 Irpavi calle 2 - 206, La Paz, Bolivia</p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2">TechForge</h3>
                            <p>Ayuda</p>
                            <p>Seguridad</p>
                            <p>Política de respaldo</p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2">Nosotros</h3>
                            <p>Oportunidades</p>
                        </div>

                        <div className="text-center md:text-left">
                            <h3 className="font-semibold text-white mb-2">Recursos</h3>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default TrialSection;
