"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { QrCode, Eye, ShieldCheck } from "lucide-react";

export default function GuardBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            🛡️ Guardia de Seguridad<br />
                            <TypeAnimation
                                sequence={[
                                    'Control de accesos con QR',
                                    1000,
                                    'Supervisión sin contacto',
                                    1000,
                                    'Mayor seguridad en el ingreso',
                                    1000,
                                    'Tecnología con inteligencia artificial',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> ofrece a los guardias herramientas modernas para verificar accesos de forma rápida y segura, con apoyo de cámaras inteligentes integradas.
                        </p>

                        {/* Botones */}
                        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-10 sm:flex-row sm:gap-5 pb-10">
                            <Link href="/clients">
                                <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md mb-5 text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                    Nuestros clientes
                                </button>
                            </Link>
                            <Link href="/contact-us">
                                <button className="px-5 py-3 transition-all border-2 cursor-pointer text-md mb-5 text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                                    Contáctanos
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Imagen del guardia */}
                    <Image
                        src="/qr-code.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Guardia de seguridad"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div className="py-10">
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Beneficios para Guardias de Seguridad
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Aumenta la eficacia y reduce el contacto físico gracias al sistema de TorreSegura.
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 text-gray-800">
                        {/* Verificación con QR */}
                        <div className="flex flex-col items-center">
                            <QrCode size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Verificación QR</span>
                            <p className="text-sm text-gray-600 text-center">Escanea rápidamente los códigos de visitantes o residentes.</p>
                        </div>

                        {/* Supervisión sin contacto */}
                        <div className="flex flex-col items-center">
                            <Eye size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Supervisión sin contacto</span>
                            <p className="text-sm text-gray-600 text-center">Verifica sin necesidad de contacto físico.</p>
                        </div>

                        {/* Seguridad y control */}
                        <div className="flex flex-col items-center">
                            <ShieldCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Mayor Seguridad</span>
                            <p className="text-sm text-gray-600 text-center">Evita ingresos no autorizados con registros automáticos.</p>
                        </div>
                        
                    </div>

                    
                </div>
            </div>
        </div>
    );
}
