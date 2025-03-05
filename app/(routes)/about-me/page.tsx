"use client"

import { ImageDisplay } from "@/components/ImageDisplay";  
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const AboutMePage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                
                {/* Texto en el centro */}
                <div className="flex flex-col items-center text-center my-10">
                    <h1 className="text-2xl leading-tight text-center md:text-5xl md:mt-10">
                        Toda nuestra{' '}
                        <span className="font-bold text-secondary">
                            trayectoria profesional
                        </span>
                    </h1>
                </div>

                {/* Contenedor de imágenes abajo */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10">
                    
                    {/* Avatar a la izquierda */}
                    <div className="w-1/3 flex justify-start">
                        <Avatar />
                    </div>

                    {/* Texto al centro en pantallas grandes */}
                    <div className="w-1/3 text-center hidden md:block">
                        <p className="text-lg font-medium">
                            Innovación y tecnología al servicio de la seguridad y gestión de condominios.
                        </p>
                    </div>

                    {/* Imagen a la derecha */}
                    <div className="w-1/3 flex justify-end">
                        <ImageDisplay 
                            src="/image-9.webp"  
                            alt="Imagen representativa"
                            width={500}
                            height={300}
                            animated={true}  
                        /> 
                    </div>
                </div>

                <CounterServices />
                <TimeLine />

            </ContainerPage>
        </>
    );
}

export default AboutMePage;
