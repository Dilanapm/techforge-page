import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import ContainerPage from "@/components/container-page";

const ServicesPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />

            {/* Contenedor principal centrado con z-10 para estar encima */}
            <div className="flex flex-col justify-center items-center min-h-screen px-6 relative z-10">
                <div className="grid items-center justify-center max-w-5xl gap-10 md:gap-20 mx-auto w-full md:grid-cols-2 md:flex md:flex-col">

                    {/* Slider de servicios (Ajustado para que baje en móviles) */}
                    <div className="order-1 md:order-2 w-full flex justify-center">
                        <SliderServices />
                    </div>

                    {/* Sección de texto (Siempre arriba en móviles, a la izquierda en desktop) */}
                    <div className="text-center md:text-left order-2 md:order-1 items-center mt-6 md:mt-0">
                        <h1 className="text-2xl leading-tight md:text-4xl md:mb-5 text-center">
                            Caracteristicas de nuestro <span className="font-bold text-secondary">servicio de seguridad.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300">
                            Ofrecemos un <strong>sistema inteligente de gestión y seguridad</strong> diseñado para condominios,
                            proporcionando control de acceso avanzado, monitoreo en tiempo real y alertas automáticas.
                        </p>
                    </div>

                </div>

                {/* Botón centrado en móviles, alineado a la izquierda en escritorio */}
                <div className="flex justify-center md:justify-start mt-6">
                    <Link href="/contact-us">
                        <button className="px-5 py-3 text-lg font-semibold rounded-lg bg-secondary hover:bg-secondary/80 transition">
                            Contáctanos
                        </button>
                    </Link>
                </div>
            </div>

            {/* Avatar con tamaño responsivo */}
            <div className="relative z-0 flex justify-center mt-10 md:mt-20 lg:mt-40">
                <AvatarServices className="w-[350px] md:w-[250px] lg:w-[400px] h-auto" />
            </div>

            {/* Elemento decorativo */}
            <div className="relative">
                <CircleImage />
            </div>
        </ContainerPage>
    );
};

export default ServicesPage;
