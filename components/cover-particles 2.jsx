"use client";

import { useEffect, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    const [init, setInit] = useState(false);
    const [particleCount, setParticleCount] = useState(100); // Partículas iniciales
    const maxParticles = 100; // Límite máximo

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Manejador de clics para controlar la cantidad de partículas
    const handleParticleClick = useCallback(() => {
        setParticleCount((prevCount) => {
            const newCount = prevCount + 4;
            return newCount >= maxParticles ? maxParticles : newCount;
        });
    }, []);

    return (
        init && (
            <div className="w-[0px]">
                <Particles
                    id="tsparticles"
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: particleCount < maxParticles, // Bloquea la adición cuando llega al límite
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: { value: "#009ca6" },
                            links: {
                                color: "#009ca6",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: { default: "bounce" },
                                random: false,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                value: particleCount, // Usamos el estado para limitar el número de partículas
                                density: { enable: true },
                            },
                            opacity: { value: 0.5 },
                            shape: { type: "circle" },
                            size: { value: { min: 1, max: 5 } },
                        },
                        detectRetina: true,
                    }}
                    onClick={handleParticleClick} // Usamos el manejador para limitar las partículas
                />
            </div>
        )
    );
};
