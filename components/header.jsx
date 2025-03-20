"use client";

import { useState } from "react";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import { Menu, X, ShieldCheck, Users, Briefcase, UserCheck } from "lucide-react"; // Íconos

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [benefitsOpen, setBenefitsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Para manejar el menú en móviles

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleBenefits = () => {
        setBenefitsOpen(!benefitsOpen);
    };

    return (
        <MotionTransition position="bottom" className="fixed top-0 left-0 w-full z-50 bg-secondary/60 bg-opacity-90 backdrop-blur-md shadow-md h-20">
            <header className="w-full h-full flex items-center justify-between px-6 md:px-10">
                
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <h1 className="font-bold text-2xl">Tech<strong>Forge</strong></h1>
                </Link>

                {/* Menú */}
                <div className="flex items-center gap-6">
                    {/* Botón Menú en móviles */}
                    <button 
                        className="md:hidden text-white focus:outline-none" 
                        onClick={toggleMenu}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                    {/* Navegación en escritorio */}
                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="text-white hover:text-gray-600 transition">Inicio</Link>
                        
                        {/* Menú de Beneficios */}
                        <div className="relative">
                            <button 
                                className="text-white hover:text-gray-600 transition flex items-center"
                                onMouseEnter={() => setBenefitsOpen(true)}
                                onClick={() => setBenefitsOpen(!benefitsOpen)} // Toggle on click también
                            >
                                Beneficios ▼
                            </button>

                            {/* Dropdown Beneficios en Desktop - Elimina el espacio entre botón y dropdown */}
                            {benefitsOpen && (
                                <div 
                                    className="absolute left-0 top-full pt-2 z-50"
                                    onMouseLeave={() => setBenefitsOpen(false)}
                                >
                                    {/* Este div invisible crea un "puente" entre el botón y el contenido */}
                                    <div className="absolute w-full h-2 top-0 left-0"></div>
                                    
                                    <div className="w-[400px] bg-white shadow-lg rounded-lg p-4 grid grid-cols-2 gap-4">
                                        {/* Administradores - Con enlace y fondo verde transparente */}
                                        <Link href="#" className="block bg-green-200/40 rounded-lg p-2 hover:bg-green-200/70 transition-all duration-200">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                    <Briefcase size={18} className="text-green-600" />
                                                    Administradores
                                                </div>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Gestión eficiente, transparencia y comunicación.
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Residentes - Con enlace y fondo azul transparente */}
                                        <Link href="#" className="block bg-blue-200/40 rounded-lg p-2 hover:bg-blue-200/70 transition-all duration-200">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                    <Users size={18} className="text-blue-600" />
                                                    Residentes
                                                </div>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Información organizada en un solo lugar.
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Guardias - Con enlace y fondo amarillo transparente */}
                                        <Link href="#" className="block bg-yellow-200/40 rounded-lg p-2 hover:bg-yellow-200/70 transition-all duration-200">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                    <ShieldCheck size={18} className="text-yellow-600" />
                                                    Guardias
                                                </div>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Acceso rápido a visitas QR y reportes.
                                                </p>
                                            </div>
                                        </Link>

                                        {/* Recepcionistas - Con enlace y fondo violeta transparente */}
                                        <Link href="#" className="block bg-purple-200/40 rounded-lg p-2 hover:bg-purple-200/70 transition-all duration-200">
                                            <div className="flex flex-col">
                                                <div className="flex items-center gap-2 text-gray-700 font-bold">
                                                    <UserCheck size={18} className="text-purple-600" />
                                                    Recepcionistas
                                                </div>
                                                <p className="text-gray-500 text-sm mt-1">
                                                    Control de accesos y visitas en tiempo real.
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link href="/clients" className="text-white hover:text-gray-600 transition">Clientes</Link>
                        <Link href="/contact-us" className="text-white hover:text-gray-600 transition">Contáctanos</Link>
                    </nav>

                    {/* Botón de Ingresar */}
                    <Link 
                        href="https://mysite-tlxb.onrender.com/users/login" 
                        target="_blank"
                        className="hidden md:block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                    >
                        Ingresar
                    </Link>
                </div>
            </header>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
                <nav className="md:hidden absolute top-20 left-0 w-full bg-secondary/80 backdrop-blur-md shadow-md py-4 flex flex-col items-center gap-4 transition-all duration-300">
                    <Link href="/" className="text-white hover:text-gray-600 transition" onClick={toggleMenu}>Inicio</Link>
                    
                    {/* Beneficios en móviles - Ahora justo después de Inicio */}
                    <button 
                        className="text-white hover:text-gray-600 transition flex items-center"
                        onClick={toggleBenefits}
                    >
                        Beneficios ▼
                    </button>

                    {benefitsOpen && (
                        <div className="w-[90%] bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
                            {/* Versión móvil también con links y fondos de colores */}
                            <Link href="#" className="block bg-green-200/40 rounded-lg p-2 hover:bg-green-200/70 transition-all">
                                <div className="text-gray-700 font-bold">Administradores</div>
                                <p className="text-gray-500 text-sm">Gestión eficiente y comunicación.</p>
                            </Link>

                            <Link href="#" className="block bg-blue-200/40 rounded-lg p-2 hover:bg-blue-200/70 transition-all">
                                <div className="text-gray-700 font-bold">Residentes</div>
                                <p className="text-gray-500 text-sm">Información organizada en un solo lugar.</p>
                            </Link>

                            <Link href="#" className="block bg-yellow-200/40 rounded-lg p-2 hover:bg-yellow-200/70 transition-all">
                                <div className="text-gray-700 font-bold">Guardias</div>
                                <p className="text-gray-500 text-sm">Acceso rápido a visitas QR y reportes.</p>
                            </Link>

                            <Link href="#" className="block bg-purple-200/40 rounded-lg p-2 hover:bg-purple-200/70 transition-all">
                                <div className="text-gray-700 font-bold">Recepcionistas</div>
                                <p className="text-gray-500 text-sm">Control de accesos y visitas en tiempo real.</p>
                            </Link>
                        </div>
                    )}

                    <Link href="/clients" className="text-white hover:text-gray-600 transition" onClick={toggleMenu}>Clientes</Link>
                    <Link href="/contact-us" className="text-white hover:text-gray-600 transition" onClick={toggleMenu}>Contáctanos</Link>

                    <Link 
                        href="https://mysite-tlxb.onrender.com/users/login" 
                        target="_blank"
                        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
                        onClick={toggleMenu}
                    >
                        Ingresar
                    </Link>
                </nav>
            )}
        </MotionTransition>
    );
};

export default Header;