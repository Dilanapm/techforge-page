"use client"

import Image from "next/image";
import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="relative hidden md:inline-block self-start">
            <Image 
                src="/avatar-1.webp" 
                width={400} 
                height={300} 
                className="w-full h-full" 
                alt="Particles"
            />
        </MotionTransition>
    );
}
