"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-10 py-4 flex items-center justify-between bg-white text-black shadow-md fixed top-0 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-techforge.webp"
          alt="TechForge Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-secondary">TechForge</span>
      </Link>

      {/* Navegación en escritorio */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-secondary hover:text-teal-700 transition">Inicio</Link>
        <Link href="/about-us" className="text-gray-800 hover:text-secondary transition">Nosotros</Link>
        <Link href="/services" className="text-gray-800 hover:text-secondary transition">Servicios</Link>
        <Link href="/team" className="text-gray-800 hover:text-secondary transition">Equipo</Link>
        <Link href="/contact-us" className="text-gray-800 hover:text-secondary transition">Contacto</Link>
      </nav>

      {/* Botón menú para móvil */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} className="text-secondary" /> : <Menu size={28} className="text-secondary" />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white px-6 py-4 shadow-lg flex flex-col gap-4 md:hidden z-40 text-gray-800">
          <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Inicio</Link>
          <Link href="/about-us" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Nosotros</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Servicios</Link>
          <Link href="/team" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Equipo</Link>
          <Link href="/contact-us" onClick={() => setIsOpen(false)} className="hover:text-secondary transition">Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
