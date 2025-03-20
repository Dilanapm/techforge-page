"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { dataPortfolio } from "@/data";
import ClientBox from "@/components/clients-box";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";

const ClientsPage = () => {
    return (
        <ContainerPage>
            {/* <TransitionPage /> */}
            <div className="flex flex-col justify-center items-center relative mt-20 w-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Nuestros <span className="font-bold text-secondary">Clientes</span>
                </h1>

                {/* Swiper Carrusel */}
                <div className="relative w-full max-w-[95%] md:max-w-[1100px] mx-auto overflow-hidden">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        navigation={{
                            nextEl: ".swiper-clients-next",
                            prevEl: ".swiper-clients-prev",
                            clickable: true,
                        }}
                        pagination={{ el: ".swiper-pagination", clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 15 }, // Teléfonos
                            480: { slidesPerView: 1.3, spaceBetween: 20 }, // Teléfonos grandes
                            768: { slidesPerView: 1.8, spaceBetween: 25 }, // Tablets
                            1024: { slidesPerView: 2.5, spaceBetween: 30 }, // Pantallas grandes
                            1440: { slidesPerView: 3, spaceBetween: 35 }, // Pantallas extra grandes
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1.8,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container h-auto md:h-[480px] relative"
                    >
                        {dataPortfolio.map((data) => (
                            <SwiperSlide 
                                key={data.id} 
                                className="flex justify-center items-center transition-all duration-500 ease-in-out z-10"
                                style={{ perspective: "1200px" }}
                            >
                                <ClientBox data={data} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Controles de navegación mejorados */}
                    <div className="absolute top-1/2 left-0 w-full flex justify-between px-2 md:px-4 transform -translate-y-1/2 z-50">
                        <button className="swiper-clients-prev bg-indigo-700 text-white p-3 rounded-full shadow-md hover:bg-indigo-900 transition z-50">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="swiper-clients-next bg-indigo-700 text-white p-3 rounded-full shadow-md hover:bg-indigo-900 transition z-50">
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Paginación mejorada */}
                    <div className="swiper-pagination mt-4"></div>
                </div>
            </div>
        </ContainerPage>
    );
};

export default ClientsPage;
