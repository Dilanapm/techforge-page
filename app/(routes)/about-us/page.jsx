"use client"

import { ImageDisplay } from "@/components/ImageDisplay";  
import { Avatar } from "@/components/avatar";
import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";
const AboutUsPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                {/* <CoverParticles /> */}
                
                {/* Texto en el centro */}
                <div className="flex flex-col items-center text-center my-10">
                    <h1 className="text-2xl leading-tight text-center md:text-5xl md:mt-10">
                        Toda nuestra{' '}
                        <span className="font-bold text-secondary">
                            trayectoria profesional
                        </span>
                    </h1>
                    <div className="w-1/2 text-center hidden md:block mt-9">
                        <p className="text-lg font-medium">
                            Innovación y tecnología al servicio de la seguridad y gestión de condominios.
                        </p>
                    </div>
                </div>
                {/* Texto al centro en pantallas grandes */}
                

                {/* Contenedor de imágenes abajo */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-10">
                    
                    {/* Avatar a la izquierda */}
                    <div className="w-1/3 flex justify-start">
                        <Avatar />
                    </div>
                </div>

                <CounterServices />
              

            </ContainerPage>
        </>
    );
}

export default AboutUsPage;
