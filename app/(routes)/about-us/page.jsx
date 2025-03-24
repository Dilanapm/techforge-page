"use client";

import ContainerPage from "@/components/container-page";
import CounterServices from "@/components/counter-services";
import TransitionPage from "@/components/transition-page";

const AboutUsPage = () => {
    return (
        <>
            <TransitionPage />

            <main className="bg-white text-black py-24 px-6">
                <div>
                    {/* Título Principal */}
                    <section className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Somos <span className="text-secondary">TechForge</span>
                        </h1>
                        <p className="text-lg text-gray-700">
                            Empresa boliviana de tecnología que ofrece soluciones digitales enfocadas en la <strong>gestión</strong> y la <strong>seguridad</strong> para comunidades modernas.
                        </p>
                    </section>

                    {/* Contador */}
                    <section className="mt-16 flex justify-center">
                        <div className="w-full max-w-md">
                            <CounterServices />
                        </div>
                    </section>

                    {/* Sección: Misión */}
                    <section className="mt-24 text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Nuestra Misión</h2>
                        <p className="text-gray-700 text-lg">
                            Impulsar el desarrollo tecnológico en Bolivia y Latinoamérica mediante la creación de soluciones digitales innovadoras que mejoren la seguridad, la gestión y la calidad de vida de las personas. En TechForge creemos en el poder de la tecnología como motor de transformación social.
                        </p>
                    </section>

                    {/* Sección: Visión */}
                    <section className="mt-20 text-center max-w-4xl mx-auto mb-24">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Nuestra Visión</h2>
                        <p className="text-gray-700 text-lg">
                            Ser una empresa tecnológica referente en Latinoamérica, reconocida por su compromiso con la innovación, la accesibilidad y el impacto social, desarrollando plataformas digitales seguras, eficientes y sostenibles que respondan a las necesidades reales de la sociedad.
                        </p>
                    </section>

                </div>
            </main>
        </>
    );
};

export default AboutUsPage;
