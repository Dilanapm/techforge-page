import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import { CoverParticles } from "@/components/cover-particles";
const ServicesPage = () => {
    return (
        <>
        <CoverParticles/>
            <TransitionPage />
            <CircleImage />
            <AvatarServices />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
                        Nuestros <span className="font-bold text-secondary">servicios de seguridad.</span>
                    </h1>
                    <p className="mb-3 text-xl text-gray-300">
                        Ofrecemos un <strong>sistema inteligente de gestión y seguridad</strong> diseñado para condominios,
                        proporcionando control de acceso avanzado, monitoreo en tiempo real y alertas automáticas.
                    </p>


                    <Link href="/contact-us">
                        <button className="ml-48 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
                            <strong>Contáctanos</strong>
                        </button>
                    </Link>

                </div>

                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;