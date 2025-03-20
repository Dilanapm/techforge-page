import Image from "next/image";
import Link from "next/link"; // Usar Next.js para navegación
import { TypeAnimation } from 'react-type-animation';
// bg-darkBg/60
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

const Introduction = () => {
    return (
        <div>
        <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                {/* Texto */}
                <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                        TorreTrust le brinda<br />
                        <TypeAnimation
                            sequence={[
                                'Mejor Seguridad',
                                1000,
                                'Integración con IA',
                                1000,
                                'Monitoreo en Tiempo Real',
                                1000,
                                'Control de Accesos',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                     <strong>"TorreTrust"</strong> ayuda a la seguridad y gestión de accesos en condominios verticales mediante inteligencia artificial y control digital, garantizando un entorno seguro, eficiente y moderno.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5 pb-10">
                        <Link href="/clients">
                            <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md 
                             mb-5
                            text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Nuestros clientes
                            </button>
                        </Link>
                        <Link href="/contact-us">
                            <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md
                            mb-5
                            text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                Contáctanos
                            </button>
                        </Link>
                    </div>
                </div>
                 {/* Imagen optimizada */}
                 <Image 
                    src="/edificio.webp"
                    priority
                    width={300}
                    height={300}
                    alt="Avatar"
                    className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                />
            </div>
            







           
        
        </div>

 {/* Sección de Clientes */}
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




        </div>
    );
}

export default Introduction;