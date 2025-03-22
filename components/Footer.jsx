const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-10">
            <div className="container mx-auto px-6">
                {/* Información de contacto */}
                <div className="grid md:grid-cols-4 gap-6 text-sm w-full max-w-5xl mx-auto">
                    
                    {/* Contacto */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Contacto</h3>
                        <p>📞 (+591) 77204038</p>
                        <p>📧 TechForge@gmail.com</p>
                        <p>📍 Irpavi calle 2 - 206, La Paz, Bolivia</p>
                    </div>

                    {/* TechForge */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">TechForge</h3>
                        <p className="hover:text-white  transition">Ayuda</p>
                        <p className="hover:text-white  transition">Seguridad</p>
                        <p className="hover:text-white  transition">Política de respaldo</p>
                    </div>

                    {/* Nosotros */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Nosotros</h3>
                        <p className="hover:text-white  transition">Oportunidades</p>
                    </div>

                    {/* Recursos */}
                    <div className="text-center md:text-left">
                        <h3 className="font-semibold text-white mb-2">Recursos</h3>
                        <p className="hover:text-white  transition">Blog</p>
                    </div>
                </div>

                {/* Línea divisoria */}
                <hr className="border-gray-600 my-6 w-full max-w-5xl mx-auto" />

                {/* Derechos reservados */}
                <div className="text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} TechForge. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
