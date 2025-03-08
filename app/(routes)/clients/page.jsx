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
import { CoverParticles } from "@/components/cover-particles";
const ClientsPage = () => {
    return (
       <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center items-center relative mt-20">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Nuestros <span className="font-bold text-secondary">Clientes</span>
                </h1>

                {/* Swiper Carrusel */}
                <div className="relative w-full max-w-[90%] md:max-w-[1000px] mx-auto overflow-visible">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 10 }, // Móviles
                            640: { slidesPerView: 1.5, spaceBetween: 20 }, // Tablets pequeñas
                            1024: { slidesPerView: 2.5, spaceBetween: 30 }, // Pantallas grandes
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1.8,
                            slideShadows: true,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                            clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container h-[460px] md:h-[460px] overflow-visible relative mb-4"
                    >
                        {dataPortfolio.map((data) => (
                            <SwiperSlide 
                                key={data.id} 
                                className="w-[300px] md:w-[500px] flex justify-center items-center transition-all duration-500 ease-in-out overflow-visible z-10"
                                style={{ perspective: "1200px" }}
                            >
                                <ClientBox data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Controles de navegación - Se colocan fuera del Swiper */}
                    <div className="w-full flex mt-auto justify-center px-12 md:px-4 transform z-50">
                        <button className="swiper-button-prev slider-arrow bg-indigo-700 text-black p-2 md:p-3 rounded-full shadow-md hover:bg-indigo-950 transition z-50">
                            <ChevronLeft className="w-4 h-4  md:w-8 md:h-8" />
                        </button>
                        <button className="swiper-button-next slider-arrow bg-indigo-700 text-black p-2 md:p-3 rounded-full shadow-md hover:bg-indigo-950 transition z-50">
                            <ChevronRight className="w-4 h-4 md:w-8 md:h-8" />
                        </button>
                    </div>
                    
                    <div className="swiper-pagination"></div>
                    
                </div>
            </div>
        </ContainerPage>
    );
};

export default ClientsPage;
