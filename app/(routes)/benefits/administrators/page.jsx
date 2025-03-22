"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { ShieldCheck, UserCheck, LogIn, Zap } from "lucide-react";
export default function AdministratorsBenefits() {
    return (
        <div>
            {/* Sección de introducción */}
            <div className="relative z-20 w-full min-h-screen flex items-center overflow-visible px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="grid items-center w-full grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Texto */}
                    <div className="flex flex-col justify-center w-full max-w-2xl text-center md:text-left mt-20 md:mt-0 lg:mt-0">
                        <h1 className="mb-5 text-2xl leading-tight sm:text-3xl md:text-4xl md:mb-10">
                            🏢 Administrador del Condominio<br />
                            <TypeAnimation
                                sequence={[
                                    'Control total de accesos',
                                    1000,
                                    'Monitoreo en tiempo real',
                                    1000,
                                    'Automatización del edificio',
                                    1000,
                                    'Gestión eficiente de residentes',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="font-bold text-secondary"
                            />
                        </h1>

                        <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                            <strong>TorreSegura</strong> brinda herramientas digitales para que los administradores tengan el control total de la seguridad y accesos en el edificio, automatizando procesos y ahorrando tiempo.
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
                        src="/admin_happy.webp"
                        priority
                        width={300}
                        height={300}
                        alt="Administrador"
                        className="rounded-xl w-2/3 sm:w-full max-w-xs md:max-w-md lg:max-w-lg mx-auto object-contain max-h-[96vh]"
                    />
                </div>
            </div>

            {/* Beneficios */}
            <div className="py-10">
                <div className="bg-secondary/30 rounded-xl py-12 px-6 md:px-12 text-center shadow-lg w-full max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Beneficios para el Administrador del Condominio
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        Mejora la productividad y gestión del condominio con funcionalidades enfocadas en control y automatización.
                    </p>

                    {/* Grid de beneficios */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-gray-800">
                        {/* Control de accesos */}
                        <div className="flex flex-col items-center">
                            <ShieldCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Control de Accesos</span>
                            <p className="text-sm text-gray-600 text-center">Supervisa quién entra o sale del edificio fácilmente.</p>
                        </div>

                        {/* Registro de residentes y guardias */}
                        <div className="flex flex-col items-center">
                            <UserCheck size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Registro Eficiente</span>
                            <p className="text-sm text-gray-600 text-center">Añade y gestiona residentes y personal de seguridad.</p>
                        </div>

                        {/* Monitoreo en tiempo real */}
                        <div className="flex flex-col items-center">
                            <LogIn size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Monitoreo en Vivo</span>
                            <p className="text-sm text-gray-600 text-center">Visualiza salidas y entradas en tiempo real desde la plataforma.</p>
                        </div>

                        {/* Automatización */}
                        <div className="flex flex-col items-center">
                            <Zap size={40} className="text-blue-600" />
                            <span className="mt-2 font-semibold">Automatización</span>
                            <p className="text-sm text-gray-600 text-center">Reduce tareas repetitivas con procesos automáticos.</p>
                        </div>
                    </div>

                    {/* Enlace final */}
                    {/* <div className="mt-6">
                        <a href="#" className="text-blue-600 hover:underline text-lg font-medium">
                            📲 Explora todas las herramientas pensadas para administradores
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    );
}
