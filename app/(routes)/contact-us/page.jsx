"use client";

import Link from "next/link";

export default function ContactUs() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <div className="max-w-md w-full bg-white text-black shadow-lg rounded-lg p-6 text-center">
                <h1 className="text-2xl font-bold mb-4">¡Contáctanos!</h1>
                <p className="text-gray-700 mb-6">
                    ¿Quieres usar el servicio? Contáctanos por WhatsApp o LinkedIn.
                </p>

                <div className="flex flex-col gap-4">
                    <Link 
                        href="https://wa.me/XXXXXXXXXXX" 
                        target="_blank"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Contactar por WhatsApp
                    </Link>

                    <Link 
                        href="https://www.linkedin.com/in/tuperfil" 
                        target="_blank"
                        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    >
                        Contactar por LinkedIn
                    </Link>
                </div>
            </div>
        </div>
    );
}
