import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60 pb-32">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-10 md:grid-cols-2 place-items-center">

                {/* Imagen */}
                <Image
                    src="/condominio-fondo.webp"
                    priority
                    width="300"
                    height="300"
                    alt="Avatar"
                    className="rounded-xl mt-3 lg:mt-20 w-1/2 sm:w-full max-w-xs  md:max-w-md lg:max-w-lg mx-auto"
                />


                {/* Contenido de Texto */}
                <div className="flex flex-col justify-center max-w-md w-full text-center md:text-left mx-auto">
                    <h1 className="mb-5 text-2xl leading-tight md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'Mejor Seguridad ☠️',
                                1000,
                                'Automaticacion de tu Condominio 🥰',
                                1000,
                                'Integra IA para facilitar los registros 🤖',
                                1000,
                                'Mejora la Gestion de tu Condominio 🤗',
                                1000,
                                'Ten el control de tu Condominio 🫡',
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
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5">
                        <a href="/portfolio" className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver condominios
                        </a>
                        <a href="/testimonials"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
