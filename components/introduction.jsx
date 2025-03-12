import Image from "next/image";
import Link from "next/link"; // Usar Next.js para navegación
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="relative z-20 w-full bg-darkBg/60 min-h-screen flex items-center justify-center overflow-visible">
            <div className="grid items-center max-w-6xl px-6 md:grid-cols-2">
                
                {/* Imagen optimizada */}
                <Image 
                    src="/home-4.webp"
                    priority
                    width={300}
                    height={300}
                    alt="Avatar"
                    className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                />

                {/* Texto */}
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Techforge te brinda, <br />
                        <TypeAnimation
                            sequence={[
                                'Mejor Seguridad ☠️',
                                1000,
                                'Automatización de tu Condominio 🥰',
                                1000,
                                'Integración con IA para facilitar los registros 🤖',
                                1000,
                                'Gestión mejorada de tu Condominio 🤗',
                                1000,
                                'El control de tu Condominio 🫡',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Seguridad y control inteligente para condominios con TechForge.
                        Protege a los residentes con acceso optimizado y monitoreo automatizado.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5 pb-10">
                        <Link href="/clients">
                            <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md rounded-xl hover:shadow-xl hover:shadow-white/50">
                                Nuestros clientes
                            </button>
                        </Link>
                        <Link href="/contact-us">
                            <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contáctanos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
