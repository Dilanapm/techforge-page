"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { dataPortfolio } from "@/data";
import AvatarPortfolio from "@/components/avatar-portfolio";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import ClientBox from "@/components/clients-box";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientsPage = () => {
    return (
        <ContainerPage>
            <TransitionPage />
            <AvatarPortfolio />
            <CircleImage />
            <div className="flex flex-col justify-center items-center relative">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Nuestros <span className="font-bold text-secondary">Clientes</span>
                </h1>

                {/* Swiper Carrusel */}
                <div className="relative max-w-[1000px] mx-auto overflow-visible"> 
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={2.5} // Ajustado para mejorar la simetría
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1.8, // Ajustado para mejorar la separación
                            slideShadows: true,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container h-[500px] overflow-visible"
                    >
                        {dataPortfolio.map((data) => (
                            <SwiperSlide 
                                key={data.id} 
                                className="w-[500px] flex justify-center items-center transition-all duration-500 ease-in-out overflow-visible"
                                style={{ perspective: "1200px" }}
                            >
                                <ClientBox data={data} />
                            </SwiperSlide>
                        ))}

                        {/* Controles de navegación */}
                        <div className="slider-controler absolute top-1/2 left-0 w-full flex justify-between px-4 transform -translate-y-1/2">
                            <div className="swiper-button-prev slider-arrow bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition">
                                <ChevronLeft size={35} />
                            </div>
                            <div className="swiper-button-next slider-arrow bg-white text-black p-3 rounded-full shadow-md hover:bg-gray-200 transition">
                                <ChevronRight size={35} />
                            </div>
                        </div>
                        <div className="swiper-pagination mt-4"></div>
                    </Swiper>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ClientsPage;
