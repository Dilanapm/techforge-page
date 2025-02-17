"use client";

import { socialNetworks } from "@/data";
import Link from "next/link";
import { MotionTransition } from "./transition-component";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <MotionTransition position="bottom" className="fixed top-0 left-0 w-full z-50 bg-darkBg bg-opacity-90 backdrop-blur-md shadow-md h-20">
            <header className="w-full h-full flex items-center">
                <div className="container max-w-6xl mx-auto flex flex-wrap items-center justify-between px-4 md:flex-nowrap">
                    {/* Logo y Nombre */}
                    <Link href="/" className="flex flex-col items-center md:flex-row md:items-center">
                        
                        <Image
                            src="/logo-techforge.webp"
                            priority
                            width={50}
                            height={50}
                            className="md:ml-4 mt-2 md:mt-0"
                            alt="tech-forge-logo"
                        />
                    </Link>

                    {/* Redes Sociales */}
                    <div className="flex items-center justify-center gap-5 md:gap-7  md:w-auto mt-4 md:mt-0">
                        {socialNetworks.map(({ logo, src, id }) => (
                            <Link
                                key={id}
                                href={src}
                                target="_blank"
                                className="transition-all duration-300 hover:text-secondary"
                            >
                                {logo}
                            </Link>
                        ))}
                    </div>
                </div>
            </header>
        </MotionTransition>
    );
};

export default Header;
