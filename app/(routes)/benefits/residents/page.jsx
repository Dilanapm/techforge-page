"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { QrCode, Smartphone, KeyRound, LogIn } from "lucide-react";

export default function ResidentsBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            🏠 Residente (Propietario y Copropietario)<br />
                            <TypeAnimation
                                sequence={[
                                    'Acceso seguro con QR',
                                    1000,
                                    'Gestión desde tu celular',
                                    1000,
                                    'Olvídate de llaves o tarjetas',
                                    1000,
                                    'Control total de tus ingresos',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> permite a los residentes gestionar sus accesos y los de sus visitantes de forma 
rápida, segura y desde su propio celular, sin necesidad de llaves físicas.
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

                    {/* Imagen optimizada */}
                    <Image
                        src="/resident.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Residente feliz"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div className="py-10">
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Beneficios para Residentes
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Disfruta de la libertad y seguridad que TorreSegura te brinda para controlar tu ingreso y el de tus visitantes.
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-gray-800">
                        {/* QR Intransferible */}
                        <div className="flex flex-col items-center">
                            <QrCode size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Códigos QR Únicos</span>
                            <p className="text-sm text-gray-600 text-center">Accede con códigos seguros e intransferibles para ti y tus visitas.</p>
                        </div>

                        {/* Seguridad sin llaves */}
                        <div className="flex flex-col items-center">
                            <KeyRound size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Sin Llaves Físicas en la entrada</span>
                            <p className="text-sm text-gray-600 text-center">Evita el uso de llaves o tarjetas. Todo desde tu celular.</p>
                        </div>

                        {/* App Móvil */}
                        <div className="flex flex-col items-center">
                            <Smartphone size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">App Móvil</span>
                            <p className="text-sm text-gray-600 text-center">Gestiona tus accesos, permisos y visitas desde tu smartphone.</p>
                        </div>

                        {/* Registro de ingresos */}
                        <div className="flex flex-col items-center">
                            <LogIn size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Registro Automático</span>
                            <p className="text-sm text-gray-600 text-center">Visualiza el historial de entradas y salidas al escanear tu QR.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
